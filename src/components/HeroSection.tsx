import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Zap, Target, Rocket, Star } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative w-full bg-background pt-24 pb-16 lg:pt-28 lg:pb-20">
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 -left-16 sm:-left-32 w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 rounded-full bg-primary/30 blur-[80px] sm:blur-[120px]"
          animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-16 sm:-right-32 w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 rounded-full bg-accent/25 blur-[80px] sm:blur-[120px]"
          animate={{ x: [0, -40, 0], y: [0, 30, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />

      {/* Main Content */}
      <div className="relative z-10 w-full">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left Column - Text Content */}
              <div className="text-center lg:text-left">
                {/* Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="mb-3 sm:mb-6"
                >
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20">
                    <Sparkles className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-primary" />
                    <span className="text-[10px] sm:text-xs font-semibold text-primary uppercase tracking-wider">Creative Agency</span>
                  </div>
                </motion.div>

                {/* Main Headline */}
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.1] mb-4 sm:mb-6"
                >
                  We craft digital{" "}
                  <span className="gradient-text">experiences</span> that inspire
                </motion.h1>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-lg mx-auto lg:mx-0 mb-6 sm:mb-8 leading-relaxed"
                >
                  A performance-driven agency transforming bold ideas into powerful digital solutions.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-2.5 sm:gap-3 mb-6 sm:mb-10"
                >
                  <Button
                    size="lg"
                    className="h-11 sm:h-12 px-5 sm:px-6 text-sm font-semibold rounded-full glow-primary group w-full sm:w-auto"
                    asChild
                  >
                    <Link to="/contact">
                      Start a Project
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="h-11 sm:h-12 px-5 sm:px-6 text-sm font-semibold rounded-full border-2 hover:bg-secondary w-full sm:w-auto"
                    asChild
                  >
                    <Link to="/portfolio">View Work</Link>
                  </Button>
                </motion.div>

                {/* Compact Stats */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 text-sm"
                >
                  {[
                    { value: "150+", label: "Projects" },
                    { value: "50+", label: "Clients" },
                    { value: "98%", label: "Satisfaction" },
                  ].map((stat, i) => (
                    <div key={stat.label} className="flex items-center gap-1.5 sm:gap-2">
                      <span className="text-lg sm:text-xl font-bold text-foreground">{stat.value}</span>
                      <span className="text-xs sm:text-sm text-muted-foreground">{stat.label}</span>
                      {i < 2 && <span className="hidden sm:block ml-3 sm:ml-4 w-px h-4 bg-border" />}
                    </div>
                  ))}
                </motion.div>
              </div>

              {/* Right Column - Floating Cards (Tablet and up) */}
              <div className="relative hidden md:flex items-center justify-center h-[320px] lg:h-[400px] xl:h-[450px]">
                {/* Center Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 md:w-64 lg:w-80 h-48 md:h-64 lg:h-80 bg-primary/20 rounded-full blur-[60px] md:blur-[80px]" />

                {/* Main Feature Card */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
                >
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="bg-card/90 backdrop-blur-xl rounded-2xl border border-border/60 p-4 lg:p-5 shadow-2xl w-44 md:w-48 lg:w-56"
                  >
                    <div className="w-8 lg:w-10 h-8 lg:h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-2 lg:mb-3">
                      <Rocket className="w-4 lg:w-5 h-4 lg:h-5 text-primary-foreground" />
                    </div>
                    <div className="text-xs lg:text-sm font-semibold text-foreground mb-1">Launch Ready</div>
                    <div className="text-[10px] lg:text-xs text-muted-foreground">Your vision, our expertise</div>
                    <div className="mt-2 lg:mt-3 flex gap-0.5 lg:gap-1">
                      {[1,2,3,4,5].map(i => (
                        <Star key={i} className="w-2.5 lg:w-3 h-2.5 lg:h-3 text-yellow-500 fill-yellow-500" />
                      ))}
                    </div>
                  </motion.div>
                </motion.div>

                {/* Card 1 - Top Right */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="absolute top-4 lg:top-8 right-0 lg:right-4"
                >
                  <motion.div
                    animate={{ y: [0, -6, 0], rotate: [0, 1, 0] }}
                    transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                    className="bg-card/80 backdrop-blur-xl rounded-xl border border-border/50 px-3 lg:px-4 py-2 lg:py-3 shadow-lg"
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-6 lg:w-8 h-6 lg:h-8 rounded-lg bg-green-500/20 flex items-center justify-center">
                        <Zap className="w-3 lg:w-4 h-3 lg:h-4 text-green-500" />
                      </div>
                      <div>
                        <div className="text-[10px] lg:text-xs font-semibold text-foreground">+340% ROI</div>
                        <div className="text-[9px] lg:text-[10px] text-muted-foreground">This quarter</div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>

                {/* Card 2 - Top Left */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="absolute top-12 lg:top-20 left-0"
                >
                  <motion.div
                    animate={{ y: [0, 5, 0], rotate: [0, -1, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                    className="bg-card/80 backdrop-blur-xl rounded-xl border border-border/50 px-3 lg:px-4 py-2 lg:py-3 shadow-lg"
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-6 lg:w-8 h-6 lg:h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                        <Target className="w-3 lg:w-4 h-3 lg:h-4 text-primary" />
                      </div>
                      <div>
                        <div className="text-[10px] lg:text-xs font-semibold text-foreground">Goal Hit</div>
                        <div className="text-[9px] lg:text-[10px] text-muted-foreground">2.3M reached</div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>

                {/* Card 3 - Bottom Right */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  className="absolute bottom-8 lg:bottom-16 right-2 lg:right-8"
                >
                  <motion.div
                    animate={{ y: [0, -5, 0], rotate: [0, 1.5, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="bg-card/80 backdrop-blur-xl rounded-xl border border-border/50 px-3 lg:px-4 py-2 lg:py-3 shadow-lg"
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-6 lg:w-8 h-6 lg:h-8 rounded-lg bg-accent/20 flex items-center justify-center">
                        <Sparkles className="w-3 lg:w-4 h-3 lg:h-4 text-accent" />
                      </div>
                      <div>
                        <div className="text-[10px] lg:text-xs font-semibold text-foreground">Award Winner</div>
                        <div className="text-[9px] lg:text-[10px] text-muted-foreground">Best Agency 2024</div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>

                {/* Card 4 - Bottom Left */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  className="absolute bottom-16 lg:bottom-24 left-2 lg:left-4"
                >
                  <motion.div
                    animate={{ y: [0, 6, 0], rotate: [0, -1, 0] }}
                    transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
                    className="bg-card/80 backdrop-blur-xl rounded-xl border border-border/50 px-3 lg:px-4 py-2 lg:py-3 shadow-lg"
                  >
                    <div className="flex items-center gap-2">
                      <div className="flex -space-x-1.5 lg:-space-x-2">
                        {[1,2,3].map(i => (
                          <div key={i} className="w-5 lg:w-6 h-5 lg:h-6 rounded-full bg-gradient-to-br from-primary/60 to-accent/60 border-2 border-card" />
                        ))}
                      </div>
                      <div className="text-[9px] lg:text-[10px] text-muted-foreground">+47 joined today</div>
                    </div>
                  </motion.div>
                </motion.div>

                {/* Decorative ring */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 md:w-72 lg:w-80 h-56 md:h-72 lg:h-80 rounded-full border border-dashed border-primary/20 animate-[spin_30s_linear_infinite]" />
              </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
