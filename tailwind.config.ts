import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx}",
    "./registry/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: { "2xl": "1280px" },
    },
    extend: {
      colors: {
        ink: {
          DEFAULT: "hsl(var(--ink))",
          muted: "hsl(var(--ink-muted))",
          subtle: "hsl(var(--ink-subtle))",
        },
        paper: {
          DEFAULT: "hsl(var(--paper))",
          raised: "hsl(var(--paper-raised))",
          sunken: "hsl(var(--paper-sunken))",
        },
        line: "hsl(var(--line))",
        accent: {
          DEFAULT: "hsl(var(--accent))",
          fg: "hsl(var(--accent-fg))",
        },
        signal: {
          danger: "hsl(var(--signal-danger))",
          warning: "hsl(var(--signal-warning))",
          success: "hsl(var(--signal-success))",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "ui-serif", "Georgia", "serif"],
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      fontSize: {
        "display-1": ["clamp(3rem, 8vw, 6rem)", { lineHeight: "0.95", letterSpacing: "-0.04em" }],
        "display-2": ["clamp(2.25rem, 5vw, 3.75rem)", { lineHeight: "1", letterSpacing: "-0.035em" }],
        "display-3": ["clamp(1.75rem, 3.5vw, 2.5rem)", { lineHeight: "1.05", letterSpacing: "-0.03em" }],
      },
      borderRadius: {
        none: "0",
        xs: "var(--radius-xs)",
        sm: "var(--radius-sm)",
        DEFAULT: "var(--radius-md)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
        xl: "var(--radius-xl)",
      },
      keyframes: {
        "fade-up": {
          from: { opacity: "0", transform: "translateY(8px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "marquee": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s cubic-bezier(0.22, 1, 0.36, 1) both",
        "marquee": "marquee 40s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
