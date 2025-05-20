
import { Award, Code, FileImage, Palette } from "lucide-react";

const services = [
  {
    title: "Website Design",
    description: "Custom, responsive websites tailored for cafés, hotels, and small businesses. Modern design with easy navigation and SEO optimization.",
    icon: Code,
  },
  {
    title: "Menu Design",
    description: "Elegant, brand-consistent menu designs that showcase your offerings. Digital and print options available.",
    icon: FileImage,
  },
  {
    title: "Business Cards",
    description: "Professional business cards that leave a lasting impression. Modern designs with premium printing options.",
    icon: Award,
  },
  {
    title: "Brochures & Prints",
    description: "Informative and visually appealing brochures, flyers, and promotional materials that highlight your services.",
    icon: Palette,
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 relative">
      <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-gold/10 rounded-full blur-[100px]"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-title inline-block mx-auto">My Services</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mt-4">
            Comprehensive design solutions tailored specifically for cafés, 
            hotels, and personal businesses. Each service is customized to your unique needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="futuristic-card rounded-lg p-6 card-hover"
            >
              <div className="w-14 h-14 rounded-lg bg-gold/10 border border-gold/30 flex items-center justify-center mb-5">
                <service.icon className="text-gold" size={24} />
              </div>
              
              <h3 className="text-white text-xl font-serif font-semibold mb-3">
                {service.title}
              </h3>
              
              <p className="text-gray-300 text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-block futuristic-card p-6 border border-gold/40 rounded-lg max-w-2xl">
            <h3 className="text-2xl font-serif text-gold mb-4">
              Special Offer!
            </h3>
            <p className="text-gray-200 mb-4">
              Currently offering a <span className="text-gold font-semibold">35% discount</span> on all services.
              Perfect time to elevate your brand with professional design solutions.
            </p>
            <a href="#contact" className="gold-btn inline-block">
              Get This Offer
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
