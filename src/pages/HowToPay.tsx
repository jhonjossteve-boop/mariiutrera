import { motion } from "framer-motion";
import { Copy, AlertCircle, Send, Check } from "lucide-react";
import { SiBitcoin, SiEthereum } from "react-icons/si";
import { toast } from "sonner";

export default function HowToPay() {
  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast.success(`${label} copied to clipboard`);
  };

  return (
    <div className="py-24 relative">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <div className="text-center mb-16 space-y-4">
          <h1 className="text-3xl md:text-4xl font-serif text-white">Payment Methods</h1>
          <p className="text-muted-foreground text-lg">
            Choose your preferred method. All payments are verified manually.
          </p>
        </div>

        <div className="space-y-8">
          {/* CashApp */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-card border border-white/10 p-6 md:p-8"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-[#00D632]/10 flex items-center justify-center rounded-full">
                <span className="text-[#00D632] font-bold text-xl">$</span>
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">CashApp</h2>
                <p className="text-sm text-muted-foreground">Fast & Secure</p>
              </div>
            </div>
            
            <div className="bg-black/50 border border-white/5 p-4 flex items-center justify-between mb-6">
              <code className="text-primary font-mono text-lg">$mariiutrera</code>
              <button 
                onClick={() => copyToClipboard("$mariiutrera", "Cashtag")}
                className="text-muted-foreground hover:text-white transition-colors"
              >
                <Copy className="w-5 h-5" />
              </button>
            </div>

            <ol className="space-y-3 text-sm text-gray-300 list-decimal pl-5 marker:text-primary">
              <li>Open CashApp on your mobile device</li>
              <li>Send the exact amount for your chosen tier</li>
              <li>Add note: "BASIC", "VIP", or "WHATSAPP"</li>
              <li>Take a screenshot of the completed transaction</li>
            </ol>
          </motion.div>

          {/* PayPal */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-card border border-white/10 p-6 md:p-8 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 bg-destructive/20 text-destructive text-xs font-bold uppercase tracking-wider px-4 py-2 flex items-center gap-2">
              <AlertCircle className="w-4 h-4" /> Crucial Step
            </div>

            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-[#00457C]/20 flex items-center justify-center rounded-full">
                <span className="text-[#0079C1] font-bold font-serif text-xl">P</span>
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">PayPal</h2>
                <p className="text-sm text-muted-foreground">Friends & Family ONLY</p>
              </div>
            </div>
            
            <div className="bg-black/50 border border-white/5 p-4 flex items-center justify-between mb-6">
              <code className="text-primary font-mono text-lg">mariiutrera@gmail.com</code>
              <button 
                onClick={() => copyToClipboard("mariiutrera@gmail.com", "PayPal Email")}
                className="text-muted-foreground hover:text-white transition-colors"
              >
                <Copy className="w-5 h-5" />
              </button>
            </div>

            <div className="bg-destructive/10 border border-destructive/20 p-4 mb-6">
              <p className="text-sm text-destructive-foreground">
                <strong>WARNING:</strong> You MUST select "Friends & Family" when sending. 
                If you send as "Goods & Services", the payment will be refunded and access denied.
              </p>
            </div>

            <ol className="space-y-3 text-sm text-gray-300 list-decimal pl-5 marker:text-primary">
              <li>Log into PayPal and select "Send Money"</li>
              <li>Enter the email address above</li>
              <li>Enter the exact amount and select "Friends & Family"</li>
              <li>Take a screenshot of the receipt</li>
            </ol>
          </motion.div>

          {/* Crypto */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="grid md:grid-cols-2 gap-6"
          >
            {/* BTC */}
            <div className="bg-card border border-white/10 p-6">
              <div className="flex items-center gap-3 mb-6">
                <SiBitcoin className="w-8 h-8 text-[#F7931A]" />
                <h2 className="text-lg font-bold text-white">Bitcoin (BTC)</h2>
              </div>
              
              <div className="aspect-square bg-white w-32 mx-auto mb-6 p-2 flex items-center justify-center">
                {/* QR Code Placeholder */}
                <div className="w-full h-full bg-black flex items-center justify-center text-white text-xs font-mono text-center">
                  BTC QR<br/>PLACEHOLDER
                </div>
              </div>

              <div className="bg-black/50 border border-white/5 p-3 flex flex-col gap-2 relative group">
                <code className="text-xs text-muted-foreground font-mono break-all truncate">
                  1A2B3C4D5E6F7G8H9I0J1K2L3M4N5O6P7Q
                </code>
                <button 
                  onClick={() => copyToClipboard("1A2B3C4D5E6F7G8H9I0J1K2L3M4N5O6P7Q", "BTC Address")}
                  className="w-full py-2 bg-white/5 hover:bg-white/10 text-xs uppercase tracking-wider transition-colors"
                >
                  Copy Address
                </button>
              </div>
            </div>

            {/* ETH */}
            <div className="bg-card border border-white/10 p-6">
              <div className="flex items-center gap-3 mb-6">
                <SiEthereum className="w-8 h-8 text-[#627EEA]" />
                <h2 className="text-lg font-bold text-white">Ethereum (ETH)</h2>
              </div>
              
              <div className="aspect-square bg-white w-32 mx-auto mb-6 p-2 flex items-center justify-center">
                {/* QR Code Placeholder */}
                <div className="w-full h-full bg-black flex items-center justify-center text-white text-xs font-mono text-center">
                  ETH QR<br/>PLACEHOLDER
                </div>
              </div>

              <div className="bg-black/50 border border-white/5 p-3 flex flex-col gap-2">
                <code className="text-xs text-muted-foreground font-mono break-all truncate">
                  0xAbC1234567890dEf1234567890AbCdEf12345678
                </code>
                <button 
                  onClick={() => copyToClipboard("0xAbC1234567890dEf1234567890AbCdEf12345678", "ETH Address")}
                  className="w-full py-2 bg-white/5 hover:bg-white/10 text-xs uppercase tracking-wider transition-colors"
                >
                  Copy Address
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Verification Step */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-12 border border-primary/30 bg-primary/5 p-8 text-center space-y-6"
        >
          <div className="w-16 h-16 bg-primary/20 flex items-center justify-center rounded-full mx-auto">
            <Send className="w-8 h-8 text-primary" />
          </div>
          
          <div className="space-y-2">
            <h3 className="text-2xl font-serif text-white">Final Step: Send Proof</h3>
            <p className="text-gray-300">
              After sending payment, you must send a screenshot of the receipt to verify.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <a 
              href="https://instagram.com/mariiutrera" 
              target="_blank" 
              rel="noreferrer"
              className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-medium tracking-wide transition-colors"
            >
              DM on Instagram
            </a>
            <a 
              href="mailto:mariiutrera@proton.me"
              className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-medium tracking-wide transition-colors"
            >
              Email mariiutrera@proton.me
            </a>
          </div>

          <p className="text-sm text-muted-foreground pt-4">
            Response within 24 hours. Access granted within 48 hours.
          </p>
        </motion.div>
      </div>
    </div>
  );
}