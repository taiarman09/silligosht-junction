import { Heart, Clock, Award, Users } from "lucide-react";

const features = [
  {
    icon: Heart,
    title: "प्यार से बना",
    description: "हर dish प्यार और dedication से बनाई जाती है",
  },
  {
    icon: Clock,
    title: "रोज़ ताज़ा",
    description: "हर दिन ताज़ा मसाले और ingredients का उपयोग",
  },
  {
    icon: Award,
    title: "शुद्ध गुणवत्ता",
    description: "100% शुद्ध और हलाल मीट की guarantee",
  },
  {
    icon: Users,
    title: "खुश ग्राहक",
    description: "हज़ारों संतुष्ट ग्राहकों का भरोसा",
  },
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-muted/50 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-block text-primary font-semibold tracking-widest uppercase text-sm mb-4">
              हमारे बारे में
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Aasim Bhai की <br />
              <span className="text-gradient">Silligost</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Silligost एक छोटी-सी लेकिन दिल से बनी दुकान है, जहाँ आपको मिलता है बिल्कुल घर जैसा शुद्ध और लज़ीज़ स्वाद। यहाँ हर एक डिश Aasim Bhai खुद अपने हाथों से बनाते हैं, ताकि स्वाद और गुणवत्ता में कोई कमी न रहे। हमारा मकसद सिर्फ खाना परोसना नहीं, बल्कि आपको ऐसा स्वाद देना है जो आपको बार-बार यहाँ खींच लाए। चाहे मटन हो या मछली हों या चिकन – हर प्लेट में मिलेगा वही पुराना authentic स्वाद, जो दिल और ज़ुबान दोनों को खुश कर दे।

            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              मटन हो या मछली हो या चिकन - हर चीज़ में वही पुराना authentic स्वाद जो आपको बार-बार बुलाएगा।


            </p>

            {/* Quote */}
            <div className="border-l-4 border-primary pl-6 py-2">
              <p className="text-foreground font-display text-xl italic">
                "खाने का असली मज़ा तभी है जब वो दिल से बना हो"
              </p>
              <p className="text-primary font-semibold mt-2">— Aasim Bhai</p>
            </div>
          </div>

          {/* Right - Features Grid */}
          <div className="grid grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="group bg-card p-6 rounded-2xl shadow-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <feature.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="font-display text-lg font-bold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
