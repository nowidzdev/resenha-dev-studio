import { Link } from "react-router-dom";
import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import ScrollArrow from "@/components/ScrollArrow";
import RevealOnScroll from "@/components/RevealOnScroll";

const Index = () => {
  return (
    <>
      <CustomCursor />
      <Navbar />

      {/* HERO */}
      <section id="hero" className="relative min-h-screen flex flex-col justify-center items-center text-center px-8 py-24">
        <p className="text-xs tracking-[2px] uppercase text-muted-foreground mb-6">
          Roblox Studio Developers
        </p>
        <h1 className="text-[clamp(3.5rem,8vw,6.5rem)] font-extrabold leading-none tracking-[-2px] mb-6">
          Resenha<br />
          <span className="text-primary">Team</span>
        </h1>
        <p className="max-w-[600px] text-lg text-muted-foreground font-light mb-8">
          A two-person dev collective crafting immersive Roblox experiences — from stunning 3D worlds to polished full-stack systems.
        </p>
        <div className="inline-flex items-center gap-2 border border-border rounded-full px-5 py-2 text-xs text-muted-foreground mb-10">
          <span className="w-2 h-2 rounded-full bg-green-400" />
          Currently active
        </div>

        {/* Meet the Team button */}
        <button
          onClick={() => {
            const el = document.getElementById("team");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }}
          className="inline-flex items-center gap-2.5 px-7 py-3 rounded-full border border-border text-foreground font-medium text-sm tracking-wide hover:border-muted-foreground transition-all duration-300"
        >
          Meet the Team
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
            <path d="M8 3v10M8 13l4-4M8 13L4 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </section>

      {/* TEAM */}
      <section id="team" className="relative min-h-screen flex flex-col justify-center items-center px-8 py-24 border-t border-border">
        <ScrollArrow direction="up" label="Top" targetId="hero" />

        <RevealOnScroll>
          <p className="text-xs tracking-[2px] uppercase text-primary font-bold mb-4 text-center">The People</p>
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold leading-tight tracking-[-1px] mb-6 text-center">Meet the Team</h2>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1000px] w-full mt-8 text-left">
          <RevealOnScroll delay={0.1}>
            <Link to="/myamoto" className="block">
              <div className="bg-card border border-border rounded-xl p-12 transition-all duration-300 hover:-translate-y-2 hover:border-primary h-full">
                <div className="text-3xl font-extrabold mb-6">M.</div>
                <h3 className="text-3xl font-bold mb-2">Myamoto</h3>
                <p className="text-sm text-primary font-medium mb-6">3D Modeler & VFX Maker</p>
                <p className="text-muted-foreground mb-8 text-[0.95rem]">
                  Sculpting detailed 3D worlds and breathing life into them with stunning visual effects.
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {["Blender", "VFX", "Texturing"].map((s) => (
                    <span key={s} className="px-3 py-1 rounded-md text-xs bg-background border border-border text-muted-foreground">{s}</span>
                  ))}
                </div>
              </div>
            </Link>
          </RevealOnScroll>

          <RevealOnScroll delay={0.2}>
            <Link to="/nowidz" className="block">
              <div className="bg-card border border-border rounded-xl p-12 transition-all duration-300 hover:-translate-y-2 hover:border-primary h-full">
                <div className="text-3xl font-extrabold mb-6">N.</div>
                <h3 className="text-3xl font-bold mb-2">Nowidz</h3>
                <p className="text-sm text-primary font-medium mb-6">Full-Stack Dev & UI Maker</p>
                <p className="text-muted-foreground mb-8 text-[0.95rem]">
                  Engineering robust systems and crafting sleek, pixel-perfect user interfaces.
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {["Luau", "UI Design", "Systems"].map((s) => (
                    <span key={s} className="px-3 py-1 rounded-md text-xs bg-background border border-border text-muted-foreground">{s}</span>
                  ))}
                </div>
              </div>
            </Link>
          </RevealOnScroll>
        </div>

        <ScrollArrow direction="down" label="Our Works" targetId="projects" />
      </section>

      {/* PROJECTS */}
      <section id="projects" className="relative min-h-screen flex flex-col justify-center items-center px-8 py-24 border-t border-border">
        <ScrollArrow direction="up" label="Team" targetId="team" />

        <RevealOnScroll>
          <p className="text-xs tracking-[2px] uppercase text-primary font-bold mb-4 text-center">Our Work</p>
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold leading-tight tracking-[-1px] mb-4 text-center">Joint Ventures</h2>
          <p className="text-muted-foreground text-center mb-8 max-w-[600px]">
            We are currently cooking up something special. Reserving this space for what's to come.
          </p>
        </RevealOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1200px] w-full mt-8">
          {[
            { icon: "⚔️", label: "To Be Announced" },
            { icon: "🗺️", label: "In Development" },
            { icon: "⚙️", label: "Concept Phase" },
          ].map((p, i) => (
            <RevealOnScroll key={p.label} delay={i * 0.1}>
              <div className="aspect-video bg-card border border-border rounded-xl flex flex-col items-center justify-center hover:border-muted-foreground transition-colors">
                <span className="text-3xl mb-4 opacity-50">{p.icon}</span>
                <span className="font-bold text-muted-foreground tracking-wider uppercase text-sm">{p.label}</span>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border px-8 md:px-16 py-12 flex flex-col md:flex-row justify-between text-muted-foreground text-sm">
        <span>Resenha Team © 2026</span>
        <span>Crafted with passion.</span>
      </footer>
    </>
  );
};

export default Index;
