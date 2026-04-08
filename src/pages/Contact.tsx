import { useState } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import { GlassCard } from "@/components/ui/glass-card";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { FloatingOrb } from "@/components/ui/animated-gradient";
import { ParallaxSection } from "@/components/ui/parallax-section";
import { Mail, Phone, MapPin, Send, Clock, MessageCircle, Sparkles } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  { icon: Mail, title: "Email Us", value: "hello@injaazh.com", link: "mailto:hello@injaazh.com", gradient: "from-blue-400 to-cyan-500" },
  { icon: Phone, title: "Call Us", value: "+971 4 123 4567", link: "tel:+97141234567", gradient: "from-emerald-400 to-green-500" },
  { icon: MapPin, title: "Visit Us", value: "Dubai, UAE", link: "#", gradient: "from-violet-400 to-purple-500" },
  { icon: Clock, title: "Business Hours", value: "Sun-Thu: 9AM-6PM", link: "#", gradient: "from-orange-400 to-amber-500" },
];

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: "", email: "", company: "", phone: "", service: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    toast({ title: "Message Sent!", description: "We'll get back to you as soon as possible." });
    setFormData({ name: "", email: "", company: "", phone: "", service: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const inputClass = "w-full px-5 py-3.5 rounded-xl bg-background/50 backdrop-blur-md border border-border/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary/50 text-foreground placeholder:text-muted-foreground transition-all duration-300";

  return (
    <PageTransition>
      <Helmet>
        <title>Contact Us | Injaazh Digital Agency</title>
        <meta name="description" content="Get in touch with Injaazh. We'd love to hear about your project and discuss how we can help transform your digital presence." />
      </Helmet>
      
      <Navbar />
      
      <main className="pt-20 overflow-hidden">
        {/* Hero */}
        <section className="relative py-28 lg:py-40 overflow-hidden">
          <FloatingOrb className="-top-20 -left-40" color="primary" size="lg" />
          <FloatingOrb className="-bottom-20 -right-40" color="accent" size="lg" delay={5} />
          <FloatingOrb className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" color="primary" size="md" delay={8} />
          <div className="absolute inset-0 grid-bg opacity-20" />
          
          <div className="container mx-auto px-6 relative z-10">
            <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="max-w-5xl mx-auto text-center">
              <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3, type: "spring" }} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-md mb-8">
                <Sparkles className="w-4 h-4 text-primary animate-pulse" />
                <span className="text-sm font-medium text-primary tracking-wide">Contact Us</span>
              </motion.div>
              
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-8 text-foreground leading-[0.95]">
                Let's Build Something
                <br />
                <span className="gradient-text">Amazing</span>
                <span className="text-primary">.</span>
              </h1>
              
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Ready to start your next project? Get in touch and let's discuss how we can help.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Contact Cards */}
        <section className="py-8">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.title}
                  href={info.link}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
                >
                  <GlassCard className="p-6 h-full group hover:border-primary/40 transition-all duration-500" enableTilt>
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${info.gradient} flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}>
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">{info.title}</p>
                    <p className="font-semibold text-foreground group-hover:text-primary transition-colors">{info.value}</p>
                  </GlassCard>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        {/* Form + Info */}
        <ParallaxSection speed={0.1} className="py-24">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-5 gap-8">
              {/* Form - 3 cols */}
              <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:col-span-3">
                <GlassCard className="p-8 lg:p-10" enableTilt={false}>
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg shadow-primary/20">
                      <MessageCircle className="w-7 h-7 text-primary-foreground" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-foreground">Send us a message</h2>
                      <p className="text-muted-foreground text-sm">We'll respond within 24 hours</p>
                    </div>
                  </div>
                  
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid md:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">Full Name *</label>
                        <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} className={inputClass} placeholder="John Doe" />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">Email Address *</label>
                        <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} className={inputClass} placeholder="john@example.com" />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">Company</label>
                        <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} className={inputClass} placeholder="Your company" />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">Phone</label>
                        <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className={inputClass} placeholder="+971 50 123 4567" />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">Service Interested In</label>
                      <select id="service" name="service" value={formData.service} onChange={handleChange} className={inputClass}>
                        <option value="">Select a service</option>
                        <option value="web-development">Web Development</option>
                        <option value="ui-ux-design">UI/UX Design</option>
                        <option value="digital-marketing">Digital Marketing</option>
                        <option value="branding">Brand Strategy</option>
                        <option value="mobile-app">Mobile App Development</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">Your Message *</label>
                      <textarea id="message" name="message" required rows={5} value={formData.message} onChange={handleChange} className={`${inputClass} resize-none`} placeholder="Tell us about your project..." />
                    </div>
                    <MagneticButton className="w-full" onClick={() => {}}>
                      {isSubmitting ? "Sending..." : "Send Message"}
                      <Send className="w-4 h-4 ml-2" />
                    </MagneticButton>
                  </form>
                </GlassCard>
              </motion.div>

              {/* Right - 2 cols */}
              <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:col-span-2 space-y-6">
                <div>
                  <h2 className="text-3xl font-bold mb-4 text-foreground">Get in <span className="gradient-text">touch</span></h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We'd love to hear from you. Whether you have a question about our services, pricing, or anything else, our team is ready to answer all your questions.
                  </p>
                </div>

                <GlassCard className="overflow-hidden" enableTilt>
                  <div className="relative h-72">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
                    <div className="absolute inset-0 grid-bg opacity-20" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4 shadow-xl shadow-primary/25 animate-float">
                        <MapPin className="w-10 h-10 text-primary-foreground" />
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-1">Our Office</h3>
                      <p className="text-muted-foreground">Dubai, United Arab Emirates</p>
                    </div>
                  </div>
                </GlassCard>

                <GlassCard className="p-6" enableTilt>
                  <h3 className="font-bold text-foreground mb-5">Why Work With Us?</h3>
                  <div className="space-y-4">
                    {["Response within 24 hours", "Free project consultation", "Dedicated project manager", "Flexible payment options"].map((item, i) => (
                      <motion.div key={i} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="flex items-center gap-3 text-sm text-muted-foreground">
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-accent shrink-0" />
                        {item}
                      </motion.div>
                    ))}
                  </div>
                </GlassCard>
              </motion.div>
            </div>
          </div>
        </ParallaxSection>
      </main>
      
      <Footer />
    </PageTransition>
  );
};

export default Contact;
