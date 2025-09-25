import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Categories = () => {
  const categories = [
    {
      id: "roofing",
      title: "Roofing Materials",
      description: "Sheets, ridges, screws, and roofing accessories",
      color: "bg-gradient-to-br from-roofing-blue to-roofing-blue/80",
      image: "/catalog/a.jpg"
    },
    {
      id: "metals",
      title: "Metals & Steel",
      description: "Bars, rods, angles, and structural steel",
      color: "bg-gradient-to-br from-steel-gray to-black-onyx",
      image: "/catalog/b.jpg"
    },
    {
      id: "hardware",
      title: "Hardware & Fasteners",
      description: "Bolts, nuts, washers, and fastening solutions",
      color: "bg-gradient-to-br from-safety-orange to-safety-orange/80",
      image: "/catalog/c.jpg"
    },
    {
      id: "tools",
      title: "Tools & Equipment",
      description: "Power tools, hand tools, and safety equipment",
      color: "bg-gradient-to-br from-success-green to-success-green/80",
      image: "/catalog/d.jpg"
    }
  ];

  return (
    <section className="py-16 bg-light-gray">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-oswald font-bold mb-4 text-industrial-base">
            PRODUCT CATEGORIES
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive range of construction materials and tools for all your building needs
          </p>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link 
              key={category.id}
              to={`/catalog?category=${category.id}`}
              className="category-card group"
            >
              {/* Category Image */}
              <div className="relative rounded-lg h-32 mb-4 overflow-hidden transition-transform group-hover:scale-105">
                <img 
                  src={category.image} 
                  alt={category.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.parentElement!.className = `${category.color} rounded-lg h-32 mb-4 transition-transform group-hover:scale-105`;
                  }}
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
              </div>

              {/* Category Info */}
              <div>
                <h3 className="text-xl font-oswald font-semibold mb-2 text-industrial-base group-hover:text-roofing-blue transition-colors">
                  {category.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {category.description}
                </p>
                <div className="flex items-center text-roofing-blue group-hover:text-safety-orange transition-colors">
                  <span className="font-medium text-sm">Browse Products</span>
                  <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;