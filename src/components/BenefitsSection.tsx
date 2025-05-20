
import { Check } from "lucide-react";

const benefits = [
  {
    title: "No Charge for Extra Changes",
    description: "Unlimited revisions with no additional cost. I believe in delivering the perfect result that meets your exact requirements."
  },
  {
    title: "Flexible Pricing Options",
    description: "Tailored packages to fit your budget. I work with you to find the right balance of services at a price point that works for your business."
  },
  {
    title: "Fast Turnaround Time",
    description: "Quick delivery without compromising on quality. Meeting deadlines is a priority in all projects."
  },
  {
    title: "Ongoing Support",
    description: "After-delivery assistance to ensure everything works perfectly. I'm just a message away whenever you need help."
  }
];

const BenefitsSection = () => {
  return (
    <section id="benefits" className="py-20 relative">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-[120px]"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-title inline-block mx-auto">Why Choose Me</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mt-4">
            I offer more than just design services. Here's what makes working with me different.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="futuristic-card rounded-lg p-6 card-hover flex"
            >
              <div className="mr-4 mt-1">
                <div className="w-8 h-8 bg-gold/20 rounded-full flex items-center justify-center">
                  <Check className="w-4 h-4 text-gold" />
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-serif text-white font-semibold mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-300 text-sm">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16">
          <div className="futuristic-card rounded-lg p-8 relative overflow-hidden border border-gold/20">
            <div className="absolute top-0 right-0 h-40 w-40 bg-gold/10 rounded-full blur-[60px] -translate-y-1/2 translate-x-1/2"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="md:w-2/3">
                <h3 className="text-2xl md:text-3xl font-serif text-gold mb-4">
                  Special Limited Time Offer
                </h3>
                <p className="text-gray-200 mb-6">
                  For a limited time, I'm offering a <span className="text-gold font-semibold">35% discount</span> on all services.
                  Whether you need a new website, menu design, business cards, or brochures, now is the perfect time to get started.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-gold mr-2" />
                    <span className="text-white">Premium design quality</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-gold mr-2" />
                    <span className="text-white">Fast turnaround time</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-gold mr-2" />
                    <span className="text-white">Unlimited revisions included</span>
                  </li>
                </ul>
              </div>
              
              <div className="md:w-1/3 text-center">
                <div className="inline-block bg-black p-6 rounded-full border-4 border-gold relative">
                  <div className="absolute inset-0 animate-gold-pulse rounded-full"></div>
                  <span className="text-5xl font-bold text-gold">35%</span>
                  <span className="block text-white text-xl">OFF</span>
                </div>
                <div className="mt-4">
                  <a href="#contact" className="gold-btn inline-block">
                    Claim This Offer
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
