const RARITIES = [
  { min: 100, name: "legendary" },
  { min: 50,  name: "epic" },
  { min: 10,  name: "very-rare" },
  { min: 5,   name: "rare" },
  { min: 0,   name: "common" },
];

export default function getRarity(likes = 0) {
  return RARITIES.find((r) => likes >= r.min).name;
}