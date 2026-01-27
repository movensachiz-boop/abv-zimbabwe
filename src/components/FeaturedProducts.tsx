import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Eye } from "lucide-react";
import { Link } from "react-router-dom";

// Import product images
import whiteMelamine from "@/assets/white-melamine.jpg";
import blackMelamine from "@/assets/black-melamine.jpg";
import mdfBoards from "@/assets/mdf-boards.jpg";
import plywoodBoards from "@/assets/plywood-boards.jpg";
import chipboard from "@/assets/chipboard.jpg";
import flutedPanels from "@/assets/fluted-panels.jpg";

const featuredProducts = [
  {
    id: 1,
    name: "White Melamine Board",
    description: "Premium white melamine for modern interiors",
    price: "$45",
    size: "2440 x 1220mm",
    image: whiteMelamine,
    category: "Melamine"
  },
  {
    id: 2,
    name: "Black Melamine Board",
    description: "Sleek black finish for contemporary designs",
    price: "$48",
    size: "2440 x 1220mm",
    image: blackMelamine,
    category: "Melamine"
  },
  {
    id: 3,
    name: "MDF Board 18mm",
    description: "Smooth surface ideal for painting & veneering",
    price: "$35",
    size: "2440 x 1220mm",
    image: mdfBoards,
    category: "MDF"
  },
  {
    id: 4,
    name: "Plywood Board",
    description: "Strong & durable for structural applications",
    price: "$42",
    size: "2440 x 1220mm",
    image: plywoodBoards,
    category: "Plywood"
  },
  {
    id: 5,
    name: "Chipboard 16mm",
    description: "Cost-effective solution for furniture",
    price: "$28",
    size: "2440 x 1220mm",
    image: chipboard,
    category: "Chipboard"
  },
  {
    id: 6,
    name: "Fluted Wall Panels",
    description: "Textured panels for feature walls",
    price: "$65",
    size: "2400 x 300mm",
    image: flutedPanels,
    category: "Decorative"
  }
];

const FeaturedProducts = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Featured Products
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover our most popular boards and building materials. Quality products at competitive prices.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProducts.map((product, index) => (
            <Card 
              key={product.id} 
              className="group overflow-hidden hover:shadow-xl transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Product Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-brand-red text-white text-xs font-semibold px-2 py-1 rounded">
                    {product.category}
                  </span>
                </div>
              </div>

              <CardContent className="p-5">
                {/* Product Info */}
                <h3 className="font-semibold text-lg text-foreground mb-1 group-hover:text-brand-red transition-colors">
                  {product.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-2">
                  {product.description}
                </p>
                <p className="text-xs text-muted-foreground mb-3">
                  Size: {product.size}
                </p>

                {/* Price & Actions */}
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-brand-red">
                    {product.price}
                  </span>
                  <div className="flex gap-2">
                    <Link to="/products">
                      <Button variant="outline" size="sm" className="gap-1 hover-scale">
                        <Eye className="w-4 h-4" />
                        View
                      </Button>
                    </Link>
                    <a 
                      href={`https://wa.me/263780555268?text=Hi%20ABV%20Boards%2C%20I'm%20interested%20in%20${encodeURIComponent(product.name)}.%20Please%20send%20me%20more%20details.`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="hero" size="sm" className="gap-1 hover-scale">
                        <ShoppingCart className="w-4 h-4" />
                        Order
                      </Button>
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-10 animate-fade-in" style={{ animationDelay: '600ms' }}>
          <Link to="/products">
            <Button variant="charcoal" size="lg" className="gap-2 px-8 hover-scale">
              View All Products
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
