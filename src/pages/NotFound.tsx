import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { FloatingOrb } from "@/components/ui/animated-gradient";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { GlassCard } from "@/components/ui/glass-card";
import { ArrowLeft, Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="relative flex min-h-screen items-center justify-center bg-background overflow-hidden">
      <FloatingOrb className="-top-40 -left-40" color="primary" size="lg" />
      <FloatingOrb className="-bottom-40 -right-40" color="accent" size="lg" delay={3} />
      <div className="absolute inset-0 grid-bg opacity-20" />
      
      <div className="relative z-10 text-center px-6">
        <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, type: "spring" }}>
          <div className="text-[10rem] md:text-[14rem] font-black gradient-text leading-none mb-4 select-none">
            404
          </div>
        </motion.div>
        
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
          <GlassCard className="p-8 max-w-md mx-auto" enableTilt>
            <h1 className="text-2xl font-bold text-foreground mb-3">Page Not Found</h1>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              The page you're looking for doesn't exist or has been moved.
            </p>
            <Link to="/">
              <MagneticButton>
                <Home className="w-4 h-4 mr-2" /> Back to Home
              </MagneticButton>
            </Link>
          </GlassCard>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
