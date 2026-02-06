import logo from "@/assets/govitrix-logo.png";
import { Linkedin, Instagram } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

// Types
interface FooterLink {
  name: string;
  id?: string;
  href?: string;
  isHome?: boolean;
}

// Scroll to top component
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export const FooterSection = () => {
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

  const scrollToSection = (id: string) => {
    // If we're not on the home page, navigate to home first
    if (window.location.pathname !== '/') {
      window.location.href = `/#${id}`;
    } else {
      const element = document.getElementById(id);
      if (element) {
        const headerOffset = 100; // Adjust this value based on your header height
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  const footerLinks: Record<string, FooterLink[]> = {
    Company: [
      { name: "Home", id: "home", isHome: true },
      { name: "About Us", id: "about" },
      { name: "Expertise", id: "expertise" },
      { name: "Contact", id: "contact" },
    ],
    Services: [
      { name: "Web Development", id: "expertise" },
      { name: "Mobile Apps", id: "expertise" },
      { name: "AI & Analytics", id: "expertise" },
      { name: "Cloud & DevOps", id: "expertise" },
    ],
    Legal: [
      { name: "Privacy Policy", href: "/privacy-policy" },
      { name: "Terms of Service", href: "/terms-of-service" },
    ],
  };

  const socialLinks = [
    { icon: Linkedin, href: "https://www.linkedin.com/company/govitrix-corporation/", label: "LinkedIn", target: "_blank" },
    { icon: Instagram, href: "https://www.instagram.com/govitrix", label: "Instagram", target: "_blank" },
  ];

  return (
    <footer className="relative py-16 border-t border-border/50">
      <ScrollToTop />
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Logo & Tagline */}
          <div className="lg:col-span-2">
            <button 
              onClick={navigateToHome}
              className="focus:outline-none group mb-4 block"
              title="Go to Home Page"
            >
              <img 
                src={logo} 
                alt="Govitrix" 
                className="h-20 hover:scale-105 transition-all duration-300 group-hover:drop-shadow-lg cursor-pointer group-hover:brightness-110" 
              />
            </button>
            <p className="text-muted-foreground mb-6 max-w-sm leading-relaxed">
              From Imagination to Innovation — Engineering tomorrow's technology today.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  target={social.target}
                  className="w-10 h-10 rounded-lg glass-panel hover-glow flex items-center justify-center group"
                >
                  <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold mb-4 text-primary">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    {link.href ? (
                      <Link
                        to={link.href}
                        className="text-muted-foreground hover:text-primary transition-colors text-sm"
                        onClick={() => window.scrollTo(0, 0)}
                      >
                        {link.name}
                      </Link>
                    ) : link.isHome ? (
                      <button
                        onClick={navigateToHome}
                        className="text-muted-foreground hover:text-primary transition-colors text-sm w-full text-left font-medium flex items-center gap-2"
                      >
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        {link.name}
                      </button>
                    ) : (
                      <button
                        onClick={() => scrollToSection(link.id!)}
                        className="text-muted-foreground hover:text-primary transition-colors text-sm w-full text-left"
                      >
                        {link.name}
                      </button>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2025 Govitrix Corporation. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
