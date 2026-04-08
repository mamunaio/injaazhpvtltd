import { motion, useScroll, useTransform } from "framer-motion";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import { GlassCard } from "@/components/ui/glass-card";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { FloatingOrb } from "@/components/ui/animated-gradient";
import { ParallaxSection } from "@/components/ui/parallax-section";
import { Users, Target, Award, Lightbulb, ArrowRight, CheckCircle2, Sparkles, Zap, Globe, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { useRef } from "react";

const values = [
  { icon: Lightbulb, title: "Innovation", description: "We embrace cutting-edge technologies and creative solutions to deliver exceptional results.", color: "from-amber-400 to-orange-500" },
  { icon: Target, title: "Excellence", description: "We strive for perfection in every project, ensuring the highest quality standards.", color: "from-primary to-accent" },
  { icon: Users, title: "Collaboration", description: "We work closely with our clients, treating their success as our own.", color: "from-emerald-400 to-teal-500" },
  { icon: Award, title: "Integrity", description: "We maintain transparency and honesty in all our business relationships.", color: "from-rose-400 to-pink-500" },
];

const timeline = [
  { year: "2023", title: "Founded", description: "Injaazh was established with a vision to transform digital experiences." },
  { year: "2023", title: "First Major Client", description: "Secured partnership with leading regional brands." },
  { year: "2026", title: "Team Expansion", description: "Grew to 20+ talented professionals across multiple disciplines." },
  { year: "2026", title: "Award Recognition", description: "Received multiple industry awards for innovative solutions." },
  { year: "2024", title: "Global Reach", description: "Expanded services to clients across 15+ countries." },
  { year: "2024", title: "AI Integration", description: "Pioneered AI-powered solutions for enhanced digital experiences." },
];

const stats = [
  { value: "500+", label: "Projects Completed", icon: Zap },
  { value: "580+", label: "Happy Clients", icon: Heart },
  { value: "15+", label: "Countries Served", icon: Globe },
  { value: "99%", label: "Client Satisfaction", icon: Award },
];

const About = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -200]);

  return (
    <PageTransition>
      <Helmet>
        <title>About Us | Injaazh Digital Agency</title>
        <meta name="description" content="Learn about Injaazh - a leading digital agency transforming businesses through innovative web solutions, branding, and marketing strategies." />
      </Helmet>
      
      <Navbar />
      
      <main ref={containerRef} className="pt-20 overflow-hidden">
        {/* Hero */}
        <section className="relative py-28 lg:py-40 overflow-hidden">
          <FloatingOrb className="-top-20 -left-40" color="primary" size="lg" />
          <FloatingOrb className="-bottom-20 -right-40" color="accent" size="lg" delay={5} />
          <FloatingOrb className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" color="primary" size="md" delay={8} />
          <motion.div style={{ y: backgroundY }} className="absolute inset-0 grid-bg opacity-20" />
          
          <div className="container mx-auto px-6 relative z-10">
            <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="max-w-5xl mx-auto text-center">
              <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3, type: "spring" }} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-md mb-8">
                <Sparkles className="w-4 h-4 text-primary animate-pulse" />
                <span className="text-sm font-medium text-primary tracking-wide">About Injaazh</span>
              </motion.div>
              
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-8 text-foreground leading-[0.95]">
                Crafting Digital
                <br />
                <span className="gradient-text">Excellence</span>
                <span className="text-primary">.</span>
              </h1>
              
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
                We are a passionate team of designers, developers, and strategists dedicated to helping businesses thrive in the digital age.
              </motion.p>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}>
                <Link to="/contact">
                  <MagneticButton className="mx-auto">
                    Work With Us <ArrowRight className="w-4 h-4 ml-2" />
                  </MagneticButton>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Stats - Horizontal strip */}
        <section className="py-6 relative">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
                >
                  <GlassCard className="p-6 text-center group hover:border-primary/40 transition-all duration-500" enableTilt>
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <stat.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="text-4xl md:text-5xl font-extrabold gradient-text mb-1">{stat.value}</div>
                    <div className="text-xs text-muted-foreground uppercase tracking-widest">{stat.label}</div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission & Vision - Bento grid */}
        <ParallaxSection speed={0.15} className="py-24">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-6">
              <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
                <GlassCard className="p-8 lg:p-12 h-full group hover:border-primary/30 transition-all duration-500" enableTilt>
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-8 shadow-lg shadow-primary/20 group-hover:shadow-primary/40 transition-shadow duration-500">
                    <Target className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h2 className="text-3xl lg:text-4xl font-bold mb-5 text-foreground">Our Mission</h2>
                  <p className="text-muted-foreground leading-relaxed mb-8">
                    To empower businesses with innovative digital solutions that drive growth, enhance brand presence, and create lasting connections with their audiences.
                  </p>
                  <div className="space-y-4">
                    {["Drive digital transformation", "Create meaningful experiences", "Deliver measurable results"].map((item, i) => (
                      <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 + i * 0.1 }} className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                          <CheckCircle2 className="w-4 h-4 text-primary" />
                        </div>
                        <span className="text-sm text-muted-foreground">{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </GlassCard>
              </motion.div>
              
              <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
                <GlassCard className="p-8 lg:p-12 h-full group hover:border-accent/30 transition-all duration-500" enableTilt>
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent to-primary flex items-center justify-center mb-8 shadow-lg shadow-accent/20 group-hover:shadow-accent/40 transition-shadow duration-500">
                    <Sparkles className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h2 className="text-3xl lg:text-4xl font-bold mb-5 text-foreground">Our Vision</h2>
                  <p className="text-muted-foreground leading-relaxed mb-8">
                    To be the leading digital agency in the region, recognized for our creativity, technical excellence, and unwavering commitment to client success.
                  </p>
                  <div className="space-y-4">
                    {["Industry-leading innovation", "Global recognition", "Sustainable growth"].map((item, i) => (
                      <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 + i * 0.1 }} className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                          <CheckCircle2 className="w-4 h-4 text-accent" />
                        </div>
                        <span className="text-sm text-muted-foreground">{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </GlassCard>
              </motion.div>
            </div>
          </div>
        </ParallaxSection>

        {/* Values */}
        <section className="py-24 relative overflow-hidden">
          <FloatingOrb className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" color="primary" size="lg" delay={2} />
          
          <div className="container mx-auto px-6 relative z-10">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
              <span className="text-primary font-semibold text-sm uppercase tracking-widest">Our Core Values</span>
              <h2 className="text-4xl md:text-6xl font-extrabold mt-4 text-foreground">What Drives Us <span className="gradient-text">Forward</span></h2>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 50, rotateX: -15 }}
                  whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.12, type: "spring", stiffness: 80 }}
                >
                  <GlassCard className="p-7 h-full group hover:border-primary/40 transition-all duration-500" enableTilt>
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${value.color} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}>
                      <value.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">{value.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <ParallaxSection speed={0.1} className="py-24">
          <div className="container mx-auto px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
              <span className="text-primary font-semibold text-sm uppercase tracking-widest">Our Journey</span>
              <h2 className="text-4xl md:text-6xl font-extrabold mt-4 text-foreground">Key <span className="gradient-text">Milestones</span></h2>
            </motion.div>
            
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-transparent" />
                
                {timeline.map((item, index) => (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, type: "spring" }}
                    className="relative pl-24 pb-12 last:pb-0"
                  >
                    <div className="absolute left-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg shadow-primary/25 group">
                      <span className="text-primary-foreground font-bold text-sm">{item.year}</span>
                    </div>
                    
                    <GlassCard className="p-6 group hover:border-primary/40 transition-all duration-500" enableTilt>
                      <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                    </GlassCard>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </ParallaxSection>

        {/* CTA */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-accent/5 to-background" />
          <FloatingOrb className="-bottom-40 -left-40" color="primary" size="lg" />
          <FloatingOrb className="-top-40 -right-40" color="accent" size="lg" delay={3} />
          
          <div className="container mx-auto px-6 relative z-10">
            <GlassCard className="p-12 lg:p-20 text-center relative overflow-hidden" enableTilt>
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5" />
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative z-10">
                <h2 className="text-4xl md:text-6xl font-extrabold text-foreground mb-6">
                  Ready to <span className="gradient-text">Transform</span>?
                </h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10">
                  Let's collaborate to create something extraordinary together.
                </p>
                <Link to="/contact">
                  <MagneticButton>
                    Start Your Project <ArrowRight className="w-4 h-4 ml-2" />
                  </MagneticButton>
                </Link>
              </motion.div>
            </GlassCard>
          </div>
        </section>
      </main>
      
      <Footer />
    </PageTransition>
  );
};

export default About;
