import { motion } from "framer-motion";

interface GlassBubbleProps {
  size: number;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  delay?: number;
  opacity?: number;
  blur?: number;
  className?: string;
}

const GlassBubble = ({
  size,
  top,
  left,
  right,
  bottom,
  delay = 0,
  opacity = 0.25,
  blur = 24,
  className = "",
}: GlassBubbleProps) => {
  return (
    <motion.div
      aria-hidden="true"
      className={`pointer-events-none absolute rounded-full ${className}`}
      style={{
        width: size,
        height: size,
        top,
        left,
        right,
        bottom,
        opacity,
        backdropFilter: `blur(${blur}px)`,
        WebkitBackdropFilter: `blur(${blur}px)`,

        background:
          "radial-gradient(circle at 30% 25%, rgba(255,255,255,0.62) 0%, rgba(255,255,255,0.18) 24%, rgba(56,189,248,0.10) 48%, rgba(11,92,255,0.045) 72%, transparent 100%)",

        border: "1px solid rgba(255,255,255,0.62)",

        boxShadow:
          "inset 0 1px 2px rgba(255,255,255,0.75), inset -8px -10px 25px rgba(11,92,255,0.035), 0 24px 80px rgba(11,92,255,0.10)",
      }}
      animate={{
        x: [0, 20, -14, 0],
        y: [0, -18, 12, 0],
        scale: [1, 1.035, 0.98, 1],
        rotate: [0, 2, -1, 0],
      }}
      transition={{
        duration: 12,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <motion.div
        aria-hidden="true"
        className="absolute left-[18%] top-[14%] h-[18%] w-[18%] rounded-full bg-white/45 blur-md"
        animate={{
          x: [0, 7, -3, 0],
          y: [0, 4, -2, 0],
          opacity: [0.5, 0.75, 0.45, 0.5],
        }}
        transition={{
          duration: 8,
          delay: delay + 0.3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </motion.div>
  );
};

export default GlassBubble;
