import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function AgeVerification({ onVerify }: { onVerify: () => void }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const isVerified = localStorage.getItem("mariiutrera_age_verified");
    if (!isVerified) {
      setIsVisible(true);
      // Prevent scrolling when modal is open
      document.body.style.overflow = 'hidden';
    } else {
      onVerify();
    }
  }, [onVerify]);

  const handleVerify = () => {
    localStorage.setItem("mariiutrera_age_verified", "true");
    setIsVisible(false);
    document.body.style.overflow = 'unset';
    onVerify();
  };

  const handleExit = () => {
    window.location.href = "https://www.google.com";
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-xl p-4"
        >
          <motion.div 
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
            className="max-w-md w-full text-center space-y-8"
          >
            <div className="space-y-4">
              <h1 className="text-3xl md:text-4xl font-bold tracking-[0.2em] text-white">MARIIUTRERA</h1>
              <div className="h-px w-24 bg-primary/50 mx-auto" />
            </div>
            
            <div className="space-y-6">
              <h2 className="text-xl md:text-2xl font-serif italic text-white/90">Adult Content Warning</h2>
              <p className="text-muted-foreground text-sm leading-relaxed">
                This website contains adult material that is only suitable for those 18 years or older. 
                By entering, you confirm you are of legal age in your jurisdiction.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button 
                onClick={handleVerify}
                className="bg-primary hover:bg-primary/90 text-white rounded-none px-8 py-6 text-sm tracking-[0.1em] uppercase"
              >
                I am 18+ — Enter
              </Button>
              <Button 
                variant="outline"
                onClick={handleExit}
                className="border-white/10 hover:bg-white/5 rounded-none px-8 py-6 text-sm tracking-[0.1em] uppercase"
              >
                Exit
              </Button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}