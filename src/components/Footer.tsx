
import { ChevronUp, Linkedin, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-black pt-16 pb-6 relative">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center opacity-5"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex justify-center mb-10">
          <button
            onClick={scrollToTop}
            className="w-12 h-12 rounded-full bg-muted border border-gold flex items-center justify-center hover:bg-gold/20 transition-colors"
            aria-label="Scroll to top"
          >
            <ChevronUp className="text-gold" size={24} />
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-serif font-bold text-white mb-4">Hamza Mathlouthi</h3>
            <p className="text-gray-400 mb-6 max-w-xs">
              Professional web and design services for cafés, hotels, and personal businesses.
              Quality design solutions at competitive prices.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/hamza-mathlouthi-a23023338/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-muted border border-gold/30 flex items-center justify-center hover:bg-gold/20 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="text-gold" size={18} />
              </a>
              <a
                href="mailto:htssociete@hotmail.com"
                className="w-10 h-10 rounded-full bg-muted border border-gold/30 flex items-center justify-center hover:bg-gold/20 transition-colors"
                aria-label="Email"
              >
                <Mail className="text-gold" size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-serif font-bold text-white mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#services" className="hover:text-gold transition-colors">Website Design</a></li>
              <li><a href="#services" className="hover:text-gold transition-colors">Menu Design</a></li>
              <li><a href="#services" className="hover:text-gold transition-colors">Business Cards</a></li>
              <li><a href="#services" className="hover:text-gold transition-colors">Brochures & Prints</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-serif font-bold text-white mb-4">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="text-gold mt-1 mr-2 flex-shrink-0" size={18} />
                <span className="text-gray-400">Middle East and Tunis</span>
              </li>
              <li className="flex items-start">
                <Mail className="text-gold mt-1 mr-2 flex-shrink-0" size={18} />
                <a href="mailto:htssociete@hotmail.com" className="text-gray-400 hover:text-gold transition-colors">
                  htssociete@hotmail.com
                </a>
              </li>
              <li className="flex items-start">
                <Linkedin className="text-gold mt-1 mr-2 flex-shrink-0" size={18} />
                <a 
                  href="https://www.linkedin.com/in/hamza-mathlouthi-a23023338/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gold transition-colors"
                >
                  Hamza Mathlouthi
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gold/10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Hamza Mathlouthi. All rights reserved.
          </p>
          <div className="flex items-center">
            <div className="border border-gold px-3 py-1 rounded-full bg-black/80">
              <span className="text-gold text-sm font-medium">35% OFF All Services</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
