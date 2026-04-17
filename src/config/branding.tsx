import { ReactNode } from "react";
import myamotoLogoSrc from "@/assets/myamoto-logo.png";
import nowidzLogoSrc from "@/assets/nowidz-logo.png";

/**
 * 🎨 BRANDING CONFIG
 * ------------------------------------------------------------------
 * Centralized place to swap logos across the entire site.
 * Replace the JSX inside each component with an <img src="..." /> 
 * or any SVG markup you want. Keep them square-ish for best results.
 * ------------------------------------------------------------------
 */

interface LogoProps {
  className?: string;
}

/** Main team logo — used in the navbar (homepage) */
export const TeamLogo = ({ className = "" }: LogoProps): ReactNode => (
  <span className={`font-extrabold tracking-tight ${className}`}>
    Resenha<span className="text-primary">.</span>
  </span>
);

/** Favicon letter — shown in the browser tab (single character or short text) */
export const FAVICON_LETTER = "R";

/** Myamoto's personal logo (replaces the "M." on the team card & profile) */
export const MyamotoLogo = ({ className = "" }: LogoProps): ReactNode => (
  // 👉 Swap this <svg> for an <img src="/myamoto-logo.png" /> when you have a real logo
  <svg
    viewBox="0 0 48 48"
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Myamoto logo"
  >
    <rect x="2" y="2" width="44" height="44" rx="10" stroke="currentColor" strokeWidth="2" />
    <path
      d="M12 34V14l12 14 12-14v20"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/** Nowidz's personal logo (replaces the "N." on the team card & profile) */
export const NowidzLogo = ({ className = "" }: LogoProps): ReactNode => (
  // 👉 Swap this <svg> for an <img src="/nowidz-logo.png" /> when you have a real logo
  <svg
    viewBox="0 0 48 48"
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Nowidz logo"
  >
    <rect x="2" y="2" width="44" height="44" rx="10" stroke="currentColor" strokeWidth="2" />
    <path
      d="M12 36V12l24 24V12"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
