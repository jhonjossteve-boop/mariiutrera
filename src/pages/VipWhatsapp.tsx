import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { Shield, Clock, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function VipWhatsapp() {
  return (
    <div className="py-24 relative overflow-hidden min-h-[90vh] flex flex-col items-center justify-center">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#25D366]/10 rounded-full blur-[100px] pointer-events-none z-0" />
      
      <div className="container relative z-10 px-4 md:px-6 max-w-3xl text-center space-y-12">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <div className="w-20 h-20 bg-[#25D366]/20 flex items-center justify-center rounded-full mx-auto border border-[#25D366]/30 mb-8">
            <FaWhatsapp className="w-10 h-10 text-[#25D366]" />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-serif text-white">You've Unlocked the Inner Circle</h1>
          
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            This is the ultimate experience. Direct, unfiltered access to me anytime. 
            Real conversations, custom content requests, and voice notes that are for your ears only.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="grid sm:grid-cols-3 gap-6 py-8"
        >
          <div className="bg-card/50 border border-white/5 p-6 space-y-4">
            <Shield className="w-8 h-8 text-primary mx-auto" />
            <h3 className="font-bold text-white tracking-widest uppercase text-sm">Discreet</h3>
            <p className="text-sm text-muted-foreground">100% private and confidential communication.</p>
          </div>
          <div className="bg-card/50 border border-white/5 p-6 space-y-4">
            <Clock className="w-8 h-8 text-primary mx-auto" />
            <h3 className="font-bold text-white tracking-widest uppercase text-sm">Priority</h3>
            <p className="text-sm text-muted-foreground">Fastest response times and priority requests.</p>
          </div>
          <div className="bg-card/50 border border-white/5 p-6 space-y-4">
            <Heart className="w-8 h-8 text-primary mx-auto" />
            <h3 className="font-bold text-white tracking-widest uppercase text-sm">Intimate</h3>
            <p className="text-sm text-muted-foreground">Deeply personal connection, voice notes, and more.</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="space-y-6"
        >
          <a 
            href="https://wa.me/1234567890" 
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-16 items-center justify-center bg-[#25D366] hover:bg-[#1DA851] text-white px-12 text-lg font-medium tracking-[0.1em] uppercase transition-all shadow-[0_0_30px_rgba(37,211,102,0.3)] hover:shadow-[0_0_50px_rgba(37,211,102,0.5)]"
          >
            <FaWhatsapp className="w-6 h-6 mr-3" /> Connect Now
          </a>
          
          <p className="text-sm text-muted-foreground/80 max-w-md mx-auto">
            Note: Button is only active after payment verification. 
            If you haven't verified yet, please contact via Instagram first.
          </p>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="pt-16 border-t border-white/10"
        >
          <h3 className="text-sm tracking-[0.2em] uppercase text-white/50 mb-8">What they say</h3>
          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div className="space-y-3">
              <div className="text-primary flex">{"★★★★★"}</div>
              <p className="text-gray-300 text-sm italic">"The voice notes alone are worth it. So personal and intense."</p>
              <p className="text-white/50 text-xs font-mono">— M.K.</p>
            </div>
            <div className="space-y-3">
              <div className="text-primary flex">{"★★★★★"}</div>
              <p className="text-gray-300 text-sm italic">"🔥🔥🔥 Best decision ever. She actually responds fast and is so sweet."</p>
              <p className="text-white/50 text-xs font-mono">— Anonymous</p>
            </div>
            <div className="space-y-3">
              <div className="text-primary flex">{"★★★★★"}</div>
              <p className="text-gray-300 text-sm italic">"The custom content requests are incredible. Worth every penny."</p>
              <p className="text-white/50 text-xs font-mono">— S.T.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}