import { useEffect } from "react";
import CustomCursor from "@/components/CustomCursor";
import ProfileNav from "@/components/ProfileNav";
import ScrollArrow from "@/components/ScrollArrow";
import RevealOnScroll from "@/components/RevealOnScroll";
import { NowidzLogo } from "@/config/branding";

const Nowidz = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <CustomCursor />
      <ProfileNav name="Nowidz" />

      {/* HERO */}
      <section id="hero" className="relative min-h-screen flex flex-col justify-center px-8 md:px-16 py-24 max-w-[1000px] mx-auto">
        <p className="text-xs tracking-[2px] uppercase text-primary mb-4">The Dev Engine</p>
        <div className="flex items-center gap-5 mb-8">
          <NowidzLogo className="w-16 h-16 md:w-20 md:h-20 text-primary shrink-0" />
          <h1 className="text-[clamp(3rem,6vw,5.5rem)] font-extrabold leading-none tracking-[-2px]">
            Nowidz.
          </h1>
        </div>

        <div className="max-w-[800px] mt-4 space-y-6">
          <p className="text-lg text-muted-foreground font-light leading-relaxed">
            I specialize in bridging the gap between deep, complex backend systems and clean, responsive user interfaces. As the development half of <strong className="text-foreground font-medium">Resenha Team</strong>, my primary focus is ensuring that the visual beauty of our games is matched by bulletproof code.
          </p>
          <p className="text-lg text-muted-foreground font-light leading-relaxed">
            My expertise lies deep within the <strong className="text-foreground font-medium">Roblox Studio</strong> ecosystem. I architect robust data stores, engineer secure client-server networking models, and script high-performance gameplay loops using <strong className="text-foreground font-medium">Luau</strong>. But code is only half the battle.
          </p>
          <p className="text-lg text-muted-foreground font-light leading-relaxed">
            A game's mechanics are useless if the player doesn't understand them. That's why I also take full ownership of the <strong className="text-foreground font-medium">UI/UX pipeline</strong>. From wireframing core interfaces in Figma to implementing pixel-perfect, tween-animated HUDs and menus directly into the engine, I build systems that players actually enjoy interacting with.
          </p>
        </div>

        <div className="mt-12 flex flex-wrap gap-2">
          {["Full-Stack Development", "Luau Scripting", "UI/UX Design", "System Architecture"].map((t) => (
            <span key={t} className="px-4 py-2 rounded-md text-sm border border-border">{t}</span>
          ))}
        </div>

        <ScrollArrow direction="down" label="View Work" targetId="works" />
      </section>

      {/* WORKS */}
      <section id="works" className="relative px-8 md:px-16 py-24 border-t border-border">
        <ScrollArrow direction="up" label="Top" targetId="hero" />

        <div className="max-w-[1200px] mx-auto mt-16">
          <RevealOnScroll>
            <h2 className="text-3xl font-bold tracking-[-1px] mb-4">Visual & Technical Showcase</h2>
            <p className="text-muted-foreground mb-12 max-w-[600px]">
              A collection of interfaces I've designed and systems I've brought to life.
            </p>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: "Inventory Interface", desc: "Figma to Studio UI" },
              { title: "Combat Framework", desc: "Backend & Hitboxes" },
              { title: "Main Menu Flow", desc: "UX & Tween Animations" },
              { title: "Custom DataStore", desc: "Server Infrastructure" },
            ].map((item, i) => (
              <RevealOnScroll key={item.title} delay={i * 0.1}>
                <div className="aspect-[16/10] bg-card border border-border rounded-xl flex items-center justify-center relative overflow-hidden hover:border-primary transition-colors">
                  <div className="text-center pointer-events-none z-10">
                    <p className="font-bold text-xl mb-1">{item.title}</p>
                    <p className="text-sm text-muted-foreground uppercase tracking-wider">{item.desc}</p>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Nowidz;
