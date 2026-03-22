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

type SalvageVisual = {
  image: string;
  color: string;
};

const GENERIC_SALVAGE_ICON = "/salvage/salvage-icon.svg";
const localSalvageImage = (fileName: string) => `/salvage/${fileName}`;

export const SALVAGE_VISUALS: Record<string, SalvageVisual> = {
  "Unstable Diode": {
    image: localSalvageImage("unstable-diode.webp"),
    color: "rgb(202, 202, 214)",
  },
  "Unstable Gunmetal": {
    image: localSalvageImage("unstable-gunmetal.webp"),
    color: "rgb(202, 202, 214)",
  },
  "Unstable Biomass": {
    image: localSalvageImage("unstable-biomass.webp"),
    color: "rgb(202, 202, 214)",
  },
  "Unstable Gel": {
    image: localSalvageImage("unstable-gel.webp"),
    color: "rgb(202, 202, 214)",
  },
  "Unstable Lead": {
    image: localSalvageImage("unstable-lead.webp"),
    color: "rgb(202, 202, 214)",
  },
  Sparkleaf: {
    image: localSalvageImage("sparkleaf.webp"),
    color: "rgb(0, 255, 125)",
  },
  "Dermachem Pack": {
    image: localSalvageImage("dermachem-pack.webp"),
    color: "rgb(0, 255, 125)",
  },
  "Surveillance Lens": {
    image: localSalvageImage("surveillance-lens.webp"),
    color: "rgb(0, 255, 125)",
  },
  "Plastic Filament": {
    image: localSalvageImage("plastic-filament.webp"),
    color: "rgb(0, 255, 125)",
  },
  "Dynamic Compounds": {
    image: localSalvageImage("dynamic-compounds.webp"),
    color: "rgb(0, 255, 125)",
  },
  "Storage Drive": {
    image: localSalvageImage("storage-drive.webp"),
    color: "rgb(0, 255, 125)",
  },
  "Fractal Circuit": {
    image: localSalvageImage("fractal-circuit.webp"),
    color: "rgb(0, 255, 125)",
  },
  "Drone Resin": {
    image: GENERIC_SALVAGE_ICON,
    color: "rgb(0, 255, 125)",
  },
  "Deimosite Rods": {
    image: localSalvageImage("deimosite-rods.webp"),
    color: "rgb(0, 255, 125)",
  },
  "Reclaimed Biostripping": {
    image: GENERIC_SALVAGE_ICON,
    color: "rgb(0, 255, 125)",
  },
  "Altered Wire": {
    image: localSalvageImage("altered-wire.webp"),
    color: "rgb(202, 202, 214)",
  },
  "Drone Node": {
    image: localSalvageImage("drone-node.webp"),
    color: "rgb(0, 255, 125)",
  },
  "Amygdala Drive": {
    image: localSalvageImage("amygdala-drive.webp"),
    color: "rgb(33, 180, 250)",
  },
  "Sterilized Biostripping": {
    image: localSalvageImage("sterilized-biostripping.webp"),
    color: "rgb(33, 180, 250)",
  },
  "Anomalous Wire": {
    image: localSalvageImage("anomalous-wire.webp"),
    color: "rgb(33, 180, 250)",
  },
  "Biomata Node": {
    image: localSalvageImage("biomata-node.webp"),
    color: "rgb(33, 180, 250)",
  },
  "UESC Obedience Matrix": {
    image: localSalvageImage("uesc-obedience-matrix.webp"),
    color: "rgb(33, 180, 250)",
  },
  "Tarax Seed": {
    image: GENERIC_SALVAGE_ICON,
    color: "rgb(33, 180, 250)",
  },
  "Neurochem Pack": {
    image: localSalvageImage("neurochem-pack.webp"),
    color: "rgb(33, 180, 250)",
  },
  "Tachyon Filament": {
    image: localSalvageImage("tachyon-filament.webp"),
    color: "rgb(33, 180, 250)",
  },
  "Centinite Rods": {
    image: GENERIC_SALVAGE_ICON,
    color: "rgb(33, 180, 250)",
  },
  "Biomata Resin": {
    image: localSalvageImage("biomata-resin.webp"),
    color: "rgb(33, 180, 250)",
  },
  "Predictive Framework": {
    image: localSalvageImage("predictive-framework.webp"),
    color: "rgb(233, 18, 246)",
  },
  "Enzyme Replicator": {
    image: localSalvageImage("enzyme-replicator.webp"),
    color: "rgb(233, 18, 246)",
  },
  "Biolens Seed": {
    image: localSalvageImage("biolens-seed.webp"),
    color: "rgb(233, 18, 246)",
  },
  "Reflex Coil": {
    image: localSalvageImage("reflex-coil.webp"),
    color: "rgb(233, 18, 246)",
  },
  "Neural Insulation": {
    image: localSalvageImage("neural-insulation.webp"),
    color: "rgb(233, 18, 246)",
  },
  "Alien Alloy": {
    image: localSalvageImage("alien-alloy.webp"),
    color: "rgb(255, 244, 12)",
  },
  "Hazard Capsule": {
    image: localSalvageImage("hazard-capsule.webp"),
    color: "rgb(255, 244, 12)",
  },
  "Synapse Cube": {
    image: localSalvageImage("synapse-cube.webp"),
    color: "rgb(255, 244, 12)",
  },
};
