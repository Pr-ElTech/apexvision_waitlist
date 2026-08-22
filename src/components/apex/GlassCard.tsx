interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  padding?: string;
}

const GlassCard = ({
  children,
  className = "",
  hover = false,
  padding = "p-6",
}: GlassCardProps) => {
  return (
    <div
      className={`
        relative
        overflow-hidden
        rounded-[28px]
        border
        border-white/70
        bg-white/65
        backdrop-blur-2xl
        shadow-[0_20px_70px_rgba(11,92,255,0.08)]
        ${hover ? "transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_90px_rgba(11,92,255,0.13)]" : ""}
        ${padding}
        ${className}
      `}
    >
      {/* Soft internal light */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[radial-gradient(circle_at_15%_10%,rgba(255,255,255,0.65),transparent_38%)]
        "
      />

      {/* Content layer */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default GlassCard;
