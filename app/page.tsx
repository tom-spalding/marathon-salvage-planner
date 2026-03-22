"use client";

import { Suspense, useState, useMemo, useRef, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import {
  SALVAGE_DATA,
  MAPS,
  SALVAGE_RARITY_COLOR,
  salvageVisualFor,
  GENERIC_SALVAGE_ICON,
} from "./data/salvage";

const GITHUB_PAGES_ASSET_BASE = "https://tom-spalding.github.io/marathon-salvage-planner";
const ASSET_BASE_URL = process.env.NODE_ENV === "production" ? GITHUB_PAGES_ASSET_BASE : "";

const MAP_IMAGE_BY_NAME: Record<string, string> = {
  Perimeter: "perimeter.jpg",
  Outpost: "outpost.jpg",
  "Dire Marsh": "dire-marsh.jpg",
  "Cryo Archive": "cryo-archive.png",
};

const mapImageFor = (mapName: string) =>
  `${ASSET_BASE_URL}/maps/${MAP_IMAGE_BY_NAME[mapName] ?? "perimeter.jpg"}`;

const MAP_QUERY_KEY = "map";
const ITEMS_QUERY_KEY = "items";

const RARITY_SORT_ORDER = {
  Standard: 0,
  Enhanced: 1,
  Deluxe: 2,
  Superior: 3,
  Prestige: 4,
  Contraband: 5,
} as const;

const slugifyItemName = (name: string) =>
  name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

const validItemNames = new Set(SALVAGE_DATA.map((item) => item.name));
const itemNameBySlug = new Map(
  SALVAGE_DATA.map((item) => [slugifyItemName(item.name), item.name]),
);
const itemSlugByName = new Map(
  SALVAGE_DATA.map((item) => [item.name, slugifyItemName(item.name)]),
);

const parseSelectedMap = (mapParam: string | null) => {
  const normalizedMap = mapParam === "Cryo Archives" ? "Cryo Archive" : mapParam;
  return MAPS.find((map) => map === normalizedMap) ?? MAPS[0];
};

const parseSelectedItems = (itemsParam: string | null) => {
  if (!itemsParam) {
    return [];
  }

  return itemsParam
    .split(",")
    .map((value) => value.trim())
    .map((value) => {
      if (validItemNames.has(value)) {
        return value;
      }

      return itemNameBySlug.get(value) ?? "";
    })
    .filter((item, index, array) => item.length > 0 && array.indexOf(item) === index);
};

function HomeContent() {
  const searchParams = useSearchParams();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const [selectedMap, setSelectedMap] = useState(MAPS[0]);
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const sortedSalvageData = useMemo(
    () =>
      [...SALVAGE_DATA].sort((a, b) => {
        const rarityDiff = RARITY_SORT_ORDER[a.rarity] - RARITY_SORT_ORDER[b.rarity];
        if (rarityDiff !== 0) {
          return rarityDiff;
        }
        return a.name.localeCompare(b.name);
      }),
    [],
  );

  useEffect(() => {
    setSelectedMap(parseSelectedMap(searchParams.get(MAP_QUERY_KEY)));
    setSelectedItems(parseSelectedItems(searchParams.get(ITEMS_QUERY_KEY)));
  }, [searchParams]);

  useEffect(() => {
    const syncFromLocation = () => {
      const params = new URLSearchParams(window.location.search);
      setSelectedMap(parseSelectedMap(params.get(MAP_QUERY_KEY)));
      setSelectedItems(parseSelectedItems(params.get(ITEMS_QUERY_KEY)));
    };

    window.addEventListener("popstate", syncFromLocation);
    return () => window.removeEventListener("popstate", syncFromLocation);
  }, []);

  const updateSelection = (nextMap: (typeof MAPS)[number], nextItems: string[]) => {
    setSelectedMap(nextMap);
    setSelectedItems(nextItems);

    const params = new URLSearchParams(window.location.search);

    if (nextMap === MAPS[0]) {
      params.delete(MAP_QUERY_KEY);
    } else {
      params.set(MAP_QUERY_KEY, nextMap);
    }

    if (nextItems.length === 0) {
      params.delete(ITEMS_QUERY_KEY);
    } else {
      params.set(
        ITEMS_QUERY_KEY,
        nextItems.map((item) => itemSlugByName.get(item) ?? item).join(","),
      );
    }

    const nextQuery = params.toString();
    const nextPath = window.location.pathname;
    const nextUrl = nextQuery ? `${nextPath}?${nextQuery}` : nextPath;
    window.history.replaceState(window.history.state, "", nextUrl);
  };

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleItem = (name: string) => {
    const nextItems = selectedItems.includes(name)
      ? selectedItems.filter((item) => item !== name)
      : [...selectedItems, name];

    updateSelection(selectedMap, nextItems);
  };

  const results = useMemo(() => {
    if (selectedItems.length === 0) return { locations: [], containers: [] };
    const selectedData = SALVAGE_DATA.filter((item) =>
      selectedItems.includes(item.name)
    );

    // Named locations on selected map — count distinct selected items per place
    const locationMap = new Map<string, string[]>();
    for (const item of selectedData) {
      for (const loc of item.locations) {
        if (loc.map === selectedMap) {
          const existing = locationMap.get(loc.place) ?? [];
          if (!existing.includes(item.name)) {
            locationMap.set(loc.place, [...existing, item.name]);
          }
        }
      }
    }
    const locations = Array.from(locationMap.entries())
      .map(([place, items]) => ({ place, items, count: items.length }))
      .sort((a, b) => b.count - a.count);

    // Containers — collected from all selected items regardless of map
    const containerMap = new Map<string, string[]>();
    for (const item of selectedData) {
      for (const container of item.containers) {
        const existing = containerMap.get(container) ?? [];
        if (!existing.includes(item.name)) {
          containerMap.set(container, [...existing, item.name]);
        }
      }
    }
    const containers = Array.from(containerMap.entries())
      .map(([container, items]) => ({ container, items, count: items.length }))
      .sort((a, b) => b.count - a.count);

    return { locations, containers };
  }, [selectedItems, selectedMap]);

  const displayText =
    selectedItems.length === 0
      ? "Select salvage items..."
      : selectedItems.length === 1
      ? selectedItems[0]
      : `${selectedItems.length} items selected`;

  return (
    <div className="w-full bg-zinc-950 text-zinc-100 px-4 pt-4 pb-0 sm:px-8 sm:pt-8 sm:pb-0">
      <div className="max-w-xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold tracking-tight text-white">
            Marathon{" "}
            <span className="text-amber-400">Salvage Planner</span>
          </h1>
          <p className="text-zinc-500 text-sm mt-1">
            Select a map and items to find the best farming locations.
          </p>
        </div>

        <div className="mb-4">
          <img
            src={mapImageFor(selectedMap)}
            alt={`${selectedMap} map`}
            className="w-full rounded-lg border border-zinc-800 bg-zinc-900 object-cover"
            onError={(event) => {
              event.currentTarget.style.display = "none";
            }}
          />
        </div>

        {/* Map Selector */}
        <div className="mb-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-2">
            Map
          </p>
          <div className="flex gap-2 flex-wrap">
            {MAPS.map((map) => (
              <button
                key={map}
                onClick={() => updateSelection(map, selectedItems)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all cursor-pointer ${
                  selectedMap === map
                    ? "bg-amber-500 text-zinc-950 shadow-lg shadow-amber-500/20"
                    : "bg-zinc-800 text-zinc-400 hover:bg-zinc-700 hover:text-zinc-200"
                }`}
              >
                {map}
              </button>
            ))}
          </div>
        </div>

        {selectedItems.length > 0 && (
          <div className="mb-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-2">
              Selected Items
            </p>
            <div className="flex flex-wrap gap-2">
              {selectedItems.map((itemName) => {
                const visual = salvageVisualFor(itemName);
                return (
                  <button
                    key={itemName}
                    type="button"
                    onClick={() => toggleItem(itemName)}
                    className="salvage-chip-bg inline-flex items-center gap-2 rounded-md px-2 py-1.5 text-xs font-semibold text-zinc-950 ring-1 ring-black/25 transition-transform hover:scale-[1.02] cursor-pointer"
                    style={{ "--salvage-bg": visual.color } as React.CSSProperties}
                    title={`Click to unselect ${itemName}`}
                  >
                    <img
                      src={visual.image}
                      alt={itemName}
                      className="h-5 w-5 rounded object-cover bg-black/10"
                      onError={(event) => {
                        if (event.currentTarget.src === GENERIC_SALVAGE_ICON) {
                          return;
                        }
                        event.currentTarget.src = GENERIC_SALVAGE_ICON;
                      }}
                    />
                    <span>{itemName}</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Item Multi-Select Dropdown */}
        <div className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-2">
            Salvage Items
          </p>
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setDropdownOpen((v) => !v)}
              className="w-full flex items-center justify-between gap-3 px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-sm hover:border-zinc-500 transition-colors cursor-pointer"
            >
              <span
                className={`truncate ${
                  selectedItems.length === 0 ? "text-zinc-500" : "text-zinc-100"
                }`}
              >
                {displayText}
              </span>
              <svg
                className={`w-4 h-4 flex-shrink-0 text-zinc-500 transition-transform duration-200 ${
                  dropdownOpen ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {dropdownOpen && (
              <div className="absolute z-50 w-full mt-1 bg-zinc-800 border border-zinc-700 rounded-lg shadow-2xl max-h-64 overflow-y-auto">
                <div className="sticky top-0 px-4 py-2 bg-zinc-800 border-b border-zinc-700 flex justify-between items-center">
                  <span className="text-xs text-zinc-400">
                    {selectedItems.length} selected
                  </span>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() =>
                        updateSelection(
                          selectedMap,
                          sortedSalvageData.map((item) => item.name),
                        )
                      }
                      className="text-xs text-amber-400 hover:text-amber-300 transition-colors cursor-pointer"
                    >
                      Select all
                    </button>
                    <button
                      onClick={() => updateSelection(selectedMap, [])}
                      className="text-xs text-amber-400 hover:text-amber-300 transition-colors cursor-pointer"
                    >
                      Clear all
                    </button>
                  </div>
                </div>
                {sortedSalvageData.map((item) => (
                  <label
                    key={item.name}
                    className="flex items-center gap-3 pl-3 pr-4 py-2.5 border-l-4 border-solid hover:bg-zinc-700/50 cursor-pointer select-none"
                    style={{ borderLeftColor: SALVAGE_RARITY_COLOR[item.rarity] }}
                  >
                    <input
                      type="checkbox"
                      checked={selectedItems.includes(item.name)}
                      onChange={() => toggleItem(item.name)}
                      className="w-4 h-4 rounded accent-amber-500 flex-shrink-0"
                    />
                    <span className="text-sm text-zinc-300">{item.name}</span>
                  </label>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Results */}
        {selectedItems.length > 0 ? (
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-3">
              Locations on {selectedMap}
            </p>

            {results.locations.length === 0 ? (
              <p className="text-sm text-zinc-600 mb-6 pl-1">
                No named locations on {selectedMap} for the selected items.
              </p>
            ) : (
              <div className="space-y-2 mb-6">
                {results.locations.map(({ place, items, count }, i) => {
                  const rankStyle =
                    i === 0
                      ? "bg-amber-500 text-zinc-950"
                      : i === 1
                      ? "bg-zinc-300 text-zinc-950"
                      : i === 2
                      ? "bg-amber-700 text-zinc-100"
                      : "bg-zinc-700 text-zinc-400";
                  return (
                    <div
                      key={place}
                      className="flex items-start gap-3 p-4 bg-zinc-800/60 rounded-lg border border-zinc-700"
                    >
                      <div
                        className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${rankStyle}`}
                      >
                        {i + 1}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-baseline justify-between gap-2">
                          <span className="font-medium text-white">{place}</span>
                          <span className="text-xs text-zinc-500 flex-shrink-0">
                            {count}/{selectedItems.length} items
                          </span>
                        </div>
                        <div className="mt-2 flex flex-wrap gap-1.5">
                          {items.map((item) => {
                            const itemVisual = salvageVisualFor(item);
                            return (
                              <span
                                key={item}
                                className="salvage-chip-bg text-xs font-semibold text-zinc-950 px-2 py-0.5 rounded-full ring-1 ring-black/25"
                                style={{ "--salvage-bg": itemVisual.color } as React.CSSProperties}
                              >
                                {item}
                              </span>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {results.containers.length > 0 && (
              <>
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex-1 h-px bg-zinc-800" />
                  <p className="text-xs font-semibold uppercase tracking-widest text-zinc-600">
                    Also check
                  </p>
                  <div className="flex-1 h-px bg-zinc-800" />
                </div>
                <div className="space-y-2">
                  {results.containers.map(({ container, items }) => (
                    <div
                      key={container}
                      className="flex items-start gap-3 p-4 bg-zinc-900 rounded-lg border border-zinc-800"
                    >
                      <div className="flex-shrink-0 w-7 h-7 rounded-full bg-zinc-800 flex items-center justify-center">
                        <svg
                          className="w-3.5 h-3.5 text-zinc-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                          />
                        </svg>
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="font-medium text-zinc-300">
                          {container}
                        </span>
                        <div className="mt-2 flex flex-wrap gap-1.5">
                          {items.map((item) => (
                            <span
                              key={item}
                              className="text-xs bg-zinc-800 text-zinc-500 px-2 py-0.5 rounded-full"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        ) : (
          <div className="text-center py-12 text-zinc-700">
            <svg
              className="w-10 h-10 mx-auto mb-3 opacity-40"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
              />
            </svg>
            <p className="text-sm">Select salvage items above to see locations</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <Suspense fallback={null}>
      <HomeContent />
    </Suspense>
  );
}
