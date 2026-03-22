export type MapName = "Perimeter" | "Outpost" | "Dire Marsh" | "Cryo Archive";

export const MAPS: MapName[] = ["Perimeter", "Dire Marsh", "Outpost", "Cryo Archive"];

export type SalvageRarity =
  | "Standard"
  | "Enhanced"
  | "Deluxe"
  | "Superior"
  | "Prestige"
  | "Contraband";

export const SALVAGE_COLOR_STANDARD = "rgb(202, 202, 214)"; // #CACAD6
export const SALVAGE_COLOR_ENHANCED = "rgb(0, 255, 125)"; // #00FF7D
export const SALVAGE_COLOR_DELUXE = "rgb(33, 180, 250)"; // #21B4FA
export const SALVAGE_COLOR_SUPERIOR = "rgb(233, 18, 246)"; // #E912F6
export const SALVAGE_COLOR_PRESTIGE = "rgb(255, 244, 12)"; // #FFF40C
export const SALVAGE_COLOR_CONTRABAND = "rgb(255, 51, 51)"; // #FF3333

export const SALVAGE_RARITY_COLOR: Record<SalvageRarity, string> = {
  Standard: SALVAGE_COLOR_STANDARD,
  Enhanced: SALVAGE_COLOR_ENHANCED,
  Deluxe: SALVAGE_COLOR_DELUXE,
  Superior: SALVAGE_COLOR_SUPERIOR,
  Prestige: SALVAGE_COLOR_PRESTIGE,
  Contraband: SALVAGE_COLOR_CONTRABAND,
};

export type SalvageEntry = {
  name: string;
  rarity: SalvageRarity;
  locations: { map: MapName; place: string }[];
  containers: string[];
};

