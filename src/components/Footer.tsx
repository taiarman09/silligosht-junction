import { Heart, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-charcoal text-secondary-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-display text-3xl font-bold text-primary mb-4">
              Silligost
            </h3>
            <p className="text-secondary-foreground/70 leading-relaxed">
              स्वाद जो दिल जीत ले। Aasim Bhai की छोटी सी दुकान, बड़ा स्वाद।
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-xl font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#menu" className="text-secondary-foreground/70 hover:text-primary transition-colors">
                  Menu
                </a>
              </li>
              <li>
                <a href="#about" className="text-secondary-foreground/70 hover:text-primary transition-colors">
                  हमारे बारे में
                </a>
              </li>
              <li>
                <a href="#contact" className="text-secondary-foreground/70 hover:text-primary transition-colors">
                  संपर्क करें
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-xl font-bold mb-4">संपर्क</h4>
            <div className="space-y-3">
              <a
                href="tel:+9195123 16169"
                className="flex items-center gap-3 text-secondary-foreground/70 hover:text-primary transition-colors"
              >
                <Phone className="w-5 h-5" />
                +91 95123 16169
              </a>
              <div className="flex items-start gap-3 text-secondary-foreground/70">
                <MapPin className="w-5 h-5 mt-0.5" />
                <span>Silligost Junction, Kohinoor Flat, Dukhi Restorent Near, Shahpur, Ahmedabad<br />आपके शहर में</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-secondary-foreground/10 pt-8 text-center">
          <p className="text-secondary-foreground/50 text-sm flex items-center justify-center gap-2">
            Made with <Heart className="w-4 h-4 text-primary fill-primary" /> by Aasim Bhai
          </p>
          <p className="text-secondary-foreground/30 text-xs mt-2">
            © 2024 Silligost. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
