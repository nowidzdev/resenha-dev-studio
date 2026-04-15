import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] px-8 md:px-16 py-6 flex items-center justify-between transition-all duration-300 border-b ${
        scrolled
          ? "bg-background/90 backdrop-blur-lg border-border"
          : "border-transparent"
      }`}
    >
      <Link to="/" className="font-extrabold text-xl tracking-tight">
        Resenha<span className="text-primary">.</span>
      </Link>
      <ul className="hidden md:flex gap-8 list-none">
        <li><a href="#team" className="text-sm text-muted-foreground hover:text-foreground transition-colors font-medium">Team</a></li>
        <li><a href="#projects" className="text-sm text-muted-foreground hover:text-foreground transition-colors font-medium">Projects</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
