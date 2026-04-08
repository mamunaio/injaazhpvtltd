import { cn } from "@/lib/utils";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { ReactNode, useRef } from "react";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  strength?: number;
  onClick?: () => void;
}

export const MagneticButton = ({ 
  children, 
  className,
  strength = 0.3,
  onClick
}: MagneticButtonProps) => {
  const ref = useRef<HTMLButtonElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const springConfig = { damping: 15, stiffness: 150, mass: 0.1 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!ref.current) return;
    
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const distanceX = (e.clientX - centerX) * strength;
    const distanceY = (e.clientY - centerY) * strength;
    
    x.set(distanceX);
    y.set(distanceY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{ x: springX, y: springY }}
      whileTap={{ scale: 0.95 }}
      className={cn(
        "relative inline-flex items-center justify-center",
        "px-8 py-4 rounded-full",
        "bg-primary text-primary-foreground",
        "font-semibold text-sm",
        "shadow-lg shadow-primary/25",
        "hover:shadow-xl hover:shadow-primary/30",
        "transition-shadow duration-300",
        "overflow-hidden group",
        className
      )}
    >
      {/* Shine effect */}
      <div className="absolute inset-0 overflow-hidden rounded-full">
        <div 
          className="absolute -inset-full bg-gradient-to-r from-transparent via-white/20 to-transparent 
          translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-out"
        />
      </div>
      
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
};
