import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Snowfall from "react-snowfall";

const queryClient = new QueryClient();

const isWinter =
  new Date().getMonth() === 11 ||
  new Date().getMonth() === 0 ||
  new Date().getMonth() === 1;

const App = () => {
  const [showSnowfall, setShowSnowfall] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSnowfall(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
  <QueryClientProvider client={queryClient}>
    {isWinter && showSnowfall && (
      <Snowfall
        style={{
          position: "fixed",
          width: "100vw",
          height: "100vh",
          zIndex: 99999,
        }}
      />
    )}
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
  );
};
export default App;
