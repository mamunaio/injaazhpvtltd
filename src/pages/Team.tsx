import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import { GlassCard } from "@/components/ui/glass-card";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { FloatingOrb } from "@/components/ui/animated-gradient";
import { ParallaxSection } from "@/components/ui/parallax-section";
import { Linkedin, Twitter, ArrowRight, Sparkles } from "lucide-react";

const team = [
  { name: "Md Mamun Hossain", role: "Founder & CEO", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face", bio: "Visionary leader with 15+ years in digital transformation.", social: { linkedin: "#", twitter: "#" } },
  { name: "Imtiaz Ahmed.", role: "Creative Director", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face", bio: "Award-winning designer passionate about user-centered design.", social: { linkedin: "#", twitter: "#" } },
  { name: "Md Ismail Hossain", role: "Tech Lead", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face", bio: "Full-stack expert specializing in scalable architectures.", social: { linkedin: "#", twitter: "#" } },
  { name: "Shakib Hasan Ruhin", role: "Marketing Director", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face", bio: "Strategic marketer driving growth through data-driven campaigns.", social: { linkedin: "#", twitter: "#" } },
  { name: "Khandaker Shanto", role: "Senior Developer", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face", bio: "React specialist with a passion for clean, efficient code.", social: { linkedin: "#", twitter: "#" } },
  { name: "Arafat Al Siam", role: "UX Designer", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=face", bio: "Creating intuitive experiences through research and empathy.", social: { linkedin: "#", twitter: "#" } },
  { name: "Hassan Ali", role: "Project Manager", image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&h=400&fit=crop&crop=face", bio: "Ensuring projects deliver on time, on budget, every time.", social: { linkedin: "#", twitter: "#" } },
  { name: "Noor Ahmed", role: "Content Strategist", image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=400&fit=crop&crop=face", bio: "Crafting compelling narratives that resonate with audiences.", social: { linkedin: "#", twitter: "#" } },
];

const Team = () => {
  return (
    <PageTransition>
      <Helmet>
        <title>Our Team | Injaazh Digital Agency</title>
        <meta name="description" content="Meet the talented team behind Injaazh - designers, developers, and strategists dedicated to delivering exceptional digital solutions." />
      </Helmet>
      
      <Navbar />
      
      <main className="pt-20 overflow-hidden">
        {/* Hero */}
        <section className="relative py-28 lg:py-40 overflow-hidden">
          <FloatingOrb className="-top-20 -left-40" color="primary" size="lg" />
          <FloatingOrb className="-bottom-20 -right-40" color="accent" size="lg" delay={5} />
          <div className="absolute inset-0 grid-bg opacity-20" />
          
          <div className="container mx-auto px-6 relative z-10">
            <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="max-w-5xl mx-auto text-center">
              <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3, type: "spring" }} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-md mb-8">
                <Sparkles className="w-4 h-4 text-primary animate-pulse" />
                <span className="text-sm font-medium text-primary tracking-wide">Our Team</span>
              </motion.div>
              
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-8 text-foreground leading-[0.95]">
                Meet the
                <br />
                <span className="gradient-text">Experts</span>
                <span className="text-primary">.</span>
              </h1>
              
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                A diverse team of passionate professionals committed to turning your vision into reality.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Team Grid */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {team.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 50, rotateX: -10 }}
                  whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.06, type: "spring", stiffness: 80 }}
                >
                  <GlassCard className="overflow-hidden group hover:border-primary/40 transition-all duration-500" enableTilt>
                    <div className="relative overflow-hidden aspect-square">
                      <img src={member.image} alt={member.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                        <a href={member.social.linkedin} className="w-10 h-10 rounded-full bg-card/80 backdrop-blur-md border border-border/50 flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 shadow-lg">
                          <Linkedin className="w-4 h-4" />
                        </a>
                        <a href={member.social.twitter} className="w-10 h-10 rounded-full bg-card/80 backdrop-blur-md border border-border/50 flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 shadow-lg">
                          <Twitter className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                    <div className="p-5">
                      <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">{member.name}</h3>
                      <p className="text-primary text-sm font-semibold">{member.role}</p>
                      <p className="text-muted-foreground text-sm mt-2 leading-relaxed">{member.bio}</p>
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Join CTA */}
        <ParallaxSection speed={0.15} className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-accent/5 to-background" />
          <FloatingOrb className="-bottom-40 -left-40" color="primary" size="lg" />
          <FloatingOrb className="-top-40 -right-40" color="accent" size="lg" delay={3} />
          
          <div className="container mx-auto px-6 relative z-10">
            <GlassCard className="p-12 lg:p-20 text-center relative overflow-hidden" enableTilt>
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5" />
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative z-10">
                <h2 className="text-4xl md:text-6xl font-extrabold text-foreground mb-6">
                  Join Our <span className="gradient-text">Team</span>
                </h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10">
                  We're always looking for talented individuals to join our growing team. If you're passionate about digital innovation, we'd love to hear from you.
                </p>
                <a href="mailto:careers@injaazh.com">
                  <MagneticButton>
                    View Open Positions <ArrowRight className="w-4 h-4 ml-2" />
                  </MagneticButton>
                </a>
              </motion.div>
            </GlassCard>
          </div>
        </ParallaxSection>
      </main>
      
      <Footer />
    </PageTransition>
  );
};

export default Team;
