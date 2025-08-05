import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-brand-charcoal text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-brand-red to-brand-red-dark rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">ABV</span>
              </div>
              <div>
                <h3 className="font-bold text-xl">ABV Boards</h3>
                <p className="text-sm text-white/70">Zimbabwe</p>
              </div>
            </div>
            <p className="text-white/80 mb-4">
              "Cutting Through with Precision and Style"
            </p>
            <p className="text-white/70 text-sm">
              Your trusted partner for premium boards, precision cutting, and complete hardware solutions in Zimbabwe.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/" className="text-white/70 hover:text-brand-red transition-colors">Home</a></li>
              <li><a href="/products" className="text-white/70 hover:text-brand-red transition-colors">Our Products</a></li>
              <li><a href="/services" className="text-white/70 hover:text-brand-red transition-colors">Cutting Services</a></li>
              <li><a href="/project-files" className="text-white/70 hover:text-brand-red transition-colors">Project Files</a></li>
              <li><a href="/quote" className="text-white/70 hover:text-brand-red transition-colors">Request Quote</a></li>
              <li><a href="/contact" className="text-white/70 hover:text-brand-red transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Information</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-brand-red mt-0.5" />
                <div>
                  <p className="text-white/80">Gweru, Zimbabwe</p>
                  <p className="text-white/60 text-sm">Industrial Area</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-brand-red" />
                <p className="text-white/80">+263 123 456 789</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-brand-red" />
                <p className="text-white/80">info@abvboards.co.zw</p>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-brand-red mt-0.5" />
                <div>
                  <p className="text-white/80">Mon - Fri: 7:30 AM - 5:00 PM</p>
                  <p className="text-white/60 text-sm">Sat: 8:00 AM - 1:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Connect With Us */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Connect With Us</h4>
            <div className="space-y-4">
              <p className="text-white/70 text-sm">
                Follow us for updates on new stock, cutting tips, and design inspiration.
              </p>
              <div className="flex space-x-3">
                <a href="https://facebook.com/abvboards" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="icon" className="border-white/20 text-white hover:bg-white hover:text-brand-charcoal">
                    <Facebook className="w-4 h-4" />
                  </Button>
                </a>
                <a href="https://instagram.com/abvboards" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="icon" className="border-white/20 text-white hover:bg-white hover:text-brand-charcoal">
                    <Instagram className="w-4 h-4" />
                  </Button>
                </a>
                <a href="https://wa.me/263780555268" target="_blank" rel="noopener noreferrer">
                  <Button variant="whatsapp" size="icon">
                    <MessageCircle className="w-4 h-4" />
                  </Button>
                </a>
              </div>
              <div className="pt-4">
                <h5 className="font-medium mb-2">Get Updates</h5>
                <div className="flex space-x-2">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="flex-1 px-3 py-2 bg-white/10 border border-white/20 rounded-md text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-brand-red"
                  />
                  <Button variant="hero" size="sm">Subscribe</Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-white/60 text-sm">
            © 2024 ABV Boards Zimbabwe. All rights reserved. | 
            <span className="text-white/40"> Designed for precision and style</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;