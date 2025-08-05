import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, MessageCircle } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "Services", href: "/services" },
    { name: "Project Files", href: "/project-files" },
    { name: "Quote Request", href: "/quote" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-12 h-12 flex items-center justify-center hover-scale">
              <img 
                src="/lovable-uploads/0f413cc8-4799-47ec-8c9b-79c0f7325e53.png" 
                alt="ABV Boards Logo" 
                className="w-12 h-12 object-contain transition-transform duration-300 hover:rotate-3"
              />
            </div>
            <div className="hidden sm:block animate-fade-in">
              <h1 className="font-bold text-xl text-brand-charcoal">ABV Boards</h1>
              <p className="text-xs text-muted-foreground -mt-1">Zimbabwe</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navigationItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className="story-link text-foreground hover:text-brand-red transition-all duration-300 font-medium transform hover:scale-105"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-3 animate-fade-in">
            <a href="tel:+263780555268">
              <Button variant="outline" size="sm" className="gap-2 hover-scale">
                <Phone className="w-4 h-4" />
                <span>Call</span>
              </Button>
            </a>
            <a href="https://wa.me/263780555268" target="_blank" rel="noopener noreferrer">
              <Button variant="whatsapp" size="sm" className="gap-2 hover-scale">
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-brand-charcoal hover:text-brand-red transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-border bg-white">
            <nav className="py-4 space-y-2">
              {navigationItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-2 text-foreground hover:text-brand-red hover:bg-muted transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="px-4 pt-4 space-y-2 border-t border-border">
                <a href="tel:+263780555268" className="block">
                  <Button variant="outline" className="w-full gap-2">
                    <Phone className="w-4 h-4" />
                    <span>Call Now</span>
                  </Button>
                </a>
                <a href="https://wa.me/263780555268" target="_blank" rel="noopener noreferrer" className="block">
                  <Button variant="whatsapp" className="w-full gap-2">
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp</span>
                  </Button>
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;