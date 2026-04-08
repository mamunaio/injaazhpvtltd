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
import { Calendar, Clock, ArrowRight, Sparkles, User } from "lucide-react";

const posts = [
  { id: 1, slug: "future-of-web-development-2024", title: "The Future of Web Development: Trends to Watch in 2024", excerpt: "Explore the latest technologies and frameworks shaping the future of web development.", image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=500&fit=crop", category: "Development", author: "Omar Khalil", date: "Dec 15, 2024", readTime: "5 min read" },
  { id: 2, slug: "design-systems-guide", title: "Design Systems: Building Consistent User Experiences", excerpt: "Learn how to create and maintain a design system that scales with your organization.", image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=500&fit=crop", category: "Design", author: "Sara Mohammed", date: "Dec 12, 2024", readTime: "8 min read" },
  { id: 3, slug: "data-driven-marketing-roi", title: "Maximizing ROI with Data-Driven Marketing", excerpt: "Discover strategies to optimize your marketing campaigns using analytics and insights.", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop", category: "Marketing", author: "Layla Ibrahim", date: "Dec 10, 2024", readTime: "6 min read" },
  { id: 4, slug: "mobile-first-design-2024", title: "Mobile-First Design: Best Practices for 2024", excerpt: "Essential guidelines for creating exceptional mobile experiences in today's digital landscape.", image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=500&fit=crop", category: "Design", author: "Fatima Al-Sayed", date: "Dec 8, 2024", readTime: "7 min read" },
  { id: 5, slug: "ai-digital-marketing", title: "AI in Digital Marketing: Opportunities and Challenges", excerpt: "How artificial intelligence is transforming the way we approach digital marketing.", image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop", category: "AI & Tech", author: "Ahmed Al-Hassan", date: "Dec 5, 2024", readTime: "10 min read" },
  { id: 6, slug: "accessible-websites-guide", title: "Building Accessible Websites: A Complete Guide", excerpt: "Ensure your website is inclusive and accessible to all users with these essential tips.", image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=800&h=500&fit=crop", category: "Development", author: "Yusuf Rahman", date: "Dec 1, 2024", readTime: "9 min read" },
];

const categories = ["All", "Development", "Design", "Marketing", "AI & Tech"];

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const filteredPosts = activeCategory === "All" ? posts : posts.filter(p => p.category === activeCategory);

  return (
    <PageTransition>
      <Helmet>
        <title>Blog | Injaazh Digital Agency</title>
        <meta name="description" content="Insights, tips, and trends from the Injaazh team on web development, design, digital marketing, and technology." />
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
                <span className="text-sm font-medium text-primary tracking-wide">Our Blog</span>
              </motion.div>
              
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-8 text-foreground leading-[0.95]">
                Insights &
                <br />
                <span className="gradient-text">Inspiration</span>
                <span className="text-primary">.</span>
              </h1>
              
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Stay updated with the latest trends, tips, and insights from our team of digital experts.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Category Filter */}
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

        {/* Blog Grid */}
        <section className="py-12 pb-28">
          <div className="container mx-auto px-6">
            <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
              <AnimatePresence mode="popLayout">
                {filteredPosts.map((post, index) => (
                  <motion.article
                    key={post.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9, y: 30 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4, delay: index * 0.06 }}
                  >
                    <Link to={`/blog/${post.slug}`}>
                      <GlassCard className="overflow-hidden group cursor-pointer h-full hover:border-primary/40 transition-all duration-500" enableTilt>
                        <div className="relative overflow-hidden aspect-[16/10]">
                          <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                          <div className="absolute top-4 left-4">
                            <span className="px-3.5 py-1.5 bg-primary/90 backdrop-blur-md text-primary-foreground text-xs font-semibold rounded-full shadow-lg">{post.category}</span>
                          </div>
                        </div>
                        <div className="p-6">
                          <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                            <span className="flex items-center gap-1.5"><User className="w-3.5 h-3.5" />{post.author}</span>
                            <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" />{post.date}</span>
                            <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" />{post.readTime}</span>
                          </div>
                          <h3 className="text-xl font-bold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors">{post.title}</h3>
                          <p className="text-muted-foreground text-sm line-clamp-2 leading-relaxed">{post.excerpt}</p>
                          <div className="mt-5 flex items-center text-primary text-sm font-semibold group-hover:gap-3 gap-1 transition-all duration-300">
                            Read More <ArrowRight className="w-4 h-4" />
                          </div>
                        </div>
                      </GlassCard>
                    </Link>
                  </motion.article>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-accent/5 to-background" />
          <FloatingOrb className="-bottom-40 -left-40" color="primary" size="lg" />
          
          <div className="container mx-auto px-6 relative z-10">
            <GlassCard className="p-12 lg:p-20 text-center relative overflow-hidden" enableTilt>
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5" />
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative z-10">
                <h2 className="text-4xl md:text-6xl font-extrabold text-foreground mb-6">Stay <span className="gradient-text">Updated</span></h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10">
                  Subscribe to our newsletter and never miss an update on the latest digital trends.
                </p>
                <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-6 py-3.5 rounded-full bg-background/50 backdrop-blur-md border border-border/50 focus:outline-none focus:ring-2 focus:ring-primary text-foreground placeholder:text-muted-foreground transition-all"
                  />
                  <MagneticButton className="whitespace-nowrap">
                    Subscribe
                  </MagneticButton>
                </form>
              </motion.div>
            </GlassCard>
          </div>
        </section>
      </main>
      
      <Footer />
    </PageTransition>
  );
};

export default Blog;
