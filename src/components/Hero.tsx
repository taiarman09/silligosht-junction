import heroImage from "@/assets/hero-mutton.jpg";
import { Phone, MapPin } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Silligost delicious mutton curry"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/70 via-charcoal/50 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="animate-fade-in-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full px-6 py-2 mb-8">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-primary-foreground font-medium text-sm tracking-wide">
              Since Years • Authentic Taste
            </span>
          </div>

          {/* Main Title */}
          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-bold text-primary-foreground mb-4 tracking-tight">
            Silligost
          </h1>

          {/* Tagline */}
          <p className="text-2xl md:text-3xl text-primary-foreground/90 font-display italic mb-4">
            स्वाद जो दिल जीत ले
          </p>
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-12">
            मटन • फिश • चिकन  • और भी बहुत कुछ
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+9195123 16169"
              className="group inline-flex items-center gap-3 bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-glow hover:shadow-lg hover:scale-105"
            >
              <Phone className="w-5 h-5 group-hover:animate-pulse" />
              अभी Call करें
            </a>
            <a
              href="#menu"
              className="inline-flex items-center gap-3 bg-secondary-foreground/10 backdrop-blur-sm border border-secondary-foreground/20 text-primary-foreground px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-secondary-foreground/20"
            >
              Menu देखें
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-primary-foreground/50 rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
