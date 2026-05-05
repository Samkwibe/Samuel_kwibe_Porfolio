/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: { extend: { fontFamily: { sans: ["Outfit", "ui-sans-serif", "system-ui"], display: ["Outfit","ui-sans-serif","system-ui"], body: ["Outfit","ui-sans-serif","system-ui"], mono: ["ui-monospace", "SFMono-Regular", "Menlo", "Monaco", "Consolas", "Liberation Mono", "Courier New", "monospace"] }}},
  plugins: [],
}
