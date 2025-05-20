
import { useState } from "react";

const portfolioItems = [
  {
    id: 1,
    title: "Blossom Café Website",
    category: "websites",
    description: "Elegant, blossom-themed layout that reflects the café's feminine and European ambiance.",
    image: "/public/websites.jpg",
  },
  {
    id: 2,
    title: "Five Elephants Business Cards",
    category: "business-cards",
    description: "Modern, clean cards with brand color accents and QR code for quick access to socials.",
    image: "/public/business_cards.jpg",
  },
  {
    id: 3,
    title: "Luxury Hotel Menu",
    category: "menus",
    description: "Sophisticated menu design for an upscale hotel restaurant highlighting their signature dishes.",
    image: "/public/hotel_menu.jpg",
  },
  {
    id: 4,
    title: "Boutique Shop Brochure",
    category: "brochures",
    description: "Stylish brochure showcasing a collection of products with elegant typography and layout.",
    image: "/public/boutique.jpg",
  },
  {
    id: 5,
    title: "Artisan Bakery Website",
    category: "websites",
    description: "Warm and inviting website design that showcases artisanal baked goods and the bakery's story.",
    image: "/public/bakery.jpg",
  },
  {
    id: 6,
    title: "Seaside Restaurant Menu",
    category: "menus",
    description: "Fresh, ocean-inspired menu design with clear categories and appealing food photography.",
    image: "/public/restaurent.jpg",
  },
];

const categories = [
  { id: "all", name: "All Work" },
  { id: "websites", name: "Websites" },
  { id: "menus", name: "Menus" },
  { id: "business-cards", name: "Business Cards" },
  { id: "brochures", name: "Brochures" },
];

const PortfolioSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedItem, setSelectedItem] = useState<number | null>(null);

  const filteredItems = activeCategory === "all" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 bg-black/40 relative">
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center opacity-5"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-title inline-block mx-auto">My Portfolio</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mt-4">
            Browse through my latest projects showcasing website designs, menus, 
            business cards, and brochures created for various clients.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center mb-10 gap-2">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full transition-all ${
                activeCategory === category.id
                  ? "bg-gold text-black"
                  : "bg-muted text-white hover:bg-gold/20"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map(item => (
            <div 
              key={item.id}
              className="group relative overflow-hidden rounded-lg cursor-pointer card-hover"
              onClick={() => setSelectedItem(item.id)}
            >
              <div className="aspect-[4/3] relative">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <h3 className="text-xl font-serif text-white font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-200">{item.description}</p>
                </div>
              </div>
              
              <div className="absolute top-4 right-4">
                <span className="bg-gold/90 text-black text-xs px-2 py-1 rounded uppercase">
                  {item.category.replace('-', ' ')}
                </span>
              </div>
            </div>
          ))}
        </div>
        
        {/* Modal */}
        {selectedItem && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-black border border-gold/30 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-auto">
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-2xl font-serif text-gold">
                    {portfolioItems.find(item => item.id === selectedItem)?.title}
                  </h3>
                  <button 
                    onClick={() => setSelectedItem(null)}
                    className="text-white hover:text-gold"
                  >
                    ×
                  </button>
                </div>
                
                <div className="mb-6">
                  <img 
                    src={portfolioItems.find(item => item.id === selectedItem)?.image} 
                    alt={portfolioItems.find(item => item.id === selectedItem)?.title}
                    className="w-full rounded-lg"
                  />
                </div>
                
                <p className="text-gray-300 mb-4">
                  {portfolioItems.find(item => item.id === selectedItem)?.description}
                </p>
                
                <div className="flex justify-end">
                  <button 
                    className="gold-btn"
                    onClick={() => setSelectedItem(null)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PortfolioSection;
