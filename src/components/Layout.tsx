import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Globe } from "lucide-react";
import TranslationWidget from "./TranslationWidget";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans">
      <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-background/80 backdrop-blur-md">
        <div className="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold tracking-[0.2em] text-primary">
            MARIIUTRERA
          </Link>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">Home</Link>
            <Link href="/pricing" className="text-sm font-medium hover:text-primary transition-colors">Pricing</Link>
            <Link href="/how-to-pay" className="text-sm font-medium hover:text-primary transition-colors">How to Pay</Link>
            <Link href="/vip-whatsapp" className="text-sm font-medium hover:text-primary transition-colors text-accent">VIP Inner Circle</Link>
            
            <TranslationWidget />
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden flex items-center gap-4">
            <TranslationWidget />
            <button 
              className="p-2 -mr-2 text-muted-foreground hover:text-foreground"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 w-full bg-card border-b border-border p-4 flex flex-col space-y-4 shadow-xl">
            <Link href="/" className="text-lg font-medium p-2 hover:bg-white/5 rounded-md">Home</Link>
            <Link href="/pricing" className="text-lg font-medium p-2 hover:bg-white/5 rounded-md">Pricing</Link>
            <Link href="/how-to-pay" className="text-lg font-medium p-2 hover:bg-white/5 rounded-md">How to Pay</Link>
            <Link href="/vip-whatsapp" className="text-lg font-medium p-2 hover:bg-white/5 rounded-md text-accent">VIP Inner Circle</Link>
          </div>
        )}
      </nav>

      <main className="flex-1 flex flex-col">
        {children}
      </main>

      <footer className="border-t border-white/5 py-12 bg-black mt-auto">
        <div className="container mx-auto px-4 md:px-6 flex flex-col items-center">
          <h2 className="text-2xl font-bold tracking-[0.2em] text-white/50 mb-4">MARIIUTRERA</h2>
          <p className="text-sm text-muted-foreground mb-8 text-center max-w-md">
            Premium exclusive content. All rights reserved. Do not distribute or copy.
          </p>
          <div className="flex space-x-6 text-muted-foreground">
            <Link href="/pricing" className="hover:text-primary text-sm transition-colors">Subscribe</Link>
            <Link href="/how-to-pay" className="hover:text-primary text-sm transition-colors">Payment Methods</Link>
            <a href="https://instagram.com/mariiutrera" target="_blank" rel="noreferrer" className="hover:text-primary text-sm transition-colors">Instagram</a>
          </div>
        </div>
      </footer>
    </div>
  );
}