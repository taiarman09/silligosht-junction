import MenuItem from "./MenuItem";
import muttonsilli from "@/assets/muttonsilli.jpg";
import fishsilli from "@/assets/fishsilli.jpg";
import chickensilli from "@/assets/chickensilli.jpg";
import muttontikdi from "@/assets/muttontikdi.jpg";
import muttonsendwich from "@/assets/muttonsendwich.jpg";
import chickensendwich from "@/assets/chickensendwich.jpg";
import fishsendwich from "@/assets/fishsendwich.jpg";

const menuItems = [
  {
    image: muttonsilli,
    title: "Mutton Silli",
    titleHindi: "मटन सिल्ली",
    description: "ताज़ा मसालों में बनी लाजवाब मटन सिल्ली।",
    isPopular: true,
  },
  {
    image: fishsilli,
    title: "Fish Silli",
    titleHindi: "मछली सिल्ली",
    description: "सभी को पसंद आने वाली, ताज़ी मसालों में बनी मछली सिल्ली।",
    isPopular: false,
  },
  {
    image: chickensilli,
    title: "Chicken Silli",
    titleHindi: "चिकन सिल्ली",
    description: "ताज़ा मसालों में बनी चिकन सिल्ली।",
    isPopular: true,
  },
  {
    image: muttontikdi,
    title: "Mutton Tikdi",
    titleHindi: "मटन टीकड़ी",
    description: "मटन से भरी हुई ताज़ा मटन टिकड़ी। घर जैसा स्वाद!",
    isPopular: true,
  },
  {
    image: muttonsendwich,
    title: "Mutton Sandwich",
    titleHindi: "मटन सैंडविच",
    description: "ऐसा सैंडविच कहीं पर नहीं खाया होगा, यहाँ पर मिलेगा",
    isPopular: false,
  },
  {
    image: chickensendwich,
    title: "Chicken Sandwich",
    titleHindi: "चिकन सैंडविच",
    description: "एक बार चिकन सैंडविच खाओ, बार-बार खाते रह जाओगे",
    isPopular: true,
  },
  {
    image: fishsendwich,
    title: "Fish Sandwich",
    titleHindi: "मछली सैंडविच",
    description: "स्पेशल फिश सैंडविच। घर जैसा स्वाद!",
    isPopular: true,
  },
];

const Menu = () => {
  return (
    <section id="menu" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-primary font-semibold tracking-widest uppercase text-sm mb-4">
            हमारा Menu
          </span>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6">
            स्वादिष्ट <span className="text-gradient">पकवान</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            हमारी दुकान में आपको मिलेगा सबसे शुद्ध और ताज़ा खाना। हर दिन ताज़ा बनाया जाता है।
          </p>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item, index) => (
            <div
              key={item.title}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <MenuItem {...item} />
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
};

export default Menu;
