import { useTheme } from "@/components/theme-provider.tsx";
import React from "react";

export interface GlassIconsItem {
  icon: React.ReactElement;
  color?: string;
  label: string;
  customClass?: string;
}

export interface GlassIconsProps {
  items: GlassIconsItem[];
  className?: string;
}

const gradientMapping: Record<string, string> = {
  blue: "linear-gradient(hsl(223, 90%, 50%), hsl(208, 90%, 50%))",
  purple: "linear-gradient(hsl(283, 90%, 50%), hsl(268, 90%, 50%))",
  red: "linear-gradient(hsl(3, 90%, 50%), hsl(348, 90%, 50%))",
  indigo: "linear-gradient(hsl(253, 90%, 50%), hsl(238, 90%, 50%))",
  orange: "linear-gradient(hsl(43, 90%, 50%), hsl(28, 90%, 50%))",
  green: "linear-gradient(hsl(123, 90%, 40%), hsl(108, 90%, 40%))",
  white: "linear-gradient(hsl(0, 0%, 100%), hsl(0, 0%, 90%))",
  black: "linear-gradient(hsl(0, 0%, 20%), hsl(0, 0%, 0%))",
};

// Light mode gradient mapping with subtle colors
const lightGradientMapping: Record<string, string> = {
  blue: "linear-gradient(hsl(223, 70%, 70%), hsl(208, 70%, 75%))",
  purple: "linear-gradient(hsl(283, 70%, 70%), hsl(268, 70%, 75%))",
  red: "linear-gradient(hsl(3, 70%, 70%), hsl(348, 70%, 75%))",
  indigo: "linear-gradient(hsl(253, 70%, 70%), hsl(238, 70%, 75%))",
  orange: "linear-gradient(hsl(43, 70%, 65%), hsl(28, 70%, 70%))",
  green: "linear-gradient(hsl(123, 60%, 60%), hsl(108, 60%, 65%))",
  white: "linear-gradient(hsl(0, 0%, 95%), hsl(0, 0%, 85%))",
  black: "linear-gradient(hsl(0, 0%, 70%), hsl(0, 0%, 60%))", // Subtle gray for light mode
};

const GlassIcons: React.FC<GlassIconsProps> = ({ items, className }) => {
  const { theme } = useTheme();

  // Determine if we're in dark mode
  const isDarkMode =
    theme === "dark" ||
    (theme === "system" &&
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches);

  const getBackgroundStyle = (color: string = "black"): React.CSSProperties => {
    const mapping = isDarkMode ? gradientMapping : lightGradientMapping;

    if (mapping[color]) {
      return { background: mapping[color] };
    }

    // If no mapping exists and it's light mode with default black, use subtle gray
    if (!isDarkMode && color === "black") {
      return {
        background: "linear-gradient(hsl(0, 0%, 70%), hsl(0, 0%, 60%))",
      };
    }

    return { background: color };
  };

  return (
    <div
      className={`grid gap-x-0.5 gap-y-12 md:gap-x-3 md:gap-y-16 grid-cols-3 md:grid-cols-8 mx-auto py-[3em] overflow-visible ${
        className || ""
      }`}
    >
      {items.map((item, index) => (
        <button
          key={index}
          type="button"
          aria-label={item.label}
          className={`relative bg-transparent outline-none  w-[4.5em] h-[4.5em] [perspective:24em] [transform-style:preserve-3d] [-webkit-tap-highlight-color:transparent] group ${
            item.customClass || ""
          }`}
        >
          {/* Back layer */}
          <span
            className="absolute top-0 left-0 w-full h-full rounded-[1.25em] block transition-[opacity,transform] duration-300 ease-[cubic-bezier(0.83,0,0.17,1)] origin-[100%_100%] rotate-[15deg] group-hover:[transform:rotate(25deg)_translate3d(-0.5em,-0.5em,0.5em)]"
            style={{
              ...getBackgroundStyle(item.color),
              boxShadow: isDarkMode
                ? "0.5em -0.5em 0.75em hsla(223, 10%, 10%, 0.15)"
                : "0.5em -0.5em 0.75em hsla(223, 10%, 10%, 0.08)",
            }}
          ></span>

          {/* Front layer */}
          <span
            className="absolute top-0 left-0 w-full h-full rounded-[1.25em] bg-[hsla(0,0%,100%,0.15)] transition-[opacity,transform] duration-300 ease-[cubic-bezier(0.83,0,0.17,1)] origin-[80%_50%] flex backdrop-blur-[0.75em] [-webkit-backdrop-filter:blur(0.75em)] transform group-hover:[transform:translateZ(2em)]"
            style={{
              boxShadow: "0 0 0 0.1em hsla(0, 0%, 100%, 0.3) inset",
              transformStyle: "preserve-3d",
            }}
          >
            <span
              className="m-auto w-[1em] h-[1em] md:w-[1.5em] md:h-[1.5em] flex items-center justify-center "
              aria-hidden="true"
            >
              {item.icon}
            </span>
          </span>

          {/* Label */}
          <span className="absolute top-full left-0 right-0 text-sm text-center whitespace-nowrap leading-[1.5] font-medium md:font-semibold md:opacity-0 transition-[opacity,transform] duration-300 ease-[cubic-bezier(0.83,0,0.17,1)] md:translate-y-0 md:group-hover:opacity-100 md:group-hover:[transform:translateY(20%)]">
            {item.label}
          </span>
        </button>
      ))}
    </div>
  );
};

export default GlassIcons;
