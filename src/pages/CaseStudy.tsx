import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Link, useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import { GlassCard } from "@/components/ui/glass-card";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { FloatingOrb } from "@/components/ui/animated-gradient";
import { ArrowLeft, ArrowRight, CheckCircle2, TrendingUp, Clock, Users } from "lucide-react";

const CaseStudy = () => {
  const { slug } = useParams();

  const project = {
    title: "Luxe Fashion Store",
    category: "E-Commerce",
    client: "Luxe Fashion",
    duration: "3 months",
    year: "2024",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&h=600&fit=crop",
    description: "A premium e-commerce platform designed for luxury fashion retail.",
    challenge: "The client needed a sophisticated online presence that matched their high-end brand while providing seamless shopping experience across all devices. Their existing platform was slow and outdated, resulting in poor conversion rates.",
    solution: "We created a custom Shopify theme with advanced filtering, wishlist functionality, and integrated AR try-on features. The design focused on cinematic product showcases with buttery-smooth animations.",
    results: [
      { label: "Increase in Online Sales", value: "200%" },
      { label: "Conversion Rate Improvement", value: "45%" },
      { label: "Faster Page Load Times", value: "3×" },
      { label: "Reduced Cart Abandonment", value: "50%" },
    ],
    technologies: ["React", "Shopify", "Stripe", "Tailwind CSS", "Framer Motion"],
    gallery: [
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&h=600&fit=crop",
    ]
  };

  const meta = [
    { icon: Users, label: "Client", value: project.client },
    { icon: Clock, label: "Duration", value: project.duration },
    { icon: TrendingUp, label: "Year", value: project.year },
  ];

  return (
    <PageTransition>
      <Helmet>
        <title>{project.title} | Injaazh Portfolio</title>
        <meta name="description" content={project.description} />
      </Helmet>
      
      <Navbar />
      
      <main className="pt-20 overflow-hidden">
        <FloatingOrb className="top-0 -right-40" color="primary" size="lg" />
        <FloatingOrb className="bottom-1/3 -left-40" color="accent" size="md" delay={5} />
        
        <article className="py-16">
          <div className="container mx-auto px-6 max-w-5xl">
            <Link to="/portfolio">
              <motion.button whileHover={{ x: -4 }} className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-10 text-sm font-medium">
                <ArrowLeft className="w-4 h-4" /> Back to Portfolio
              </motion.button>
            </Link>
            
            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <motion.span initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }} className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full border border-primary/20 backdrop-blur-sm">
                {project.category}
              </motion.span>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mt-6 mb-6 text-foreground leading-tight">{project.title}</h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">{project.description}</p>
              
              {/* Meta */}
              <div className="flex flex-wrap gap-4 mb-10">
                {meta.map((item) => (
                  <GlassCard key={item.label} className="px-5 py-3 flex items-center gap-3" enableTilt={false}>
                    <item.icon className="w-5 h-5 text-primary" />
                    <div>
                      <span className="text-xs text-muted-foreground">{item.label}</span>
                      <p className="font-semibold text-foreground text-sm">{item.value}</p>
                    </div>
                  </GlassCard>
                ))}
              </div>
              
              <GlassCard className="overflow-hidden mb-16" enableTilt={false}>
                <img src={project.image} alt={project.title} className="w-full aspect-video object-cover" />
              </GlassCard>
              
              {/* Challenge & Solution */}
              <div className="grid lg:grid-cols-2 gap-6 mb-16">
                <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                  <GlassCard className="p-8 h-full hover:border-primary/30 transition-all duration-500" enableTilt>
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-rose-400 to-orange-500 flex items-center justify-center mb-5 shadow-lg">
                      <span className="text-white font-bold text-lg">?</span>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-4">The Challenge</h3>
                    <p className="text-muted-foreground leading-relaxed">{project.challenge}</p>
                  </GlassCard>
                </motion.div>
                <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                  <GlassCard className="p-8 h-full hover:border-accent/30 transition-all duration-500" enableTilt>
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-5 shadow-lg">
                      <span className="text-white font-bold text-lg">✓</span>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-4">Our Solution</h3>
                    <p className="text-muted-foreground leading-relaxed">{project.solution}</p>
                  </GlassCard>
                </motion.div>
              </div>
              
              {/* Results Grid */}
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
                <h3 className="text-2xl font-bold text-foreground mb-6">Key Results</h3>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  {project.results.map((result, i) => (
                    <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                      <GlassCard className="p-6 text-center hover:border-primary/40 transition-all duration-500" enableTilt>
                        <div className="text-3xl font-extrabold gradient-text mb-2">{result.value}</div>
                        <div className="text-xs text-muted-foreground">{result.label}</div>
                      </GlassCard>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              
              {/* Technologies */}
              <GlassCard className="p-8 mb-16" enableTilt={false}>
                <h3 className="font-bold text-foreground mb-5">Technologies Used</h3>
                <div className="flex flex-wrap gap-3">
                  {project.technologies.map(tech => (
                    <span key={tech} className="px-4 py-2 bg-primary/10 text-primary text-sm font-medium rounded-full border border-primary/20 backdrop-blur-sm">{tech}</span>
                  ))}
                </div>
              </GlassCard>
              
              {/* CTA */}
              <GlassCard className="p-10 text-center relative overflow-hidden" enableTilt>
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5" />
                <div className="relative z-10">
                  <h3 className="text-3xl font-bold text-foreground mb-4">Want similar results?</h3>
                  <p className="text-muted-foreground mb-8">Let's discuss how we can help transform your business.</p>
                  <Link to="/contact">
                    <MagneticButton>
                      Start Your Project <ArrowRight className="w-4 h-4 ml-2" />
                    </MagneticButton>
                  </Link>
                </div>
              </GlassCard>
            </motion.div>
          </div>
        </article>
      </main>
      
      <Footer />
    </PageTransition>
  );
};

export default CaseStudy;
