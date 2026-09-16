export const site = {
  name: "Pebble Studios",
  tagline: "Create a presence that ripples.",
  city: "Pune, India",
  email: "hello@pebblestudios.com",
  phoneDisplay: "+91 00000 00000",
  phoneTel: "+910000000000",
  whatsapp: "910000000000",
  aftercare: "Two weeks of tweaks after launch",
};

export const nav = [
  { to: "/work", label: "Work" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export function whatsappUrl(message) {
  const text = encodeURIComponent(
    message || "Hello Pebble Studios — I’d like to talk about a website."
  );
  return `https://wa.me/${site.whatsapp}?text=${text}`;
}
