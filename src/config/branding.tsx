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
  <img
    src={myamotoLogoSrc}
    alt="Myamoto logo"
    className={`object-cover rounded-full ${className}`}
    loading="lazy"
  />
);

/** Nowidz's personal logo (replaces the "N." on the team card & profile) */
export const NowidzLogo = ({ className = "" }: LogoProps): ReactNode => (
  <img
    src={nowidzLogoSrc}
    alt="Nowidz logo"
    className={`object-cover rounded-full ${className}`}
    loading="lazy"
  />
);
