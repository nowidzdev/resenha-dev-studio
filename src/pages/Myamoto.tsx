import CustomCursor from "@/components/CustomCursor";
import ProfileNav from "@/components/ProfileNav";
import ScrollArrow from "@/components/ScrollArrow";
import RevealOnScroll from "@/components/RevealOnScroll";

const Myamoto = () => {
  return (
    <>
      <CustomCursor />
      <ProfileNav name="Myamoto" />

      {/* HERO */}
      <section id="hero" className="relative min-h-screen flex flex-col justify-center px-8 md:px-16 py-24 max-w-[1000px] mx-auto">
        <p className="text-xs tracking-[2px] uppercase text-primary mb-4">The Visual Architect</p>
        <h1 className="text-[clamp(3rem,6vw,5.5rem)] font-extrabold leading-none tracking-[-2px] mb-8">
          Myamoto.
        </h1>

        <div className="max-w-[800px] mt-4 space-y-6">
          <p className="text-lg text-muted-foreground font-light leading-relaxed">
            I'm the creative force behind <strong className="text-foreground font-medium">Resenha Team's</strong> visual identity. Every environment, prop, and particle effect you see in our games passes through my hands — from initial concept to final polish inside Roblox Studio.
          </p>
          <p className="text-lg text-muted-foreground font-light leading-relaxed">
            My workflow starts in <strong className="text-foreground font-medium">Blender</strong>, where I sculpt and model everything from vast terrain systems to intricate weapon designs. I focus on optimized topology and clean UV mapping to ensure assets perform beautifully at scale.
          </p>
          <p className="text-lg text-muted-foreground font-light leading-relaxed">
            Beyond static models, I bring worlds to life with <strong className="text-foreground font-medium">VFX and particle systems</strong>. Explosions, magic spells, weather effects, ambient atmospheres — I craft each one to elevate the player's immersion and make every moment feel cinematic.
          </p>
        </div>

        <div className="mt-12 flex flex-wrap gap-2">
          {["Blender", "3D Modeling", "VFX & Particles", "Texturing", "Environment Design"].map((t) => (
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
            <h2 className="text-3xl font-bold tracking-[-1px] mb-4">3D & VFX Portfolio</h2>
            <p className="text-muted-foreground mb-12 max-w-[600px]">
              A showcase of environments, models, and visual effects crafted for immersive Roblox experiences.
            </p>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: "Environment Design", desc: "Open World Terrain" },
              { title: "Weapon Models", desc: "Low-Poly to High-Detail" },
              { title: "VFX Systems", desc: "Particles & Atmospherics" },
              { title: "Texture Work", desc: "PBR Materials & Mapping" },
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

export default Myamoto;
