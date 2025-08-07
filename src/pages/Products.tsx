import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";

const Products = () => {
  const boardTypes = [
    {
      name: "Plywood",
      category: "Engineered Wood",
      description: "Versatile engineered wood panels made from thin layers of wood veneer",
      features: [
        "High strength-to-weight ratio",
        "Smooth, uniform surface",
        "Excellent for furniture making",
        "Available in various thicknesses",
        "Cost-effective solution"
      ],
      uses: "Furniture, cabinets, flooring, construction, crafts",
      sizes: "4x8 ft, 5x10 ft, custom sizes available",
      image: "/src/assets/boards-stack.jpg"
    },
    {
      name: "MDF (Medium Density Fiberboard)",
      category: "Composite Wood",
      description: "Dense, smooth composite wood panel perfect for detailed work",
      features: [
        "Ultra-smooth surface finish",
        "Easy to cut and shape",
        "Consistent density throughout",
        "Takes paint and stain exceptionally well",
        "No grain pattern for uniform appearance"
      ],
      uses: "Cabinet doors, moldings, trim work, painted furniture",
      sizes: "4x8 ft, 4x10 ft, various thicknesses",
      image: "/src/assets/finished-furniture.jpg"
    },
    {
      name: "Particleboard",
      category: "Composite Wood",
      description: "Economical wood composite made from wood chips and adhesive",
      features: [
        "Budget-friendly option",
        "Good for structural applications",
        "Uniform composition",
        "Easy to work with standard tools",
        "Available in moisture-resistant versions"
      ],
      uses: "Shelving, basic furniture, underlayment, construction",
      sizes: "4x8 ft, 5x8 ft, custom cutting available",
      image: "/src/assets/boards-stack.jpg"
    },
    {
      name: "Hardboard",
      category: "High-Density Fiberboard",
      description: "Dense, smooth panel ideal for backing and templates",
      features: [
        "Very smooth surface",
        "High density and strength",
        "Resists warping",
        "Easy to cut precisely",
        "Excellent for templates and jigs"
      ],
      uses: "Cabinet backs, drawer bottoms, templates, crafts",
      sizes: "4x8 ft, 4x4 ft, various thicknesses from 1/8\" to 1/4\"",
      image: "/src/assets/finished-furniture.jpg"
    },
    {
      name: "OSB (Oriented Strand Board)",
      category: "Structural Wood",
      description: "Strong structural panel made from oriented wood strands",
      features: [
        "High structural strength",
        "Moisture resistant options available",
        "Cost-effective for construction",
        "Good nail and screw holding power",
        "Environmentally friendly manufacturing"
      ],
      uses: "Roof decking, wall sheathing, subflooring, construction",
      sizes: "4x8 ft, 4x9 ft, 4x10 ft, various thicknesses",
      image: "/src/assets/boards-stack.jpg"
    },
    {
      name: "Chipboard",
      category: "Economy Grade",
      description: "Basic composite board for light-duty applications",
      features: [
        "Most economical option",
        "Good for temporary projects",
        "Easy to cut and shape",
        "Lightweight construction",
        "Suitable for basic shelving"
      ],
      uses: "Temporary shelving, craft projects, packaging, underlayment",
      sizes: "4x8 ft, custom sizes on request",
      image: "/src/assets/boards-stack.jpg"
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
              <Card key={board.name} className="h-full hover:shadow-lg transition-shadow duration-300">
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