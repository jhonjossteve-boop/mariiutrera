import { Link } from "wouter";
import { motion } from "framer-motion";
import { Lock, Star, Camera, Video, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background gradient/pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background z-0" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 z-0 pointer-events-none mix-blend-overlay" />
        
        <div className="container relative z-10 px-4 md:px-6 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="space-y-6 max-w-3xl"
          >
            <h1 className="text-4xl md:text-7xl font-bold tracking-[0.25em] text-white uppercase drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
              Mariiutrera
            </h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-xl md:text-2xl font-serif italic text-primary/90"
            >
              Where Fantasy Meets Reality
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="w-16 h-px bg-primary/50 mx-auto my-8"
            />
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto"
            >
              Step into my private world. Exclusive content, intimate conversations, 
              and an unforgettable experience reserved only for my closest VIPs.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center pt-8"
            >
              <Link href="/pricing" className="inline-flex h-12 items-center justify-center bg-primary hover:bg-primary/90 text-white px-8 text-sm tracking-[0.1em] uppercase transition-all shadow-[0_0_20px_rgba(219,39,119,0.3)] hover:shadow-[0_0_30px_rgba(219,39,119,0.5)]">
                Subscribe Now
              </Link>
              <Button 
                variant="outline"
                className="h-12 border-white/10 hover:bg-white/5 px-8 text-sm tracking-[0.1em] uppercase rounded-none"
                onClick={() => {
                  document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                See My Content
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="border-y border-white/5 bg-black/40 backdrop-blur-sm py-8 relative z-10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/5">
            {[
              { icon: Heart, label: "Fans", value: "10K+" },
              { icon: Camera, label: "Photos", value: "500+" },
              { icon: Video, label: "Videos", value: "200+" },
              { icon: Star, label: "Private", value: "100%" }
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="flex flex-col items-center justify-center space-y-2 text-center"
              >
                <stat.icon className="w-5 h-5 text-primary/80" />
                <span className="text-2xl font-bold text-white tracking-wider">{stat.value}</span>
                <span className="text-xs text-muted-foreground uppercase tracking-widest">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 relative z-10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full md:w-1/2"
            >
              <div className="aspect-[4/5] relative group overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 z-10" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-20" />
                {/* Abstract placeholder instead of real person photo */}
             <div className="w-full h-full overflow-hidden">
  <img
    src="IMG_5633.JPG"
    alt="Profile"
    className="w-full h-full object-cover"
  />
</div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full md:w-1/2 space-y-6"
            >
              <h2 className="text-sm tracking-[0.2em] text-primary uppercase">The Inner Circle</h2>
              <h3 className="text-3xl md:text-4xl font-serif text-white">An Exclusive Experience</h3>
              <p className="text-muted-foreground leading-relaxed">
                Welcome to my sanctuary. I created this space for those who crave a deeper connection. 
                Here, I share my most intimate moments, unfiltered thoughts, and exclusive content that 
                you won't find anywhere else.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My content is a mix of high-end aesthetics, raw authenticity, and seductive elegance. 
                Join me, and let's explore our deepest desires together.
              </p>
              <div className="pt-6">
                <Link href="/pricing" className="text-primary hover:text-primary/80 uppercase tracking-widest text-sm border-b border-primary/30 pb-1 transition-all hover:border-primary">
                  Unlock Access
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 bg-black/20 border-t border-white/5 relative z-10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-serif text-white">Premium Content</h2>
            <p className="text-muted-foreground">Subscribe to unlock the full gallery</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {Array.from({ length: 12 }).map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 4) * 0.1, duration: 0.5 }}
                className="relative aspect-[3/4] group cursor-pointer overflow-hidden bg-card border border-white/5"
              >
                {/* Abstract blurred background */}
                <div 
                  className="absolute inset-0 bg-gradient-to-br from-secondary/40 to-primary/10 opacity-60 group-hover:scale-110 transition-transform duration-700"
                  style={{
                    filter: 'blur(20px)',
                  }}
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors duration-300 z-10 flex flex-col items-center justify-center">
                  <Lock className="w-8 h-8 text-white/50 mb-3 group-hover:text-primary transition-colors" />
                  <span className="text-xs uppercase tracking-widest text-white/70 font-medium">Unlock</span>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link href="/pricing" className="inline-flex h-14 items-center justify-center bg-white hover:bg-white/90 text-black px-10 text-sm tracking-[0.1em] uppercase transition-all">
              View All Content
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