export const SALVAGE_DATA: SalvageEntry[] = [
  // Standard
  {
    name: "Altered Wire",
    rarity: "Standard",
    locations: [{ map: "Perimeter", place: "Station" }],
    containers: ["Munitions Crates", "Locked Rooms"],
  },
  {
    name: "Data Card",
    rarity: "Standard",
    locations: [],
    containers: [],
  },
  {
    name: "Unstable Biomass",
    rarity: "Standard",
    locations: [
      { map: "Perimeter", place: "Hauler" },
      { map: "Perimeter", place: "Overflow" },
      { map: "Dire Marsh", place: "Algae Ponds" },
      { map: "Dire Marsh", place: "Greenhouse" },
    ],
    containers: [],
  },
  {
    name: "Unstable Diode",
    rarity: "Standard",
    locations: [
      { map: "Perimeter", place: "North Relay" },
      { map: "Perimeter", place: "South Relay" },
      { map: "Outpost", place: "Dormitories" },
      { map: "Outpost", place: "Flight Control" },
    ],
    containers: [],
  },
  {
    name: "Unstable Gel",
    rarity: "Standard",
    locations: [
      { map: "Dire Marsh", place: "Bio Research" },
      { map: "Outpost", place: "Orientation" },
      { map: "Outpost", place: "Processing" },
    ],
    containers: [],
  },
  {
    name: "Unstable Gunmetal",
    rarity: "Standard",
    locations: [
      { map: "Perimeter", place: "Station" },
      { map: "Dire Marsh", place: "AI Uplink" },
      { map: "Dire Marsh", place: "Maintenance" },
    ],
    containers: [],
  },
  {
    name: "Unstable Lead",
    rarity: "Standard",
    locations: [
      { map: "Dire Marsh", place: "Quarantine" },
      { map: "Dire Marsh", place: "Complex" },
      { map: "Outpost", place: "Airfield" },
    ],
    containers: [],
  },
  {
    name: "Weapon Parts",
    rarity: "Standard",
    locations: [],
    containers: [],
  },
  // Enhanced
  {
    name: "Aluminum Rods",
    rarity: "Enhanced",
    locations: [],
    containers: [],
  },
  {
    name: "Basic Xerogel",
    rarity: "Enhanced",
    locations: [],
    containers: [],
  },
  {
    name: "Carbon Wire",
    rarity: "Enhanced",
    locations: [],
    containers: [],
  },
  {
    name: "Deimosite Rods",
    rarity: "Enhanced",
    locations: [{ map: "Dire Marsh", place: "Maintenance" }],
    containers: ["Arms Lockers"],
  },
  {
    name: "Dermachem Pack",
    rarity: "Enhanced",
    locations: [{ map: "Outpost", place: "Pinwheel Base" }],
    containers: ["Medical Cabinets"],
  },
  {
    name: "Drone Node",
    rarity: "Enhanced",
    locations: [
      { map: "Outpost", place: "Orientation" },
      { map: "Outpost", place: "Pinwheel Base" },
      { map: "Outpost", place: "Processing" },
    ],
    containers: ["Tool Carts"],
  },
  {
    name: "Drone Resin",
    rarity: "Enhanced",
    locations: [{ map: "Dire Marsh", place: "Bio Research" }],
    containers: ["Tool Carts"],
  },
  {
    name: "Dynamic Compounds",
    rarity: "Enhanced",
    locations: [
      { map: "Dire Marsh", place: "Complex" },
      { map: "Outpost", place: "Airfield" },
      { map: "Outpost", place: "Pinwheel Base" },
    ],
    containers: ["Munitions Crates"],
  },
  {
    name: "Epoxy Resin",
    rarity: "Enhanced",
    locations: [],
    containers: [],
  },
  {
    name: "Fractal Circuit",
    rarity: "Enhanced",
    locations: [
      { map: "Perimeter", place: "North Relay" },
      { map: "Outpost", place: "Flight Control" },
      { map: "Outpost", place: "Dormitories" },
      { map: "Outpost", place: "Pinwheel Base" },
    ],
    containers: ["Core Storage"],
  },
  {
    name: "Hydrocarbon Rubber",
    rarity: "Enhanced",
    locations: [],
    containers: [],
  },
  {
    name: "Nanocomposites",
    rarity: "Enhanced",
    locations: [],
    containers: [],
  },
  {
    name: "Plastic Filament",
    rarity: "Enhanced",
    locations: [{ map: "Dire Marsh", place: "AI Uplink" }],
    containers: ["Bioprinters"],
  },
  {
    name: "Putty Explosive",
    rarity: "Enhanced",
    locations: [],
    containers: [],
  },
  {
    name: "Reclaimed Biostripping",
    rarity: "Enhanced",
    locations: [
      { map: "Perimeter", place: "Hauler" },
      { map: "Dire Marsh", place: "Algae Ponds" },
    ],
    containers: ["Arms Lockers"],
  },
  {
    name: "Sparkleaf",
    rarity: "Enhanced",
    locations: [
      { map: "Perimeter", place: "Overflow" },
      { map: "Dire Marsh", place: "Greenhouse" },
    ],
    containers: [],
  },
  {
    name: "Storage Drive",
    rarity: "Enhanced",
    locations: [{ map: "Perimeter", place: "South Relay" }],
    containers: ["Core Storage"],
  },
  {
    name: "Surveillance Lens",
    rarity: "Enhanced",
    locations: [{ map: "Dire Marsh", place: "Quarantine" }],
    containers: ["Bioprinters"],
  },
  // Deluxe
  {
    name: "Amygdala Drive",
    rarity: "Deluxe",
    locations: [{ map: "Perimeter", place: "South Relay" }],
    containers: ["Core Storage", "Locked Rooms"],
  },
  {
    name: "Anomalous Wire",
    rarity: "Deluxe",
    locations: [{ map: "Perimeter", place: "Station" }],
    containers: ["Munitions Crates", "Locked Rooms"],
  },
  {
    name: "Biomata Node",
    rarity: "Deluxe",
    locations: [
      { map: "Outpost", place: "Orientation" },
      { map: "Outpost", place: "Pinwheel Base" },
      { map: "Outpost", place: "Processing" },
    ],
    containers: ["Tool Carts", "Locked Rooms"],
  },
  {
    name: "Biomata Resin",
    rarity: "Deluxe",
    locations: [{ map: "Dire Marsh", place: "Bio Research" }],
    containers: ["Tool Carts", "Locked Rooms"],
  },
  {
    name: "Cetinite Rods",
    rarity: "Deluxe",
    locations: [{ map: "Dire Marsh", place: "Maintenance" }],
    containers: ["Arms Lockers", "Locked Rooms"],
  },
  {
    name: "Dynamic Lens",
    rarity: "Deluxe",
    locations: [],
    containers: [],
  },
  {
    name: "Nanozymes",
    rarity: "Deluxe",
    locations: [],
    containers: [],
  },
  {
    name: "Neurochem Pack",
    rarity: "Deluxe",
    locations: [{ map: "Outpost", place: "Pinwheel Base" }],
    containers: ["Medical Cabinets", "Locked Rooms"],
  },
  {
    name: "Paradox Circuit",
    rarity: "Deluxe",
    locations: [],
    containers: [],
  },
  {
    name: "Polymer Wire",
    rarity: "Deluxe",
    locations: [],
    containers: [],
  },
  {
    name: "Steel Rods",
    rarity: "Deluxe",
    locations: [],
    containers: [],
  },
  {
    name: "Sterilized Biostripping",
    rarity: "Deluxe",
    locations: [
      { map: "Perimeter", place: "Hauler" },
      { map: "Dire Marsh", place: "Algae Ponds" },
    ],
    containers: ["Arms Lockers", "Locked Rooms"],
  },
  {
    name: "Tachyon Filament",
    rarity: "Deluxe",
    locations: [{ map: "Dire Marsh", place: "AI Uplink" }],
    containers: ["Bioprinters", "Locked Rooms"],
  },
  {
    name: "Tarax Seed",
    rarity: "Deluxe",
    locations: [
      { map: "Perimeter", place: "Overflow" },
      { map: "Dire Marsh", place: "Greenhouse" },
    ],
    containers: ["Medical Cabinets", "Grassy Areas", "Locked Rooms"],
  },
  {
    name: "Thoughtwave Lens",
    rarity: "Deluxe",
    locations: [],
    containers: [],
  },
  {
    name: "UESC Obedience Matrix",
    rarity: "Deluxe",
    locations: [],
    containers: ["UESC Enemies", "Supply Drops", "Priority Hostiles"],
  },
  {
    name: "Volatile Compounds",
    rarity: "Deluxe",
    locations: [],
    containers: [],
  },
  // Superior
  {
    name: "Ballistic Turbine",
    rarity: "Superior",
    locations: [],
    containers: [],
  },
  {
    name: "Biofilament",
    rarity: "Superior",
    locations: [],
    containers: [],
  },
  {
    name: "Biolens Seed",
    rarity: "Superior",
    locations: [
      { map: "Perimeter", place: "Overflow" },
      { map: "Dire Marsh", place: "Quarantine" },
      { map: "Dire Marsh", place: "Greenhouse" },
    ],
    containers: ["Lockdown Zones", "Locked Rooms"],
  },
  {
    name: "Coherence Drive",
    rarity: "Superior",
    locations: [],
    containers: [],
  },
  {
    name: "Enzyme Replicator",
    rarity: "Superior",
    locations: [
      { map: "Outpost", place: "Orientation" },
      { map: "Outpost", place: "Pinwheel Base" },
      { map: "Outpost", place: "Processing" },
    ],
    containers: ["Lockdown Zones", "Locked Rooms"],
  },
  {
    name: "Liquid Explosive",
    rarity: "Superior",
    locations: [],
    containers: [],
  },
  {
    name: "Neural Insulation",
    rarity: "Superior",
    locations: [
      { map: "Perimeter", place: "North Relay" },
      { map: "Perimeter", place: "Hauler" },
      { map: "Dire Marsh", place: "Algae Ponds" },
      { map: "Outpost", place: "Flight Control" },
      { map: "Outpost", place: "Dormitories" },
    ],
    containers: ["Lockdown Zones", "Locked Rooms"],
  },
  {
    name: "Papaver Bloom",
    rarity: "Superior",
    locations: [],
    containers: [],
  },
  {
    name: "Predictive Framework",
    rarity: "Superior",
    locations: [
      { map: "Perimeter", place: "Station" },
      { map: "Perimeter", place: "South Relay" },
    ],
    containers: ["Lockdown Zones", "Locked Rooms"],
  },
  {
    name: "Reflex Coil",
    rarity: "Superior",
    locations: [
      { map: "Dire Marsh", place: "AI Uplink" },
      { map: "Dire Marsh", place: "Bio Research" },
    ],
    containers: ["Lockdown Zones", "Locked Rooms"],
  },
  {
    name: "Shell ID",
    rarity: "Superior",
    locations: [],
    containers: [],
  },
  // Prestige
  {
    name: "Alien Alloy",
    rarity: "Prestige",
    locations: [{ map: "Cryo Archive", place: "Cryo Archives" }],
    containers: [],
  },
  {
    name: "Biogenic Alloy",
    rarity: "Prestige",
    locations: [],
    containers: [],
  },
  {
    name: "Hazard Capsule",
    rarity: "Prestige",
    locations: [{ map: "Cryo Archive", place: "Cryo Archives" }],
    containers: [],
  },
  {
    name: "Synapse Cube",
    rarity: "Prestige",
    locations: [{ map: "Cryo Archive", place: "Cryo Archives" }],
    containers: [],
  },
  // Contraband
  {
    name: "Compiler Ganglion",
    rarity: "Contraband",
    locations: [],
    containers: [],
  },
];

