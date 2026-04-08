import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import { GlassCard } from "@/components/ui/glass-card";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { FloatingOrb } from "@/components/ui/animated-gradient";
import { ExternalLink, ArrowRight, Sparkles } from "lucide-react";

const categories = ["All", "Web Design", "Branding", "Mobile App", "E-Commerce"];

const projects = [
  { id: 1, slug: "luxe-fashion-store", title: "Luxe Fashion Store", category: "E-Commerce", image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop", description: "A premium e-commerce platform for luxury fashion.", tags: ["Shopify", "React", "Stripe"] },
  { id: 2, slug: "techflow-dashboard", title: "TechFlow Dashboard", category: "Web Design", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop", description: "Analytics dashboard for SaaS companies.", tags: ["React", "D3.js", "Tailwind"] },
  { id: 3, slug: "green-energy-co", title: "Green Energy Co.", category: "Branding", image: "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?w=800&h=600&fit=crop", description: "Complete brand identity for renewable energy startup.", tags: ["Branding", "Logo", "Guidelines"] },
  { id: 4, slug: "fittrack-app", title: "FitTrack App", category: "Mobile App", image: "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?w=800&h=600&fit=crop", description: "Fitness tracking mobile application.", tags: ["React Native", "Firebase", "Health Kit"] },
  { id: 5, slug: "artisan-coffee", title: "Artisan Coffee", category: "Branding", image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&h=600&fit=crop", description: "Brand identity for specialty coffee roasters.", tags: ["Branding", "Packaging", "Web"] },
  { id: 6, slug: "propertyhub", title: "PropertyHub", category: "Web Design", image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop", description: "Real estate listing and management platform.", tags: ["Next.js", "PostgreSQL", "Maps"] },
  { id: 7, slug: "gourmet-delivery", title: "Gourmet Delivery", category: "Mobile App", image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&h=600&fit=crop", description: "Food delivery app with real-time tracking.", tags: ["Flutter", "Node.js", "Real-time"] },
  { id: 8, slug: "stylebox", title: "StyleBox", category: "E-Commerce", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&h=600&fit=crop", description: "Subscription box e-commerce platform.", tags: ["WooCommerce", "Custom Theme", "Subscriptions"] },
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const filteredProjects = activeCategory === "All" ? projects : projects.filter(p => p.category === activeCategory);

  return (
    <PageTransition>
      <Helmet>
        <title>Portfolio | Injaazh Digital Agency</title>
        <meta name="description" content="Explore our portfolio of successful digital projects including web design, mobile apps, branding, and e-commerce solutions." />
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
                <span className="text-sm font-medium text-primary tracking-wide">Our Work</span>
              </motion.div>
              
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-8 text-foreground leading-[0.95]">
                Projects That
                <br />
                <span className="gradient-text">Inspire</span>
                <span className="text-primary">.</span>
              </h1>
              
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Discover how we've helped businesses transform their digital presence and achieve remarkable results.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Filter pills */}
        <section className="py-8">
          <div className="container mx-auto px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <motion.button
                  key={category}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 backdrop-blur-sm border ${
                    activeCategory === category 
                      ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/25" 
                      : "bg-card/40 text-muted-foreground border-border/50 hover:border-primary/30 hover:text-foreground"
                  }`}
                >
                  {category}
                </motion.button>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-12 pb-28">
          <div className="container mx-auto px-6">
            <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9, y: 30 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4, delay: index * 0.06 }}
                  >
                    <Link to={`/portfolio/${project.slug}`}>
                      <GlassCard className="overflow-hidden group cursor-pointer h-full hover:border-primary/40 transition-all duration-500" enableTilt>
                        <div className="relative overflow-hidden aspect-[4/3]">
                          <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                            <motion.div whileHover={{ scale: 1.1 }} className="w-16 h-16 rounded-full bg-primary/90 backdrop-blur-md flex items-center justify-center shadow-2xl shadow-primary/30">
                              <ExternalLink className="w-6 h-6 text-primary-foreground" />
                            </motion.div>
                          </div>
                        </div>
                        <div className="p-6">
                          <div className="flex flex-wrap gap-2 mb-3">
                            {project.tags.map((tag) => (
                              <span key={tag} className="text-[10px] px-2.5 py-1 rounded-full bg-primary/10 text-primary font-medium backdrop-blur-sm">{tag}</span>
                            ))}
                          </div>
                          <span className="text-primary text-xs font-semibold uppercase tracking-wider">{project.category}</span>
                          <h3 className="text-xl font-bold mt-1.5 text-foreground group-hover:text-primary transition-colors">{project.title}</h3>
                          <p className="text-muted-foreground text-sm mt-2 leading-relaxed">{project.description}</p>
                          <div className="mt-5 flex items-center text-primary text-sm font-semibold group-hover:gap-3 gap-1 transition-all duration-300">
                            View Case Study <ArrowRight className="w-4 h-4" />
                          </div>
                        </div>
                      </GlassCard>
                    </Link>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-accent/5 to-background" />
          <FloatingOrb className="-bottom-40 -left-40" color="primary" size="lg" />
          
          <div className="container mx-auto px-6 relative z-10">
            <GlassCard className="p-12 lg:p-20 text-center relative overflow-hidden" enableTilt>
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5" />
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative z-10">
                <h2 className="text-4xl md:text-6xl font-extrabold text-foreground mb-6">
                  Have a <span className="gradient-text">Project</span> in Mind?
                </h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10">
                  Let's create something amazing together. Your success is our priority.
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

export default Portfolio;
