interface MenuItemProps {
  image: string;
  title: string;
  titleHindi: string;
  description: string;
  isPopular?: boolean;
}

const MenuItem = ({ image, title, titleHindi, description, isPopular }: MenuItemProps) => {
  return (
    <div className="group relative bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-lg transition-all duration-500 hover:-translate-y-2">
      {/* Popular Badge */}
      {isPopular && (
        <div className="absolute top-4 right-4 z-10 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
          Popular ⭐
        </div>
      )}

      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-display text-2xl font-bold text-foreground mb-1">
          {title}
        </h3>
        <p className="text-primary font-medium mb-3">{titleHindi}</p>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </div>

      {/* Decorative Element */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-warm-gradient transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
    </div>
  );
};

export default MenuItem;
