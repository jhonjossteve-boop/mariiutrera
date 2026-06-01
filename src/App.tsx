import { Switch, Route, Router as WouterRouter } from "wouter";
import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";

import Layout from "@/components/Layout";
import AgeVerification from "@/components/AgeVerification";

// Pages
import Home from "@/pages/Home";
import Pricing from "@/pages/Pricing";
import HowToPay from "@/pages/HowToPay";
import VipWhatsapp from "@/pages/VipWhatsapp";
import NotFound from "@/pages/not-found";

const queryClient = new QueryClient();

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/pricing" component={Pricing} />
        <Route path="/how-to-pay" component={HowToPay} />
        <Route path="/vip-whatsapp" component={VipWhatsapp} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  const [isAgeVerified, setIsAgeVerified] = useState(
    () => localStorage.getItem("mariiutrera_age_verified") === "true"
  );

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        {!isAgeVerified ? (
          <AgeVerification onVerify={() => setIsAgeVerified(true)} />
        ) : (
          <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
            <Router />
          </WouterRouter>
        )}
        <Toaster theme="dark" position="bottom-center" />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
