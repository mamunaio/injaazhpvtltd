import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface AnimatedGradientProps {
  className?: string;
  colors?: string[];
}

export const AnimatedGradient = ({ 
  className,
  colors = ["primary", "accent"]
}: AnimatedGradientProps) => {
  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}>
      <motion.div
        className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%]"
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 60,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <div 
          className="w-full h-full"
          style={{
            background: `conic-gradient(from 0deg, 
              hsl(var(--${colors[0]}) / 0.1) 0deg, 
              transparent 60deg, 
              hsl(var(--${colors[1]}) / 0.1) 120deg, 
              transparent 180deg,
              hsl(var(--${colors[0]}) / 0.1) 240deg,
              transparent 300deg,
              hsl(var(--${colors[1]}) / 0.1) 360deg
            )`,
          }}
        />
      </motion.div>
    </div>
  );
};

export const FloatingOrb = ({ 
  className,
  color = "primary",
  size = "md",
  delay = 0
}: { 
  className?: string; 
  color?: string;
  size?: "sm" | "md" | "lg";
  delay?: number;
}) => {
  const sizes = {
    sm: "w-32 h-32",
    md: "w-64 h-64",
    lg: "w-96 h-96"
  };

  return (
    <motion.div
      className={cn(
        "absolute rounded-full blur-[100px]",
        sizes[size],
        className
      )}
      style={{
        background: `hsl(var(--${color}) / 0.3)`,
      }}
      animate={{
        x: [0, 50, -30, 0],
        y: [0, -40, 20, 0],
        scale: [1, 1.1, 0.9, 1],
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
    />
  );
};
