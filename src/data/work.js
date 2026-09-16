export const projects = [
  {
    slug: "raahi-cafe",
    name: "Raahi Cafe",
    type: "Cafe",
    label: "Concept · Cafe",
    summary: "A neighbourhood cafe that should feel warm on the first screen — where it is, what’s on, how to visit.",
    need: "Cafes often hide behind Instagram. This concept leads with place, hours, and a clear way to get in touch.",
    palette: {
      bg: "#F3EBE1",
      ink: "#3A2E24",
      accent: "#8C4A32",
    },
  },
  {
    slug: "niva-clinic",
    name: "Niva Clinic",
    type: "Clinic",
    label: "Concept · Clinic",
    summary: "A clinic site that feels calm and legitimate — who it’s for, what’s offered, how to book a visit.",
    need: "Clinics lose people when the site is cluttered or unclear. This concept keeps trust, location, and contact obvious.",
    palette: {
      bg: "#EEF2F0",
      ink: "#24302C",
      accent: "#3F5C63",
    },
  },
  {
    slug: "mora",
    name: "Mora",
    type: "Salon",
    label: "Concept · Salon",
    summary: "A salon studio with quiet confidence — the work, the atmosphere, a simple way to enquire.",
    need: "Salons are visual, but visitors still need hours, address, and WhatsApp. This concept holds both.",
    palette: {
      bg: "#F4EEE8",
      ink: "#2C2420",
      accent: "#6B4A3A",
    },
  },
];

export function getProject(slug) {
  return projects.find((p) => p.slug === slug);
}
