import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/govitrix-logo.png";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigateToHome = () => {
    if (window.location.pathname === '/') {
      // If already on home page, just scroll to top
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      // If on another page, navigate to home page
      // Clear any hash fragments and navigate to root
      window.location.href = '/';
    }
  };
  const scrollToSection = (id: string, e?: React.MouseEvent) => {
    e?.preventDefault();
    
    if (window.location.pathname !== '/') {
      // If not on home page, navigate to home with hash and let the effect handle the scroll
      window.location.href = `/#${id}`;
      return;
    }
    
    // If already on home page, scroll to section immediately
    scrollToElement(id);
    setIsMobileMenuOpen(false);
  };
  
  const scrollToElement = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.history.pushState(null, '', `#${id}`);
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };
  
  // Handle hash navigation on page load and when navigating from other pages
  useEffect(() => {
    const handleHashNavigation = () => {
      const hash = window.location.hash.substring(1);
      if (hash) {
        // Small timeout to ensure the page has time to render
        const timer = setTimeout(() => {
          scrollToElement(hash);
        }, 10);
        return () => clearTimeout(timer);
      }
    };
    
    // Initial check for hash on page load
    handleHashNavigation();
    
    // Add hash change listener
    window.addEventListener('hashchange', handleHashNavigation, false);
    
    return () => {
      window.removeEventListener('hashchange', handleHashNavigation, false);
    };
  }, []);

  const navLinks = [
    { name: "About Us", id: "about" },
    { name: "Expertise", id: "expertise" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass-panel shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button 
            onClick={navigateToHome} 
            className="focus:outline-none group"
            title="Go to Home Page"
          >
            <img 
              src={logo} 
              alt="Govitrix" 
              className="h-20 hover:scale-105 transition-all duration-300 group-hover:drop-shadow-lg" 
            />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => scrollToSection(link.id, e)}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors cursor-pointer"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-muted-foreground hover:text-primary transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-6 glass-panel rounded-b-2xl">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => scrollToSection(link.id, e)}
                  className="block px-4 py-2 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-muted/30 rounded-lg transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
