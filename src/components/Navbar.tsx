import { useEffect, useState, MouseEvent } from "react";
import { Link } from "react-router-dom";
import { TeamLogo } from "@/config/branding";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleSmoothScroll = (e: MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] px-8 md:px-16 py-6 flex items-center justify-between transition-all duration-300 border-b ${
        scrolled
          ? "bg-background/90 backdrop-blur-lg border-border"
          : "border-transparent"
      }`}
    >
      <Link to="/" className="text-xl">
        <TeamLogo />
      </Link>
      <ul className="hidden md:flex gap-8 list-none">
        <li>
          <a
            href="#team"
            onClick={(e) => handleSmoothScroll(e, "team")}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors font-medium"
          >
            Team
          </a>
        </li>
        <li>
          <a
            href="#projects"
            onClick={(e) => handleSmoothScroll(e, "projects")}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors font-medium"
          >
            Projects
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
