export type MapName = "Perimeter" | "Outpost" | "Dire Marsh" | "Cryo Archives";

export const MAPS: MapName[] = ["Perimeter", "Outpost", "Dire Marsh"];

export type SalvageEntry = {
  name: string;
  locations: { map: MapName; place: string }[];
  containers: string[];
};

export const SALVAGE_DATA: SalvageEntry[] = [
  {
    name: "Unstable Diode",
    locations: [
      { map: "Perimeter", place: "North Relay" },
      { map: "Perimeter", place: "South Relay" },
      { map: "Outpost", place: "Dormitories" },
      { map: "Outpost", place: "Flight Control" },
    ],
    containers: [],
  },
  {
    name: "Unstable Gunmetal",
    locations: [
      { map: "Perimeter", place: "Station" },
      { map: "Dire Marsh", place: "AI Uplink" },
      { map: "Dire Marsh", place: "Maintenance" },
    ],
    containers: [],
  },
  {
    name: "Unstable Biomass",
    locations: [
      { map: "Perimeter", place: "Hauler" },
      { map: "Perimeter", place: "Overflow" },
      { map: "Dire Marsh", place: "Algae Ponds" },
      { map: "Dire Marsh", place: "Greenhouse" },
    ],
    containers: [],
  },
  {
    name: "Unstable Gel",
    locations: [
      { map: "Dire Marsh", place: "Bio Research" },
      { map: "Outpost", place: "Orientation" },
      { map: "Outpost", place: "Processing" },
    ],
    containers: [],
  },
  {
    name: "Unstable Lead",
    locations: [
      { map: "Dire Marsh", place: "Quarantine" },
      { map: "Dire Marsh", place: "Complex" },
      { map: "Outpost", place: "Airfield" },
    ],
    containers: [],
  },
  {
    name: "Sparkleaf",
    locations: [
      { map: "Perimeter", place: "Overflow" },
      { map: "Dire Marsh", place: "Greenhouse" },
    ],
    containers: [],
  },
  {
    name: "Dermachem Pack",
    locations: [
      { map: "Outpost", place: "Pinwheel Base" },
    ],
    containers: ["Medical Cabinets"],
  },
  {
    name: "Surveillance Lens",
    locations: [
      { map: "Dire Marsh", place: "Quarantine" },
    ],
    containers: ["Bioprinters"],
  },
  {
    name: "Plastic Filament",
    locations: [
      { map: "Dire Marsh", place: "AI Uplink" },
    ],
    containers: ["Bioprinters"],
  },
  {
    name: "Dynamic Compounds",
    locations: [
      { map: "Dire Marsh", place: "Complex" },
      { map: "Outpost", place: "Airfield" },
      { map: "Outpost", place: "Pinwheel Base" },
    ],
    containers: ["Munitions Crates"],
  },
  {
    name: "Storage Drive",
    locations: [
      { map: "Perimeter", place: "South Relay" },
    ],
    containers: ["Core Storage"],
  },
  {
    name: "Fractal Circuit",
    locations: [
      { map: "Perimeter", place: "North Relay" },
      { map: "Outpost", place: "Flight Control" },
      { map: "Outpost", place: "Dormitories" },
      { map: "Outpost", place: "Pinwheel Base" },
    ],
    containers: ["Core Storage"],
  },
  {
    name: "Drone Resin",
    locations: [
      { map: "Dire Marsh", place: "Bio Research" },
    ],
    containers: ["Tool Carts"],
  },
  {
    name: "Deimosite Rods",
    locations: [
      { map: "Dire Marsh", place: "Maintenance" },
    ],
    containers: ["Arms Lockers"],
  },
  {
    name: "Reclaimed Biostripping",
    locations: [
      { map: "Perimeter", place: "Hauler" },
      { map: "Dire Marsh", place: "Algae Ponds" },
    ],
    containers: ["Arms Lockers"],
  },
  {
    name: "Altered Wire",
    locations: [
      { map: "Perimeter", place: "Station" },
    ],
    containers: ["Munitions Crates", "Locked Rooms"],
  },
  {
    name: "Drone Node",
    locations: [
      { map: "Outpost", place: "Orientation" },
      { map: "Outpost", place: "Pinwheel Base" },
      { map: "Outpost", place: "Processing" },
    ],
    containers: ["Tool Carts"],
  },
  {
    name: "Amygdala Drive",
    locations: [
      { map: "Perimeter", place: "South Relay" },
    ],
    containers: ["Core Storage", "Locked Rooms"],
  },
  {
    name: "Sterilized Biostripping",
    locations: [
      { map: "Perimeter", place: "Hauler" },
      { map: "Dire Marsh", place: "Algae Ponds" },
    ],
    containers: ["Arms Lockers", "Locked Rooms"],
  },
  {
    name: "Anomalous Wire",
    locations: [
      { map: "Perimeter", place: "Station" },
    ],
    containers: ["Munitions Crates", "Locked Rooms"],
  },
  {
    name: "Biomata Node",
    locations: [
      { map: "Outpost", place: "Orientation" },
      { map: "Outpost", place: "Pinwheel Base" },
      { map: "Outpost", place: "Processing" },
    ],
    containers: ["Tool Carts", "Locked Rooms"],
  },
  {
    name: "UESC Obedience Matrix",
    locations: [],
    containers: ["UESC Enemies", "Supply Drops", "Priority Hostiles"],
  },
  {
    name: "Tarax Seed",
    locations: [
      { map: "Perimeter", place: "Overflow" },
      { map: "Dire Marsh", place: "Greenhouse" },
    ],
    containers: ["Medical Cabinets", "Grassy Areas", "Locked Rooms"],
  },
  {
    name: "Neurochem Pack",
    locations: [
      { map: "Outpost", place: "Pinwheel Base" },
    ],
    containers: ["Medical Cabinets", "Locked Rooms"],
  },
  {
    name: "Tachyon Filament",
    locations: [
      { map: "Dire Marsh", place: "AI Uplink" },
    ],
    containers: ["Bioprinters", "Locked Rooms"],
  },
  {
    name: "Centinite Rods",
    locations: [
      { map: "Dire Marsh", place: "Maintenance" },
    ],
    containers: ["Arms Lockers", "Locked Rooms"],
  },
  {
    name: "Biomata Resin",
    locations: [
      { map: "Dire Marsh", place: "Bio Research" },
    ],
    containers: ["Tool Carts", "Locked Rooms"],
  },
  {
    name: "Predictive Framework",
    locations: [
      { map: "Perimeter", place: "Station" },
      { map: "Perimeter", place: "South Relay" },
    ],
    containers: ["Lockdown Zones", "Locked Rooms"],
  },
  {
    name: "Enzyme Replicator",
    locations: [
      { map: "Outpost", place: "Orientation" },
      { map: "Outpost", place: "Pinwheel Base" },
      { map: "Outpost", place: "Processing" },
    ],
    containers: ["Lockdown Zones", "Locked Rooms"],
  },
  {
    name: "Biolens Seed",
    locations: [
      { map: "Perimeter", place: "Overflow" },
      { map: "Dire Marsh", place: "Quarantine" },
      { map: "Dire Marsh", place: "Greenhouse" },
    ],
    containers: ["Lockdown Zones", "Locked Rooms"],
  },
  {
    name: "Reflex Coil",
    locations: [
      { map: "Dire Marsh", place: "AI Uplink" },
      { map: "Dire Marsh", place: "Bio Research" },
    ],
    containers: ["Lockdown Zones", "Locked Rooms"],
  },
  {
    name: "Neural Insulation",
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
    name: "Alien Alloy",
    locations: [
      { map: "Cryo Archives", place: "Cryo Archives" },
    ],
    containers: [],
  },
  {
    name: "Hazard Capsule",
    locations: [
      { map: "Cryo Archives", place: "Cryo Archives" },
    ],
    containers: [],
  },
  {
    name: "Synapse Cube",
    locations: [
      { map: "Cryo Archives", place: "Cryo Archives" },
    ],
    containers: [],
  },
];
