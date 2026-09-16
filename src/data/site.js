export const site = {
  name: "Pebble Studios",
  tagline: "Create a presence that ripples.",
  city: "Pune, India",
  email: "pebblestudios.dev@gmail.com",
  phoneDisplay: "+91 70209 61222",
  phoneTel: "+917020961222",
  whatsapp: "917020961222",
  aftercare: "Two weeks of tweaks after launch",
};

export const nav = [
  { to: "/", label: "Home" },
  { to: "/work", label: "Work" },
  { to: "/about", label: "About" },
];

export function whatsappUrl(message) {
  const text = encodeURIComponent(
    message || "Hello Pebble Studios — I’d like to talk about a website."
  );
  return `https://wa.me/${site.whatsapp}?text=${text}`;
}