const SALVAGE_BY_NAME: Map<string, SalvageEntry> = new Map(
  SALVAGE_DATA.map((entry) => [entry.name, entry]),
);

type SalvageVisual = {
  image: string;
  color: string;
};

const GITHUB_PAGES_ASSET_BASE = "https://tom-spalding.github.io/marathon-salvage-planner";
const ASSET_BASE_URL = process.env.NODE_ENV === "production" ? GITHUB_PAGES_ASSET_BASE : "";

const localSalvageImage = (fileName: string) => `${ASSET_BASE_URL}/salvage/${fileName}`;
export const GENERIC_SALVAGE_ICON = localSalvageImage("salvage-icon.svg");

export const SALVAGE_IMAGES: Record<string, string> = {
  "Compiler Ganglion": localSalvageImage("compiler-ganglion.webp"),
  "Alien Alloy": localSalvageImage("alien-alloy.webp"),
  "Hazard Capsule": localSalvageImage("hazard-capsule.webp"),
  "Synapse Cube": localSalvageImage("synapse-cube.webp"),
  "Ballistic Turbine": localSalvageImage("ballistic-turbine.webp"),
  "Biofilament": localSalvageImage("biofilament.webp"),
  "Biolens Seed": localSalvageImage("biolens-seed.webp"),
  "Coherence Drive": localSalvageImage("coherence-drive.webp"),
  "Enzyme Replicator": localSalvageImage("enzyme-replicator.webp"),
  "Neural Insulation": localSalvageImage("neural-insulation.webp"),
  "Predictive Framework": localSalvageImage("predictive-framework.webp"),
  "Reflex Coil": localSalvageImage("reflex-coil.webp"),
  "Shell ID": localSalvageImage("shell-id.webp"),
  "Amygdala Drive": localSalvageImage("amygdala-drive.webp"),
  "Anomalous Wire": localSalvageImage("anomalous-wire.webp"),
  "Biomata Node": localSalvageImage("biomata-node.webp"),
  "Biomata Resin": localSalvageImage("biomata-resin.webp"),
  "Cetinite Rods": localSalvageImage("cetinite-rods.webp"),
  "Dynamic Lens": localSalvageImage("dynamic-lens.webp"),
  "Nanozymes": localSalvageImage("nanozymes.webp"),
  "Neurochem Pack": localSalvageImage("neurochem-pack.webp"),
  "Paradox Circuit": localSalvageImage("paradox-circuit.webp"),
  "Polymer Wire": localSalvageImage("polymer-wire.webp"),
  "Steel Rods": localSalvageImage("steel-rods.webp"),
  "Sterilized Biostripping": localSalvageImage("sterilized-biostripping.webp"),
  "Tachyon Filament": localSalvageImage("tachyon-filament.webp"),
  "UESC Obedience Matrix": localSalvageImage("uesc-obedience-matrix.webp"),
  "Aluminum Rods": localSalvageImage("aluminum-rods.webp"),
  "Basic Xerogel": localSalvageImage("basic-xerogel.webp"),
  "Carbon Wire": localSalvageImage("carbon-wire.webp"),
  "Deimosite Rods": localSalvageImage("deimosite-rods.webp"),
  "Dermachem Pack": localSalvageImage("dermachem-pack.webp"),
  "Drone Node": localSalvageImage("drone-node.webp"),
  "Dynamic Compounds": localSalvageImage("dynamic-compounds.webp"),
  "Epoxy Resin": localSalvageImage("epoxy-resin.webp"),
  "Fractal Circuit": localSalvageImage("fractal-circuit.webp"),
  "Hydrocarbon Rubber": localSalvageImage("hydrocarbon-rubber.webp"),
  "Nanocomposites": localSalvageImage("nanocomposites.webp"),
  "Plastic Filament": localSalvageImage("plastic-filament.webp"),
  "Putty Explosive": localSalvageImage("putty-explosive.webp"),
  "Sparkleaf": localSalvageImage("sparkleaf.webp"),
  "Storage Drive": localSalvageImage("storage-drive.webp"),
  "Surveillance Lens": localSalvageImage("surveillance-lens.webp"),
  "Altered Wire": localSalvageImage("altered-wire.webp"),
  "Data Card": localSalvageImage("data-card.webp"),
  "Unstable Biomass": localSalvageImage("unstable-biomass.webp"),
  "Unstable Diode": localSalvageImage("unstable-diode.webp"),
  "Unstable Gel": localSalvageImage("unstable-gel.webp"),
  "Unstable Gunmetal": localSalvageImage("unstable-gunmetal.webp"),
  "Unstable Lead": localSalvageImage("unstable-lead.webp"),
  "Weapon Parts": localSalvageImage("weapon-parts.webp"),
};

/** Resolved visual for an item name (never undefined — avoids silent lookup misses). */
export function salvageVisualFor(itemName: string): SalvageVisual {
  const entry = SALVAGE_BY_NAME.get(itemName);
  const rarity = entry?.rarity ?? "Standard";
  return {
    image: SALVAGE_IMAGES[itemName] ?? GENERIC_SALVAGE_ICON,
    color: SALVAGE_RARITY_COLOR[rarity],
  };
}
