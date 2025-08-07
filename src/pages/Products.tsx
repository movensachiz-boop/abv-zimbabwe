import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";
import whiteMelamineImage from "@/assets/white-melamine.jpg";
import stormGrayMatteImage from "@/assets/storm-gray-matte.jpg";
import stormGrayGlossImage from "@/assets/storm-gray-gloss.jpg";
import blackMelamineImage from "@/assets/black-melamine.jpg";
import flutedPanelsImage from "@/assets/fluted-panels.jpg";
import quartziteSlabsImage from "@/assets/quartzite-slabs.jpg";
import glassDoorProfilesImage from "@/assets/glass-door-profiles.jpg";
import brookhillMatteImage from "@/assets/brookhill-matte.jpg";

const Products = () => {
  const boardTypes = [
    {
      name: "White Melamine",
      category: "Premium Finish",
      description: "Clean white melamine finish perfect for modern kitchen and furniture applications",
      features: [
        "Scratch and moisture resistant",
        "Easy to clean and maintain",
        "Smooth, non-porous surface",
        "UV resistant finish",
        "Professional grade quality"
      ],
      uses: "Kitchen cabinets, office furniture, shelving, wardrobe interiors",
      sizes: "4x8 ft, 5x8 ft, custom sizes available",
      image: whiteMelamineImage
    },
    {
      name: "Storm Grey Matte",
      category: "Contemporary Finish",
      description: "Sophisticated storm grey with matte finish for modern design applications",
      features: [
        "Anti-fingerprint surface",
        "Contemporary color palette",
        "Durable melamine coating",
        "Consistent color throughout",
        "Professional appearance"
      ],
      uses: "Modern kitchens, commercial furniture, contemporary interiors",
      sizes: "4x8 ft, 5x8 ft, custom cutting available",
      image: stormGrayMatteImage
    },
    {
      name: "Storm Grey Gloss",
      category: "High-Gloss Finish",
      description: "Elegant storm grey with high-gloss finish for premium applications",
      features: [
        "High-gloss reflective surface",
        "Easy to clean and wipe down",
        "Premium appearance",
        "Resistant to staining",
        "Long-lasting finish"
      ],
      uses: "High-end kitchens, display furniture, commercial applications",
      sizes: "4x8 ft, 5x8 ft, various thicknesses",
      image: stormGrayGlossImage
    },
    {
      name: "Black Melamine",
      category: "Bold Finish",
      description: "Rich black melamine finish for dramatic and sophisticated designs",
      features: [
        "Deep, consistent black color",
        "Scratch resistant surface",
        "Professional grade durability",
        "Easy maintenance",
        "Versatile design compatibility"
      ],
      uses: "Contemporary furniture, accent pieces, commercial interiors",
      sizes: "4x8 ft, 5x8 ft, custom sizes on request",
      image: blackMelamineImage
    },
    {
      name: "Fluted Panel Varieties",
      category: "Decorative Panels",
      description: "Stylish fluted panels with vertical grooves for modern architectural design",
      features: [
        "Unique textured surface",
        "Sound absorption properties",
        "Multiple wood grain options",
        "Easy installation system",
        "Architectural grade quality"
      ],
      uses: "Feature walls, retail displays, office partitions, acoustic panels",
      sizes: "4x8 ft, 4x10 ft, custom profiles available",
      image: flutedPanelsImage
    },
    {
      name: "Quartzite Slabs and Strips",
      category: "Natural Stone",
      description: "Premium quartzite surfaces with natural stone beauty and durability",
      features: [
        "Natural stone durability",
        "Heat and scratch resistant",
        "Unique veining patterns",
        "Low maintenance surface",
        "Premium luxury appearance"
      ],
      uses: "Countertops, backsplashes, feature walls, commercial surfaces",
      sizes: "Full slabs, custom strips, edge profiles available",
      image: quartziteSlabsImage
    },
    {
      name: "Glass Door Profiles",
      category: "Modern Hardware",
      description: "Contemporary glass door systems with aluminum profiles for cabinet applications",
      features: [
        "Crystal clear glass options",
        "Frosted and textured varieties",
        "Aluminum frame construction",
        "Soft-close mechanisms available",
        "Modern aesthetic appeal"
      ],
      uses: "Cabinet doors, display cases, office furniture, retail fixtures",
      sizes: "Standard cabinet sizes, custom dimensions available",
      image: glassDoorProfilesImage
    },
    {
      name: "Brookhill Matte Melamine",
      category: "Wood Grain Finish",
      description: "Natural wood grain melamine with matte finish for authentic wood appearance",
      features: [
        "Realistic wood grain texture",
        "Matte finish reduces glare",
        "Consistent grain pattern",
        "Maintenance-free surface",
        "Cost-effective wood alternative"
      ],
      uses: "Traditional furniture, cabinetry, office applications, residential projects",
      sizes: "4x8 ft, 5x8 ft, matching edge banding available",
      image: brookhillMatteImage
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-primary/5 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Premium Board Supplies
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Discover our comprehensive range of high-quality boards for all your woodworking and construction needs. 
              From engineered solutions to traditional materials, we have the perfect board for every project.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {boardTypes.map((board, index) => (
              <Card key={board.name} className="h-full hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                {/* Product Image */}
                <div className="h-48 overflow-hidden">
                  <img 
                    src={board.image} 
                    alt={board.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="mb-2">
                      {board.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl text-primary">{board.name}</CardTitle>
                  <CardDescription className="text-sm">
                    {board.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  {/* Key Features */}
                  <div>
                    <h4 className="font-semibold text-sm text-primary mb-2">Key Benefits:</h4>
                    <ul className="space-y-1">
                      {board.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Common Uses */}
                  <div>
                    <h4 className="font-semibold text-sm text-primary mb-1">Common Uses:</h4>
                    <p className="text-sm text-muted-foreground">{board.uses}</p>
                  </div>

                  {/* Available Sizes */}
                  <div>
                    <h4 className="font-semibold text-sm text-primary mb-1">Available Sizes:</h4>
                    <p className="text-sm text-muted-foreground">{board.sizes}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary/5 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-primary mb-4">
            Need Help Choosing the Right Board?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our experienced team is here to help you select the perfect board type for your specific project requirements. 
            Contact us for expert advice and competitive pricing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/quote" className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium">
              Get a Quote
            </a>
            <a href="/contact" className="inline-flex items-center justify-center px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors font-medium">
              Contact Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;