
import { useState } from "react";
import { Mail, Linkedin, MapPin } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | "success" | "error">(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      
      // Reset status after 3 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 3000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center opacity-5"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-title inline-block mx-auto">Get In Touch</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mt-4">
            Have a project in mind? Let's discuss how I can help bring your vision to life.
            Feel free to reach out using the form below or through my contact details.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="text-2xl font-serif text-gold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center mr-4">
                    <Mail className="text-gold" size={18} />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Email</h4>
                    <a href="mailto:htssociete@hotmail.com" className="text-gray-300 hover:text-gold transition-colors">
                      htssociete@hotmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center mr-4">
                    <Linkedin className="text-gold" size={18} />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">LinkedIn</h4>
                    <a 
                      href="https://www.linkedin.com/in/hamza-mathlouthi-a23023338/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-gold transition-colors"
                    >
                      Hamza Mathlouthi
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center mr-4">
                    <MapPin className="text-gold" size={18} />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Location</h4>
                    <p className="text-gray-300">
                      Middle East and Tunis
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="futuristic-card p-6 rounded-lg">
              <h3 className="text-xl font-serif text-gold mb-4">Working Hours</h3>
              <div className="space-y-2 text-gray-300">
                <div className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday:</span>
                  <span>10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday:</span>
                  <span>Closed</span>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-gold/20">
                <p className="text-gold font-medium">
                  Current Special Offer:
                </p>
                <p className="text-white">
                  35% off all services for a limited time!
                </p>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-3">
            <div className="futuristic-card p-8 rounded-lg border border-gold/20">
              <h3 className="text-2xl font-serif text-gold mb-6">Send Me a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-white mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-muted border border-gold/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-white mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-muted border border-gold/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-white mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full bg-muted border border-gold/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold"
                  >
                    <option value="" disabled>Select a subject</option>
                    <option value="Website Design">Website Design</option>
                    <option value="Menu Design">Menu Design</option>
                    <option value="Business Cards">Business Cards</option>
                    <option value="Brochures">Brochures</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-white mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full bg-muted border border-gold/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>
                
                <div>
                  <button 
                    type="submit" 
                    className="gold-btn w-full py-3 flex items-center justify-center"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      "Send Message"
                    )}
                  </button>
                  
                  {submitStatus === "success" && (
                    <div className="mt-4 bg-emerald-900/50 border border-emerald-500/50 text-emerald-200 rounded-lg p-3">
                      Your message has been sent successfully! I'll get back to you soon.
                    </div>
                  )}
                  
                  {submitStatus === "error" && (
                    <div className="mt-4 bg-red-900/50 border border-red-500/50 text-red-200 rounded-lg p-3">
                      There was an error sending your message. Please try again later.
                    </div>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
