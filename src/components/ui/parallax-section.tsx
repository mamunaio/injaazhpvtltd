import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ReactNode } from "react";
import { useParallax } from "@/hooks/use-parallax";

interface ParallaxSectionProps {
  children: ReactNode;
  className?: string;
  speed?: number;
  fadeIn?: boolean;
}

export const ParallaxSection = ({ 
  children, 
  className,
  speed = 0.3,
  fadeIn = true
}: ParallaxSectionProps) => {
  const { ref, y, opacity } = useParallax({ speed });

  return (
    <motion.div
      ref={ref}
      style={{ 
        y,
        opacity: fadeIn ? opacity : 1
      }}
      className={cn("relative", className)}
    >
      {children}
    </motion.div>
  );
};
