import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: { extend: { colors: { brand: { 50: "#eff6ff", 100: "#dbeafe", 600: "#2563eb", 700: "#1d4ed8", 900: "#172554" } }, boxShadow: { soft: "0 12px 35px rgba(15, 23, 42, .07)" } } },
  plugins: []
};
export default config;
