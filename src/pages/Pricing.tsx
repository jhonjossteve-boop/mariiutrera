import { Link } from "wouter";
import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Pricing() {
  const tiers = [
    {
      name: "Basic Fan",
      price: "$15",
      period: "/month",
      description: "A taste of the exclusive content.",
      features: [
        "Daily exclusive photos",
        "Behind-the-scenes content",
        "Access to subscriber chat",
        "50+ photos/week",
        "Cancel anytime"
      ],
      buttonText: "Subscribe Basic",
      popular: false
    },
    {
      name: "VIP Access",
      price: "$35",
      period: "/month",
      description: "The complete premium experience.",
      features: [
        "Everything in Basic",
        "HD Videos (weekly drops)",
        "1-on-1 DM access",
        "Exclusive live streams",
        "Priority customer support",
        "200+ content pieces/month"
      ],
      buttonText: "Join VIP",
      popular: true
    },
    {
      name: "Private WhatsApp",
      price: "$75",
      period: "/month",
      description: "The ultimate direct connection.",
      features: [
        "Everything in VIP",
        "Direct WhatsApp number access",
        "Real-time 1-on-1 conversation",
        "Custom content requests",
        "Voice messages",
        "Completely private & discreet"
      ],
      buttonText: "Unlock Inner Circle",
      popular: false
    }
  ];

  return (
    <div className="py-24 relative min-h-[90vh]">
      {/* Background effects */}
      <div className="absolute top-0 inset-x-0 h-[500px] bg-gradient-to-b from-primary/5 to-transparent z-0 pointer-events-none" />
      
      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <h1 className="text-4xl md:text-5xl font-serif text-white">Choose Your Level</h1>
          <p className="text-muted-foreground">
            Select the tier that best fits your desires. Payment is secure, discreet, and private.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className={`relative flex flex-col bg-card border ${
                tier.popular 
                  ? 'border-primary shadow-[0_0_30px_rgba(219,39,119,0.15)]' 
                  : 'border-white/10'
              } p-8 hover:-translate-y-2 transition-transform duration-300`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold uppercase tracking-widest py-1 px-4 flex items-center gap-1">
                  <Star className="w-3 h-3" /> Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-xl font-bold tracking-widest text-white uppercase mb-2">{tier.name}</h3>
                <p className="text-muted-foreground text-sm h-10">{tier.description}</p>
                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-4xl font-serif text-white">{tier.price}</span>
                  <span className="text-muted-foreground">{tier.period}</span>
                </div>
              </div>

              <div className="flex-1 space-y-4 mb-8">
                {tier.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>

              <Link 
                href="/how-to-pay" 
                className={`w-full flex items-center justify-center h-12 text-sm tracking-[0.1em] uppercase transition-all ${
                  tier.popular 
                    ? 'bg-primary hover:bg-primary/90 text-white' 
                    : 'bg-white/5 hover:bg-white/10 text-white border border-white/10'
                }`}
              >
                {tier.buttonText}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}