import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#f5f6f8",
        card: "#ffffff",
        text: "#111827",
        muted: "#6b7280"
      },
      boxShadow: {
        soft: "0 12px 28px rgba(15, 23, 42, 0.08)"
      },
      borderRadius: {
        xl: "18px"
      }
    }
  },
  plugins: []
};

export default config;
