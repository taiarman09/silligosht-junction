import { Phone, MapPin, Clock, MessageCircle } from "lucide-react";

const Contact = () => {
  const phoneNumber = "+91 95123 16169"; // Replace with actual number

  return (
    <section id="contact" className="py-24 bg-secondary text-secondary-foreground relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-2 bg-warm-gradient" />
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block text-primary font-semibold tracking-widest uppercase text-sm mb-4">
            संपर्क करें
          </span>
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-6">
            We Accept All <span className="text-primary">Party</span> Orders
          </h2>
          <p className="text-secondary-foreground/80 text-lg max-w-2xl mx-auto">
            स्वादिष्ट खाने के लिए अभी call करें या हमारी दुकान पर आएं!
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
          {/* Phone */}
          <a
            href={`tel:${phoneNumber.replace(/\s/g, '')}`}
            className="group bg-secondary-foreground/10 backdrop-blur-sm border border-secondary-foreground/20 rounded-2xl p-8 text-center hover:bg-primary hover:border-primary transition-all duration-300 hover:-translate-y-2"
          >
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary-foreground/20 transition-colors">
              <Phone className="w-8 h-8 text-primary group-hover:text-secondary-foreground" />
            </div>
            <h3 className="font-display text-xl font-bold mb-2">Call करें</h3>
            <p className="text-2xl font-bold text-primary group-hover:text-secondary-foreground">
              {phoneNumber}
            </p>
          </a>

          {/* WhatsApp */}
          <a
            href={`https://wa.me/${phoneNumber.replace(/\s/g, '').replace('+', '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-secondary-foreground/10 backdrop-blur-sm border border-secondary-foreground/20 rounded-2xl p-8 text-center hover:bg-primary hover:border-primary transition-all duration-300 hover:-translate-y-2"
          >
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary-foreground/20 transition-colors">
              <MessageCircle className="w-8 h-8 text-primary group-hover:text-secondary-foreground" />
            </div>
            <h3 className="font-display text-xl font-bold mb-2">WhatsApp</h3>
            <p className="text-lg group-hover:text-secondary-foreground">
              Message करें
            </p>
          </a>

          {/* Timing */}
          <div className="bg-secondary-foreground/10 backdrop-blur-sm border border-secondary-foreground/20 rounded-2xl p-8 text-center">
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-display text-xl font-bold mb-2">समय</h3>
            <p className="text-lg">
              साम 04:00 - रात 11:00
            </p>
            <p className="text-sm text-secondary-foreground/60 mt-1">रोज़ खुला</p>
          </div>
        </div>

        {/* Big CTA */}
        <div className="text-center">
          <a
            href={`tel:${phoneNumber.replace(/\s/g, '')}`}
            className="group inline-flex items-center gap-4 bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-6 rounded-full font-bold text-xl transition-all duration-300 shadow-glow hover:shadow-lg hover:scale-105"
          >
            <Phone className="w-7 h-7 group-hover:animate-pulse" />
            अभी Call करें: {phoneNumber}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
