export const projects = [
  {
    slug: "vishwacare",
    name: "VishwaCare",
    type: "Healthcare",
    label: "Healthcare",
    url: "https://vishwacare.pebblestudios.me",
    domain: "vishwacare.pebblestudios.me",
    previewImage: "/previews/vishwacare.png",
    summary: "A complete hospital website designed to make care, departments, facilities, and appointment booking feel clear and reassuring.",
    need: "The experience brings urgent information and everyday care into one calm, easy-to-navigate website — from emergency help to booking an appointment.",
    palette: {
      bg: "#F3F0E9",
      ink: "#193C35",
      accent: "#B8623B",
    },
  },
  {
    slug: "moka",
    name: "MOKA",
    type: "Cafe",
    label: "Cafe",
    url: "https://moka.pebblestudios.me",
    domain: "moka.pebblestudios.me",
    previewImage: "/previews/moka.png",
    summary: "A warm, personality-led cafe website built around the menu, the mood, and the simple invitation to come by.",
    need: "MOKA turns an everyday cafe visit into a memorable digital experience, while keeping the menu, location, and contact details easy to find.",
    palette: {
      bg: "#F2E1C2",
      ink: "#2B211A",
      accent: "#C34F32",
    },
  },
  {
    slug: "sound-word",
    name: "Sound Word",
    type: "Tattoo studio",
    label: "Tattoo studio",
    url: "https://soundword.pebblestudios.me",
    domain: "soundword.pebblestudios.me",
    previewImage: "/previews/soundword.png",
    summary: "An editorial portfolio for a Pune tattoo atelier, designed to let the artwork, artists, and stories lead.",
    need: "The site balances strong visual identity with the practical questions clients ask before getting tattooed, ending in a clear path to enquire.",
    palette: {
      bg: "#E9E5DD",
      ink: "#171715",
      accent: "#7B2520",
    },
  },
];

export function getProject(slug) {
  return projects.find((p) => p.slug === slug);
}
