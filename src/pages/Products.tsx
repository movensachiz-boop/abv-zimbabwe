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
import quartziteSlabsImage from "/lovable-uploads/797e6711-6720-4b64-a77f-af4d6f339739.png";
import glassDoorProfilesImage from "@/assets/glass-door-profiles.jpg";
import brookhillMatteImage from "@/assets/brookhill-matte.jpg";
import quartziteCatalogCover from "@/assets/quartzite-catalog-cover.png";
import quartziteKD1001 from "@/assets/quartzite-kd1001.png";
import quartziteKD1002 from "@/assets/quartzite-kd1002.png";
import quartziteKD1003 from "@/assets/quartzite-kd1003.png";
import quartziteKD1004 from "@/assets/quartzite-kd1004.png";
import quartziteKD1005 from "@/assets/quartzite-kd1005.png";
import quartziteKD1006 from "@/assets/quartzite-kd1006.png";
import quartziteKD1007 from "@/assets/quartzite-kd1007.png";
import quartziteKD1009 from "@/assets/quartzite-kd1009.png";
import quartziteKD1010 from "@/assets/quartzite-kd1010.png";
const Products = () => {
  const boardTypes = [{
    name: "White Melamine",
    category: "Premium Finish",
    description: "Clean white melamine finish perfect for modern kitchen and furniture applications",
    features: ["Scratch and moisture resistant", "Easy to clean and maintain", "Smooth, non-porous surface", "UV resistant finish", "Professional grade quality"],
    uses: "Kitchen cabinets, office furniture, shelving, wardrobe interiors",
    sizes: "4x8 ft, 5x8 ft, custom sizes available",
    image: whiteMelamineImage
  }, {
    name: "Storm Grey Matte",
    category: "Contemporary Finish",
    description: "Sophisticated storm grey with matte finish for modern design applications",
    features: ["Anti-fingerprint surface", "Contemporary color palette", "Durable melamine coating", "Consistent color throughout", "Professional appearance"],
    uses: "Modern kitchens, commercial furniture, contemporary interiors",
    sizes: "4x8 ft, 5x8 ft, custom cutting available",
    image: stormGrayMatteImage
  }, {
    name: "Storm Grey Gloss",
    category: "High-Gloss Finish",
    description: "Elegant storm grey with high-gloss finish for premium applications",
    features: ["High-gloss reflective surface", "Easy to clean and wipe down", "Premium appearance", "Resistant to staining", "Long-lasting finish"],
    uses: "High-end kitchens, display furniture, commercial applications",
    sizes: "4x8 ft, 5x8 ft, various thicknesses",
    image: stormGrayGlossImage
  }, {
    name: "Black Melamine",
    category: "Bold Finish",
    description: "Rich black melamine finish for dramatic and sophisticated designs",
    features: ["Deep, consistent black color", "Scratch resistant surface", "Professional grade durability", "Easy maintenance", "Versatile design compatibility"],
    uses: "Contemporary furniture, accent pieces, commercial interiors",
    sizes: "4x8 ft, 5x8 ft, custom sizes on request",
    image: blackMelamineImage
  }, {
    name: "Fluted Panel Varieties",
    category: "Decorative Panels",
    description: "Stylish fluted panels with vertical grooves for modern architectural design",
    features: ["Unique textured surface", "Sound absorption properties", "Multiple wood grain options", "Easy installation system", "Architectural grade quality"],
    uses: "Feature walls, retail displays, office partitions, acoustic panels",
    sizes: "4x8 ft, 4x10 ft, custom profiles available",
    image: flutedPanelsImage
  }, {
    name: "Quartzite Slabs and Strips",
    category: "Natural Stone",
    description: "Premium quartzite surfaces with natural stone beauty and durability",
    features: ["Natural stone durability", "Heat and scratch resistant", "Unique veining patterns", "Low maintenance surface", "Premium luxury appearance"],
    uses: "Countertops, backsplashes, feature walls, commercial surfaces",
    sizes: "Full slabs, custom strips, edge profiles available",
    image: quartziteSlabsImage
  }, {
    name: "Glass Door Profiles",
    category: "Modern Hardware",
    description: "Contemporary glass door systems with aluminum profiles for cabinet applications",
    features: ["Crystal clear glass options", "Frosted and textured varieties", "Aluminum frame construction", "Soft-close mechanisms available", "Modern aesthetic appeal"],
    uses: "Cabinet doors, display cases, office furniture, retail fixtures",
    sizes: "Standard cabinet sizes, custom dimensions available",
    image: glassDoorProfilesImage
  }, {
    name: "Brookhill Matte Melamine",
    category: "Wood Grain Finish",
    description: "Natural wood grain melamine with matte finish for authentic wood appearance",
    features: ["Realistic wood grain texture", "Matte finish reduces glare", "Consistent grain pattern", "Maintenance-free surface", "Cost-effective wood alternative"],
    uses: "Traditional furniture, cabinetry, office applications, residential projects",
    sizes: "4x8 ft, 5x8 ft, matching edge banding available",
    image: brookhillMatteImage
  }, {
    name: "Quartzite KD1001",
    category: "ABV Quartzite Collection",
    description: "Premium quartzite with subtle white veining and natural texture - part of our partnership with Kianga",
    features: ["Natural stone durability", "Heat resistant up to 300°C", "Scratch and stain resistant", "Food-safe surface", "Unique natural patterns"],
    uses: "Kitchen countertops, bathroom vanities, commercial surfaces, feature walls",
    sizes: "Full slabs, custom cuts, edge profiling available",
    image: quartziteKD1001
  }, {
    name: "Quartzite KD1002",
    category: "ABV Quartzite Collection",
    description: "Elegant light grey quartzite with subtle natural veining patterns",
    features: ["Superior hardness rating", "Non-porous surface", "UV resistant", "Low maintenance", "Natural antimicrobial properties"],
    uses: "Premium countertops, backsplashes, flooring, wall cladding",
    sizes: "Standard slabs 3000x1400mm, custom dimensions available",
    image: quartziteKD1002
  }, {
    name: "Quartzite KD1003",
    category: "ABV Quartzite Collection", 
    description: "Sophisticated medium grey quartzite with consistent color and texture",
    features: ["Consistent color distribution", "High impact resistance", "Chemical resistant", "Easy to clean", "Professional grade quality"],
    uses: "Commercial kitchens, office spaces, retail surfaces, hospitality projects",
    sizes: "Multiple thickness options, custom fabrication services",
    image: quartziteKD1003
  }, {
    name: "Quartzite KD1004",
    category: "ABV Quartzite Collection",
    description: "Pure white quartzite with fine natural texture and premium finish",
    features: ["Bright white appearance", "Exceptional durability", "Heat and frost resistant", "Non-slip surface options", "Architectural grade"],
    uses: "Luxury bathrooms, kitchen islands, commercial applications, exterior cladding",
    sizes: "Large format slabs, bookmatched pairs available",
    image: quartziteKD1004
  }, {
    name: "Quartzite KD1005",
    category: "ABV Quartzite Collection",
    description: "Warm beige quartzite with natural speckled patterns and earthy tones",
    features: ["Natural speckled appearance", "Warm color palette", "Slip resistant", "Weather resistant", "Long-lasting beauty"],
    uses: "Outdoor kitchens, pool areas, commercial flooring, feature applications",
    sizes: "Various thicknesses from 20-30mm, custom shapes available",
    image: quartziteKD1005
  }, {
    name: "Quartzite KD1006",
    category: "ABV Quartzite Collection",
    description: "Contemporary grey quartzite with uniform texture and modern appeal",
    features: ["Uniform surface texture", "Contemporary aesthetics", "High compressive strength", "Freeze-thaw resistant", "Minimal maintenance required"],
    uses: "Modern interiors, commercial surfaces, architectural features, landscape applications",
    sizes: "Standard and jumbo slabs, precision cutting services",
    image: quartziteKD1006
  }, {
    name: "Quartzite KD1007",
    category: "ABV Quartzite Collection",
    description: "Dramatic black quartzite with starlight effect and premium finish",
    features: ["Starlight speckled effect", "Deep black color", "Luxury appearance", "Exceptional hardness", "Statement-making design"],
    uses: "High-end residential, luxury commercial, feature walls, premium countertops",
    sizes: "Select slabs, limited availability, custom fabrication",
    image: quartziteKD1007
  }, {
    name: "Quartzite KD1009",
    category: "ABV Quartzite Collection",
    description: "Refined grey quartzite with subtle natural variations and smooth finish",
    features: ["Subtle natural variations", "Smooth polished finish", "High density construction", "Stain resistant surface", "Timeless elegance"],
    uses: "Traditional and modern kitchens, bathroom surfaces, office environments",
    sizes: "Standard residential sizes, commercial dimensions available",
    image: quartziteKD1009
  }, {
    name: "Quartzite KD1010",
    category: "ABV Quartzite Collection",
    description: "Rich brown quartzite with golden highlights and premium natural finish",
    features: ["Rich brown base color", "Golden highlight accents", "Natural stone authenticity", "Superior wear resistance", "Unique character patterns"],
    uses: "Luxury residences, boutique commercial, specialty applications, designer projects",
    sizes: "Premium select slabs, designer cuts, custom edge profiles",
    image: quartziteKD1010
  }];
  return <div className="min-h-screen bg-background">
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
            {boardTypes.map((board, index) => <Card key={board.name} className="h-full hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                {/* Product Image */}
                <div className="h-48 overflow-hidden">
                  <img 
                    src={board.image} 
                    alt={`${board.name} - ${board.category} board from ABV Boards Zimbabwe`} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                    decoding="async"
                    width="400"
                    height="192"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
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
                    
                    <ul className="space-y-1">
                      {board.features.slice(0, 3).map((feature, idx) => <li key={idx} className="flex items-start gap-2 text-sm">
                          
                          
                        </li>)}
                    </ul>
                  </div>

                  {/* Common Uses */}
                  

                  {/* Available Sizes */}
                  <div>
                    
                    
                  </div>
                </CardContent>
              </Card>)}
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
    </div>;
};
export default Products;