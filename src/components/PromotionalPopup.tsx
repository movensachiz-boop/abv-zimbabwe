import { useState, useEffect } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import promoQuartz from "@/assets/promo-quartz-catalogue.png";
import promoMondayDeals from "@/assets/promo-monday-deals.png";
import promoSafetyMonday from "@/assets/promo-safety-monday.png";
import promoServicesNdebele from "@/assets/promo-services-ndebele.png";
import promoServicesShona from "@/assets/promo-services-shona.png";

const promotionalFliers = [
  {
    image: promoQuartz,
    alt: "ABV Quartz Catalogue - Partnership with Kianga",
  },
  {
    image: promoMondayDeals,
    alt: "Monday Deals - Tavhura Special Offers",
  },
  {
    image: promoSafetyMonday,
    alt: "Hello Monday - Safety Advice",
  },
  {
    image: promoServicesNdebele,
    alt: "Siyathengisa Lokusika - Our Cutting Services",
  },
  {
    image: promoServicesShona,
    alt: "Tinotengesa Nekucheka - Our Services",
  },
];

const PromotionalPopup = () => {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Show popup after 2 seconds
    const timer = setTimeout(() => {
      setOpen(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % promotionalFliers.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + promotionalFliers.length) % promotionalFliers.length);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-md p-0 gap-0 bg-background/95 backdrop-blur-sm">
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-2 top-2 z-50 rounded-full bg-background/80 hover:bg-background"
          onClick={() => setOpen(false)}
        >
          <X className="h-4 w-4" />
        </Button>

        <div className="relative">
          <img
            src={promotionalFliers[currentIndex].image}
            alt={promotionalFliers[currentIndex].alt}
            className="w-full h-auto max-h-[50vh] object-contain"
          />

          {promotionalFliers.length > 1 && (
            <>
              <Button
                variant="outline"
                size="icon"
                className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-background/90 hover:bg-background h-8 w-8"
                onClick={handlePrevious}
              >
                <ChevronLeft className="h-3 w-3" />
              </Button>

              <Button
                variant="outline"
                size="icon"
                className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-background/90 hover:bg-background h-8 w-8"
                onClick={handleNext}
              >
                <ChevronRight className="h-3 w-3" />
              </Button>

              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
                {promotionalFliers.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentIndex
                        ? "bg-primary w-8"
                        : "bg-muted-foreground/50"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PromotionalPopup;
