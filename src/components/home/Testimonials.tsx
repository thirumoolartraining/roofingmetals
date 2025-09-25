import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Rajesh Kumar",
      role: "Construction Contractor",
      location: "Hosur",
      rating: 5,
      text: "Sri Pachaiamman has been our go-to supplier for 3 years. Quality materials, competitive prices, and always on-time delivery. Highly recommended for bulk orders.",
      avatar: "👨‍💼"
    },
    {
      id: 2,
      name: "Priya Constructions",
      role: "Building Company",
      location: "Krishnagiri",
      rating: 5,
      text: "Excellent service and genuine MSME pricing. Their roofing materials quality is outstanding. We've completed 50+ projects with their supplies.",
      avatar: "🏗️"
    },
    {
      id: 3,
      name: "Murugan S",
      role: "Homeowner",
      location: "Dharmapuri",
      rating: 4,
      text: "Bought roofing sheets for my house. Great quality at reasonable price. The team helped me calculate exact requirements. Very satisfied!",
      avatar: "🏠"
    }
  ];

  return (
    <section className="py-16 industrial-section">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-oswald font-bold mb-4 text-white">
            CUSTOMER TESTIMONIALS
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Trusted by contractors, builders, and homeowners across Tamil Nadu
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              {/* Quote Icon */}
              <Quote className="h-8 w-8 text-safety-orange mb-4" />
              
              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`h-4 w-4 ${i < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-400'}`} 
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-white mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Customer Info */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-safety-orange rounded-full flex items-center justify-center text-white text-xl">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-300">{testimonial.role}</div>
                  <div className="text-xs text-gray-400">{testimonial.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-16 pt-16 border-t border-white/20">
          <div className="text-center">
            <div className="text-4xl font-oswald font-bold text-safety-orange mb-2">500+</div>
            <div className="text-white font-medium">Happy Customers</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-oswald font-bold text-safety-orange mb-2">1000+</div>
            <div className="text-white font-medium">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-oswald font-bold text-safety-orange mb-2">99%</div>
            <div className="text-white font-medium">On-Time Delivery</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-oswald font-bold text-safety-orange mb-2">5+</div>
            <div className="text-white font-medium">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;