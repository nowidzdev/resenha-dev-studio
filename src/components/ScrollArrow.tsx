interface ScrollArrowProps {
  direction: "down" | "up";
  label: string;
  targetId: string;
}

const ScrollArrow = ({ direction, label, targetId }: ScrollArrowProps) => {
  const handleClick = () => {
    const el = document.getElementById(targetId);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  if (direction === "down") {
    return (
      <button
        onClick={handleClick}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 text-muted-foreground hover:opacity-70 transition-opacity hidden md:flex"
      >
        <span className="text-[0.65rem] uppercase tracking-[3px] font-medium pl-[3px]">{label}</span>
        <div className="w-px h-[60px] relative overflow-hidden bg-foreground/10 scroll-line-down" />
      </button>
    );
  }

  return (
    <button
      onClick={handleClick}
      className="absolute top-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2.5 text-muted-foreground hover:opacity-100 transition-opacity opacity-60 hidden md:flex"
    >
      <div className="w-px h-10 relative overflow-hidden bg-foreground/10 scroll-line-up" />
      <span className="text-[0.55rem] uppercase tracking-[3px] font-medium pl-[3px]">{label}</span>
    </button>
  );
};

export default ScrollArrow;
