import { useEffect } from "react";
import { Globe } from "lucide-react";

export default function TranslationWidget() {
  useEffect(() => {
    // Check if script is already added
    if (document.getElementById("google-translate-script")) return;

    // Define the init function globally
    (window as any).googleTranslateElementInit = () => {
      new (window as any).google.translate.TranslateElement(
        { pageLanguage: "en", autoDisplay: true },
        "google_translate_element"
      );
    };

    const script = document.createElement("script");
    script.id = "google-translate-script";
    script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    document.head.appendChild(script);
  }, []);

  return (
    <div className="relative flex items-center group">
      <Globe className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors cursor-pointer" />
      <div 
        id="google_translate_element" 
        className="absolute top-full right-0 mt-2 opacity-0 group-hover:opacity-100 transition-opacity z-50 overflow-hidden rounded-md shadow-lg"
        style={{ minWidth: "160px" }}
      />
      {/* Hide the top banner and default styling google adds */}
      <style dangerouslySetInnerHTML={{__html: `
        .goog-te-banner-frame { display: none !important; }
        .goog-te-gadget { font-family: inherit !important; }
        .goog-te-gadget-simple { background-color: hsl(var(--card)) !important; border: 1px solid hsl(var(--border)) !important; border-radius: 0.375rem !important; padding: 0.5rem !important; }
        .goog-te-gadget-simple span { color: hsl(var(--foreground)) !important; }
        .goog-te-gadget-simple img { display: none !important; }
        body { top: 0 !important; }
      `}} />
    </div>
  );
}