
import { useState, useEffect } from "react";

const HeroSection = () => {
  const [loaded, setLoaded] = useState(false);
  
  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-[url('https://images.unsplash.com/photo-1551038247-3d9af20df552?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>
      
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gold/20 rounded-full blur-[100px]"></div>
      
      <div className={`container mx-auto px-4 md:px-6 relative z-10 ${loaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`}>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">
              <span className="block text-white">Transforming Ideas into</span>
              <span className="gold-text-gradient">Elegant Designs</span>
            </h1>
            
            <p className="text-lg text-gray-300 mb-8 max-w-xl">
              Specialized in creating stunning websites, menu designs, business cards, and brochures 
              for cafés, hotels, and personal businesses.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a href="#portfolio" className="gold-btn animate-gold-pulse">
                View Portfolio
              </a>
              <a href="#services" className="ghost-btn">
                Explore Services
              </a>
            </div>
            
            <div className="mt-12 flex items-center">
              <div className="flex -space-x-2">
                <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center border-2 border-black">
                  <span className="text-black font-bold">35%</span>
                </div>
                <div className="w-12 h-12 rounded-full bg-black border border-gold flex items-center justify-center">
                  <span className="text-gold font-bold">OFF</span>
                </div>
              </div>
              <p className="ml-4 text-white">
                Special offer - <span className="text-gold">35% discount</span> on all services!
              </p>
            </div>
          </div>
          
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <div className="relative">
              <div className="absolute inset-0 border-2 border-gold rounded-lg -translate-x-3 -translate-y-3"></div>
              <img
                src="/public/hamza.png"
                alt="Hamza Mathlouthi"
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=500";
                }}
                className="w-72 h-72 md:w-96 md:h-96 object-cover rounded-lg border-2 border-gold relative z-10"
              />
              
              <div className="absolute -bottom-4 -right-4 bg-black border border-gold p-3 rounded">
                <p className="text-gold font-serif">Web & Design Professional</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
