import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import { GlassCard } from "@/components/ui/glass-card";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { FloatingOrb } from "@/components/ui/animated-gradient";
import { ParallaxSection } from "@/components/ui/parallax-section";
import { 
  Globe, Palette, TrendingUp, Megaphone, 
  Code, Smartphone, ShoppingCart, BarChart3,
  CheckCircle2, ArrowRight, Sparkles
} from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  { icon: Globe, title: "Web Development", description: "Custom websites and web applications built with cutting-edge technologies for optimal performance.", features: ["Responsive Design", "SEO Optimization", "Fast Loading", "Secure Hosting"], gradient: "from-blue-400 to-cyan-500" },
  { icon: Palette, title: "UI/UX Design", description: "Beautiful, intuitive interfaces that enhance user experience and drive engagement.", features: ["User Research", "Wireframing", "Prototyping", "Usability Testing"], gradient: "from-pink-400 to-rose-500" },
  { icon: Megaphone, title: "Digital Marketing", description: "Strategic marketing campaigns that increase visibility and generate quality leads.", features: ["SEO/SEM", "Content Marketing", "Email Campaigns", "Analytics"], gradient: "from-orange-400 to-amber-500" },
  { icon: TrendingUp, title: "Brand Strategy", description: "Comprehensive branding solutions that establish a strong market presence.", features: ["Brand Identity", "Logo Design", "Brand Guidelines", "Messaging"], gradient: "from-violet-400 to-purple-500" },
  { icon: Code, title: "Custom Software", description: "Tailored software solutions designed to streamline your business operations.", features: ["Requirements Analysis", "Custom Development", "Integration", "Support"], gradient: "from-emerald-400 to-green-500" },
  { icon: Smartphone, title: "Mobile Apps", description: "Native and cross-platform mobile applications for iOS and Android.", features: ["iOS Development", "Android Development", "Cross-Platform", "App Store"], gradient: "from-indigo-400 to-blue-500" },
  { icon: ShoppingCart, title: "E-Commerce", description: "Complete e-commerce solutions to launch and grow your online store.", features: ["Store Setup", "Payment Integration", "Inventory", "Order Management"], gradient: "from-teal-400 to-cyan-500" },
  { icon: BarChart3, title: "Analytics & Insights", description: "Data-driven insights to optimize your digital presence and ROI.", features: ["Data Analysis", "Reporting", "A/B Testing", "Conversion Optimization"], gradient: "from-red-400 to-orange-500" },
];

const process = [
  { step: "01", title: "Discovery", description: "Understanding your goals, audience, and requirements through in-depth consultation." },
  { step: "02", title: "Strategy", description: "Developing a tailored approach and roadmap aligned with your business objectives." },
  { step: "03", title: "Design", description: "Creating stunning visual concepts and user experiences that captivate." },
  { step: "04", title: "Development", description: "Building with precision, using the latest technologies and best practices." },
  { step: "05", title: "Testing", description: "Rigorous quality assurance to ensure flawless performance across all devices." },
  { step: "06", title: "Launch & Support", description: "Deploying your project and providing ongoing maintenance and optimization." },
];

const Services = () => {
  return (
    <PageTransition>
      <Helmet>
        <title>Services | Injaazh Digital Agency</title>
        <meta name="description" content="Explore our comprehensive digital services including web development, UI/UX design, digital marketing, branding, and custom software solutions." />
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
                <span className="text-sm font-medium text-primary tracking-wide">Our Services</span>
              </motion.div>
              
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-8 text-foreground leading-[0.95]">
                Digital Solutions for
                <br />
                <span className="gradient-text">Modern Business</span>
                <span className="text-primary">.</span>
              </h1>
              
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                A comprehensive suite of digital services designed to elevate your brand and accelerate growth.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Services Grid - Bento style */}
        <section className="py-20 relative">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 50, rotateX: -10 }}
                  whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.06, type: "spring", stiffness: 80 }}
                >
                  <GlassCard className="p-6 h-full group hover:border-primary/40 transition-all duration-500" enableTilt>
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}>
                      <service.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-lg font-bold mb-3 text-foreground group-hover:text-primary transition-colors">{service.title}</h3>
                    <p className="text-muted-foreground text-sm mb-5 leading-relaxed">{service.description}</p>
                    <div className="space-y-2.5">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2 text-xs text-muted-foreground">
                          <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process - numbered steps */}
        <ParallaxSection speed={0.15} className="py-24 relative overflow-hidden">
          <FloatingOrb className="top-1/2 left-1/4 -translate-y-1/2" color="accent" size="md" delay={2} />
          
          <div className="container mx-auto px-6 relative z-10">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
              <span className="text-primary font-semibold text-sm uppercase tracking-widest">Our Process</span>
              <h2 className="text-4xl md:text-6xl font-extrabold mt-4 text-foreground">How We <span className="gradient-text">Work</span></h2>
              <p className="text-muted-foreground mt-5 max-w-2xl mx-auto">A proven methodology that ensures successful project delivery every time.</p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {process.map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, type: "spring" }}
                >
                  <GlassCard className="p-7 h-full group hover:border-primary/40 transition-all duration-500" enableTilt>
                    <div className="flex items-start gap-5">
                      <div className="text-6xl font-black gradient-text opacity-40 group-hover:opacity-100 transition-opacity duration-500 leading-none">
                        {item.step}
                      </div>
                      <div className="pt-2">
                        <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>
        </ParallaxSection>

        {/* CTA */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-accent/5 to-background" />
          <FloatingOrb className="-bottom-40 -left-40" color="primary" size="lg" />
          
          <div className="container mx-auto px-6 relative z-10">
            <GlassCard className="p-12 lg:p-20 text-center relative overflow-hidden" enableTilt>
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5" />
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative z-10">
                <h2 className="text-4xl md:text-6xl font-extrabold text-foreground mb-6">
                  Ready to <span className="gradient-text">Get Started</span>?
                </h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10">
                  Let's discuss how our services can help transform your business.
                </p>
                <Link to="/contact">
                  <MagneticButton>
                    Request a Quote <ArrowRight className="w-4 h-4 ml-2" />
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

export default Services;
