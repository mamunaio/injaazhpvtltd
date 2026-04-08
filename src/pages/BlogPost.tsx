import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Link, useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import { GlassCard } from "@/components/ui/glass-card";
import { FloatingOrb } from "@/components/ui/animated-gradient";
import { Calendar, Clock, ArrowLeft, ArrowRight, User } from "lucide-react";
import { MagneticButton } from "@/components/ui/magnetic-button";
import DOMPurify from "dompurify";

const BlogPost = () => {
  const { slug } = useParams();

  // Static mock data
  const post = {
    title: "The Future of Web Development: Trends to Watch in 2024",
    content: `
      <p>The web development landscape continues to evolve at a rapid pace. As we look ahead to 2024, several key trends are shaping how we build and interact with web applications.</p>
      <h2>1. AI-Powered Development</h2>
      <p>Artificial intelligence is revolutionizing how developers write code. From intelligent code completion to automated testing, AI tools are becoming indispensable in modern development workflows.</p>
      <h2>2. Edge Computing</h2>
      <p>Moving computation closer to users reduces latency and improves performance. Edge functions and distributed architectures are becoming the norm for high-performance applications.</p>
      <h2>3. WebAssembly Adoption</h2>
      <p>WebAssembly continues to gain traction, enabling near-native performance in the browser for computationally intensive tasks.</p>
      <h2>4. Enhanced Developer Experience</h2>
      <p>Tools and frameworks are increasingly focused on developer experience, with faster build times, better debugging, and more intuitive APIs.</p>
    `,
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&h=600&fit=crop",
    category: "Development",
    author: "Omar Khalil",
    authorImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    date: "Dec 15, 2024",
    readTime: "5 min read",
  };

  const sanitizedContent = DOMPurify.sanitize(post.content);

  return (
    <PageTransition>
      <Helmet>
        <title>{post.title} | Injaazh Blog</title>
        <meta name="description" content={post.title} />
      </Helmet>
      
      <Navbar />
      
      <main className="pt-20 overflow-hidden">
        <FloatingOrb className="top-0 -right-40" color="primary" size="lg" />
        <FloatingOrb className="bottom-1/4 -left-40" color="accent" size="md" delay={5} />
        
        <article className="py-16">
          <div className="container mx-auto px-6 max-w-4xl">
            <Link to="/blog">
              <motion.button whileHover={{ x: -4 }} className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-10 text-sm font-medium">
                <ArrowLeft className="w-4 h-4" /> Back to Blog
              </motion.button>
            </Link>
            
            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <motion.span initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }} className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full border border-primary/20 backdrop-blur-sm">
                {post.category}
              </motion.span>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mt-6 mb-8 text-foreground leading-tight">{post.title}</h1>
              
              <div className="flex items-center gap-5 mb-10">
                <img src={post.authorImage} alt={post.author} className="w-14 h-14 rounded-full ring-2 ring-primary/20" />
                <div>
                  <p className="font-semibold text-foreground">{post.author}</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1">
                    <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" />{post.date}</span>
                    <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" />{post.readTime}</span>
                  </div>
                </div>
              </div>
              
              <GlassCard className="overflow-hidden mb-12" enableTilt={false}>
                <img src={post.image} alt={post.title} className="w-full aspect-video object-cover" />
              </GlassCard>
              
              <div 
                className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-bold prose-headings:text-foreground prose-p:text-muted-foreground prose-p:leading-relaxed prose-a:text-primary"
                dangerouslySetInnerHTML={{ __html: sanitizedContent }}
              />

              {/* Related CTA */}
              <GlassCard className="p-8 mt-16 text-center relative overflow-hidden" enableTilt>
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5" />
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-foreground mb-3">Enjoyed this article?</h3>
                  <p className="text-muted-foreground mb-6">Let's discuss how we can bring these ideas to your project.</p>
                  <Link to="/contact">
                    <MagneticButton>
                      Get in Touch <ArrowRight className="w-4 h-4 ml-2" />
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

export default BlogPost;
