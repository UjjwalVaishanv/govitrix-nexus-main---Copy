import { useState, useEffect, useRef } from 'react';
import { Navbar } from "./Navbar";
import { FooterSection } from "./sections/FooterSection";
import { cn } from "@/lib/utils";
import { ChevronRight, FileText, Clock, ArrowUp, Menu, X } from "lucide-react";

interface LegalPageProps {
  title: string;
  content: string;
  lastUpdated?: string;
}

interface Heading {
  id: string;
  text: string;
  level: number;
  readingTime?: number;
}

export const LegalPage = ({ title, content, lastUpdated }: LegalPageProps) => {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [activeId, setActiveId] = useState('');
  const [showToc, setShowToc] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [readingProgress, setReadingProgress] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);
  const tocNavRef = useRef<HTMLDivElement>(null);
  const mobileTocNavRef = useRef<HTMLDivElement>(null);

  // Extract headings from content
  useEffect(() => {
    const lines = content.split('\n');
    const extractedHeadings = [];
    
    // Extract headings from content and calculate reading time
    lines.forEach((line, index) => {
      if (line.startsWith('## ')) {
        const text = line.replace('## ', '').trim();
        const id = text.toLowerCase()
          .replace(/[^\w\s-]/g, '')
          .replace(/\s+/g, '-');
        
        // Calculate reading time for this section
        let sectionContent = '';
        let nextIndex = index + 1;
        
        // Collect content until next heading or end
        while (nextIndex < lines.length && !lines[nextIndex].startsWith('## ')) {
          if (!lines[nextIndex].startsWith('### ')) {
            sectionContent += lines[nextIndex] + ' ';
          }
          nextIndex++;
        }
        
        const wordCount = sectionContent.split(/\s+/).filter(word => word.length > 0).length;
        const readingTime = Math.max(1, Math.ceil(wordCount / 200)); // 200 words per minute
        
        extractedHeadings.push({ id, text, level: 2, readingTime });
      } else if (line.startsWith('### ')) {
        const text = line.replace('### ', '').trim();
        const id = text.toLowerCase()
          .replace(/[^\w\s-]/g, '')
          .replace(/\s+/g, '-');
        extractedHeadings.push({ id, text, level: 3, readingTime: 1 });
      }
    });
    
    setHeadings(extractedHeadings);
    
    // Set up intersection observer for active section highlighting
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0% -60% 0%', threshold: 0.1 }
    );

    // Observe all heading elements after a short delay to ensure they're rendered
    const observeHeadings = () => {
      const headingElements = document.querySelectorAll('h2[id], h3[id]');
      headingElements.forEach((element) => {
        observer.observe(element);
      });
    };

    // Use a timeout to ensure DOM is updated
    const timeoutId = setTimeout(observeHeadings, 100);

    return () => {
      clearTimeout(timeoutId);
      const headingElements = document.querySelectorAll('h2[id], h3[id]');
      headingElements.forEach((element) => {
        observer.unobserve(element);
      });
      observer.disconnect();
    };
  }, [content]);

  // Auto-scroll TOC to active section with debouncing
  useEffect(() => {
    if (!activeId || headings.length === 0) return;

    // Debounce the scroll to prevent excessive calls
    const timeoutId = setTimeout(() => {
      const scrollTocToActive = (tocContainer: HTMLDivElement | null) => {
        if (!tocContainer) return;

        const activeButton = tocContainer.querySelector(`button[data-section-id="${activeId}"]`) as HTMLElement;
        if (!activeButton) return;

        const containerRect = tocContainer.getBoundingClientRect();
        const buttonRect = activeButton.getBoundingClientRect();
        
        // Calculate if the button is outside the visible area
        const bufferTop = 80; // Buffer from top
        const bufferBottom = 80; // Buffer from bottom
        
        const isAbove = buttonRect.top < containerRect.top + bufferTop;
        const isBelow = buttonRect.bottom > containerRect.bottom - bufferBottom;

        if (isAbove || isBelow) {
          const scrollTop = tocContainer.scrollTop;
          const containerHeight = tocContainer.clientHeight;
          const buttonTop = activeButton.offsetTop;
          const buttonHeight = activeButton.offsetHeight;

          // Calculate the ideal scroll position (center the active item with some offset)
          let idealScrollTop;
          
          if (isAbove) {
            // If above, scroll to show it near the top
            idealScrollTop = buttonTop - bufferTop;
          } else {
            // If below, scroll to show it near the bottom
            idealScrollTop = buttonTop - containerHeight + buttonHeight + bufferBottom;
          }
          
          // Ensure we don't scroll past the boundaries
          const maxScrollTop = tocContainer.scrollHeight - containerHeight;
          idealScrollTop = Math.max(0, Math.min(idealScrollTop, maxScrollTop));
          
          // Smooth scroll to the calculated position
          tocContainer.scrollTo({
            top: idealScrollTop,
            behavior: 'smooth'
          });
        }
      };

      // Scroll both desktop and mobile TOC
      scrollTocToActive(tocNavRef.current);
      scrollTocToActive(mobileTocNavRef.current);
    }, 150); // 150ms debounce

    return () => clearTimeout(timeoutId);
  }, [activeId, headings]);

  // Reading progress and scroll tracking
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      
      setReadingProgress(Math.min(100, Math.max(0, progress)));
      setShowScrollTop(scrollTop > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll to section when TOC item is clicked
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      // Update URL hash without jumping
      if (history.pushState) {
        history.pushState(null, '', `#${id}`);
      } else {
        window.location.hash = `#${id}`;
      }
      
      // Close mobile TOC
      setShowToc(false);
    }
  };

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Convert markdown links, email addresses, and bold text
  const processText = (text: string) => {
    // Handle markdown links [text](url)
    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
    const emailRegex = /(\S+@\S+\.\S+)/g;
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const boldRegex = /\*\*(.*?)\*\*/g;
    
    let processed = text;
    
    // Process markdown links
    processed = processed.replace(linkRegex, (match, text, url) => {
      return `<a href="${url}" class="text-primary hover:text-primary/80 underline decoration-primary/30 hover:decoration-primary/60 transition-all duration-200 font-medium" target="_blank" rel="noopener noreferrer">${text}</a>`;
    });
    
    // Process email addresses
    processed = processed.replace(emailRegex, (email) => {
      return `<a href="mailto:${email}" class="text-primary hover:text-primary/80 underline decoration-primary/30 hover:decoration-primary/60 transition-all duration-200 font-medium">${email}</a>`;
    });
    
    // Process raw URLs (only if not already in a markdown link)
    processed = processed.replace(urlRegex, (url) => {
      // Skip if this URL is already part of a markdown link
      if (processed.includes(`](${url})`)) return url;
      return `<a href="${url}" class="text-primary hover:text-primary/80 underline decoration-primary/30 hover:decoration-primary/60 transition-all duration-200 font-medium" target="_blank" rel="noopener noreferrer">${url}</a>`;
    });
    
    // Process bold text **bold**
    processed = processed.replace(boldRegex, (match, text) => {
      return `<strong class="font-semibold text-foreground">${text}</strong>`;
    });
    
    return processed;
  };

  // Simple markdown to HTML converter for headings and paragraphs
  const renderContent = () => {
    const lines = content.split('\n');
    let currentList = [];
    let inTable = false;
    let tableHeaders = [];
    let tableRows = [];
    
    const elements = [];
    
    for (let index = 0; index < lines.length; index++) {
      const line = lines[index];
      
      // Handle table detection
      if (line.includes('|') && line.trim().startsWith('|')) {
        if (!inTable) {
          inTable = true;
          tableHeaders = line.split('|').map(h => h.trim()).filter(h => h);
          continue;
        } else if (line.includes('---')) {
          continue; // Skip separator line
        } else {
          const cells = line.split('|').map(c => c.trim()).filter(c => c);
          tableRows.push(cells);
          continue;
        }
      } else if (inTable) {
        // End of table, render it
        elements.push(
          <div key={`table-${index}`} className="my-8 overflow-x-auto">
            <table className="w-full border-collapse bg-card/30 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-primary/10">
                  {tableHeaders.map((header, i) => (
                    <th key={i} className="border border-border/50 px-4 py-3 text-left font-semibold text-foreground">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {tableRows.map((row, i) => (
                  <tr key={i} className="hover:bg-muted/20 transition-colors">
                    {row.map((cell, j) => (
                      <td key={j} className="border border-border/50 px-4 py-3 text-foreground/90">
                        <span dangerouslySetInnerHTML={{ __html: processText(cell) }} />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
        inTable = false;
        tableHeaders = [];
        tableRows = [];
      }
      
      // Handle headings
      if (line.startsWith('## ')) {
        const headingText = line.replace('## ', '');
        const id = headingText.toLowerCase()
          .replace(/[^\w\s-]/g, '')
          .replace(/\s+/g, '-');
        elements.push(
          <h2 
            key={id} 
            id={id} 
            className="text-3xl font-bold mt-12 mb-6 text-foreground border-b-2 border-primary/20 pb-3 scroll-mt-24 group"
          >
            <span className="flex items-center gap-3">
              <span className="w-1 h-8 bg-gradient-to-b from-primary to-secondary rounded-full"></span>
              <span dangerouslySetInnerHTML={{ __html: processText(headingText) }} />
            </span>
          </h2>
        );
        continue;
      }
      
      // Handle subheadings
      if (line.startsWith('### ')) {
        const headingText = line.replace('### ', '');
        const id = headingText.toLowerCase()
          .replace(/[^\w\s-]/g, '')
          .replace(/\s+/g, '-');
        elements.push(
          <h3 
            key={id} 
            id={id} 
            className="text-xl font-semibold mt-8 mb-4 text-foreground scroll-mt-24 flex items-center gap-2"
          >
            <ChevronRight className="w-5 h-5 text-primary" />
            <span dangerouslySetInnerHTML={{ __html: processText(headingText) }} />
          </h3>
        );
        continue;
      }
      
      // Handle lists
      if (line.trim().startsWith('- ')) {
        const listItem = line.replace('- ', '');
        currentList.push(listItem);
        
        // Check if next line is also a list item
        if (index + 1 >= lines.length || !lines[index + 1].trim().startsWith('- ')) {
          // End of list, render it
          elements.push(
            <ul key={`list-${index}`} className="space-y-2 mb-6 ml-4">
              {currentList.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-foreground/90 leading-relaxed">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span dangerouslySetInnerHTML={{ __html: processText(item) }} />
                </li>
              ))}
            </ul>
          );
          currentList = [];
        }
        continue;
      }
      
      // Handle empty lines
      if (line.trim() === '') {
        elements.push(<div key={`empty-${index}`} className="h-4" />);
        continue;
      }
      
      // Handle paragraphs (only if not a heading or list item)
      if (!line.startsWith('##') && !line.startsWith('###') && !line.startsWith('- ')) {
        elements.push(
          <p 
            key={`p-${index}`} 
            className="mb-6 text-foreground/90 leading-relaxed text-lg"
            dangerouslySetInnerHTML={{ __html: processText(line) }}
          />
        );
      }
    }
    
    return elements;
  };

  return (
    <div className="min-h-screen flex flex-col bg-background relative">
      <Navbar />
      
      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-border/30 z-50">
        <div 
          className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-300 ease-out"
          style={{ width: `${readingProgress}%` }}
        />
      </div>

      {/* Mobile TOC Toggle */}
      <button
        onClick={() => setShowToc(!showToc)}
        className="lg:hidden fixed top-20 right-4 z-40 glass-panel p-3 rounded-full hover:bg-primary/10 transition-all duration-200"
      >
        {showToc ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      <div className="flex flex-1 pt-16">
        {/* Table of Contents - Desktop */}
        <aside className="hidden lg:block w-80 flex-shrink-0 h-[calc(100vh-4rem)] sticky top-16 overflow-hidden">
          <div className="toc-container glass-panel border-r border-border/30 relative">
            {/* TOC Header - Sticky */}
            <div className="flex-shrink-0 p-6 border-b border-border/30 bg-gradient-to-r from-primary/5 to-secondary/5">
              <div className="flex items-center gap-3 mb-3">
                <div className="relative">
                  <div className="p-2.5 bg-gradient-to-br from-primary to-secondary rounded-xl shadow-lg">
                    <FileText className="w-5 h-5 text-white" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-secondary rounded-full animate-pulse"></div>
                </div>
                <div>
                  <h2 className="font-bold text-lg text-foreground">Contents</h2>
                  <p className="text-xs text-muted-foreground">
                    {headings.length} sections • {headings.reduce((total, h) => total + (h.readingTime || 0), 0)} min read
                  </p>
                  {headings.length === 0 && (
                    <p className="text-xs text-yellow-500">Loading sections...</p>
                  )}
                  {headings.length > 0 && (
                    <p className="text-xs text-green-500">Showing {headings.length} items</p>
                  )}
                </div>
              </div>
              
              {/* Progress indicator */}
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <div className="flex-1 h-1 bg-border/30 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-500 ease-out"
                    style={{ width: `${readingProgress}%` }}
                  />
                </div>
                <span className="font-medium">{Math.round(readingProgress)}%</span>
              </div>
            </div>
            
            <div ref={tocNavRef} className="toc-nav-container toc-scrollbar toc-auto-scroll p-4">
              <nav className="toc-nav-list space-y-1">
                {/* Debug info */}
                <div className="text-xs text-muted-foreground mb-2 p-2 bg-muted/10 rounded">
                  Rendering {headings.length} total items
                </div>
                
                {headings.length === 0 ? (
                  <div className="text-center py-8 text-muted-foreground">
                    <FileText className="w-8 h-8 mx-auto mb-2 opacity-50" />
                    <p className="text-sm">Loading table of contents...</p>
                  </div>
                ) : (
                  headings.map((heading, index) => {
                  const isActive = activeId === heading.id;
                  const isSubheading = heading.level === 3;
                  
                  return (
                    <div key={heading.id} className="relative">
                      <button
                        onClick={() => scrollToSection(heading.id)}
                        data-section-id={heading.id}
                        className={cn(
                          'group w-full text-left transition-all duration-300 ease-out relative',
                          'flex items-center gap-3 rounded-lg overflow-hidden',
                          isActive
                            ? 'text-primary font-semibold bg-gradient-to-r from-primary/10 to-secondary/5 border border-primary/20 shadow-md p-3 toc-item-active'
                            : 'text-muted-foreground hover:text-foreground hover:bg-muted/20 border border-transparent p-2.5',
                          isSubheading ? 'ml-6 text-sm' : 'text-sm font-medium'
                        )}
                      >
                        {/* Active indicator line */}
                        {isActive && (
                          <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-secondary rounded-r-full" />
                        )}
                        
                        {/* Section number */}
                        <div className={cn(
                          'flex items-center justify-center rounded-lg transition-all duration-300 flex-shrink-0',
                          isSubheading ? 'w-6 h-6 text-xs' : 'w-8 h-8 text-sm',
                          isActive 
                            ? 'bg-gradient-to-br from-primary to-secondary text-white shadow-lg shadow-primary/30' 
                            : 'bg-muted/30 text-muted-foreground group-hover:bg-muted/50 group-hover:text-foreground'
                        )}>
                          {isSubheading ? (
                            <ChevronRight className="w-3 h-3" />
                          ) : (
                            <span className="font-bold">{headings.filter(h => h.level === 2).indexOf(heading) + 1}</span>
                          )}
                        </div>
                        
                        {/* Section title */}
                        <div className="flex-1 min-w-0">
                          <span className="block truncate leading-tight">
                            {heading.text}
                          </span>
                          {isActive && !isSubheading && (
                            <div className="flex items-center gap-1 mt-1">
                              <div className="w-1 h-1 bg-primary/60 rounded-full animate-pulse"></div>
                              <span className="text-xs text-primary/80">Currently reading</span>
                            </div>
                          )}
                        </div>
                        
                        {/* Hover arrow */}
                        <ChevronRight className={cn(
                          'w-4 h-4 transition-all duration-300 flex-shrink-0',
                          isActive ? 'text-primary rotate-90' : 'text-transparent group-hover:text-muted-foreground'
                        )} />
                      </button>
                      
                      {/* Connection line for subheadings */}
                      {isSubheading && (
                        <div className="absolute left-4 -top-2 w-px h-4 bg-border/30"></div>
                      )}
                    </div>
                  );
                })
                )}
              </nav>
            </div>
            
            {/* TOC Footer - Sticky */}
            {lastUpdated && (
              <div className="flex-shrink-0 p-4 border-t border-border/30 bg-muted/10">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <div className="p-1.5 bg-muted/30 rounded-lg">
                    <Clock className="w-3 h-3" />
                  </div>
                  <div>
                    <div className="font-medium">Last Updated</div>
                    <div className="text-xs opacity-80">{lastUpdated.replace('Last updated: ', '')}</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </aside>

        {/* Mobile TOC Overlay */}
        {showToc && (
          <div className="lg:hidden fixed inset-0 z-30 bg-background/80 backdrop-blur-sm animate-fade-in">
            <div className="absolute top-16 right-0 w-80 h-[calc(100vh-4rem)] toc-container glass-panel border-l border-border/30 animate-slide-in-right overflow-hidden">
              {/* Mobile TOC Header */}
              <div className="p-6 border-b border-border/30 bg-gradient-to-r from-primary/5 to-secondary/5">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <div className="p-2.5 bg-gradient-to-br from-primary to-secondary rounded-xl shadow-lg">
                        <FileText className="w-5 h-5 text-white" />
                      </div>
                      <div className="absolute -top-1 -right-1 w-3 h-3 bg-secondary rounded-full animate-pulse"></div>
                    </div>
                    <div>
                      <h2 className="font-bold text-lg text-foreground">Contents</h2>
                      <p className="text-xs text-muted-foreground">
                        {headings.length} sections • {headings.reduce((total, h) => total + (h.readingTime || 0), 0)} min read
                      </p>
                      {headings.length === 0 && (
                        <p className="text-xs text-yellow-500">Loading sections...</p>
                      )}
                      {headings.length > 0 && (
                        <p className="text-xs text-green-500">Showing {headings.length} items</p>
                      )}
                    </div>
                  </div>
                  <button
                    onClick={() => setShowToc(false)}
                    className="p-2 hover:bg-muted/20 rounded-lg transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                
                {/* Mobile Progress indicator */}
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <div className="flex-1 h-1 bg-border/30 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-500 ease-out"
                      style={{ width: `${readingProgress}%` }}
                    />
                  </div>
                  <span className="font-medium">{Math.round(readingProgress)}%</span>
                </div>
              </div>
              
              <div ref={mobileTocNavRef} className="toc-nav-container toc-scrollbar toc-auto-scroll p-4">
                <nav className="toc-nav-list space-y-1">
                  {/* Debug info */}
                  <div className="text-xs text-muted-foreground mb-2 p-2 bg-muted/10 rounded">
                    Rendering {headings.length} total items
                  </div>
                  
                  {headings.length === 0 ? (
                    <div className="text-center py-8 text-muted-foreground">
                      <FileText className="w-8 h-8 mx-auto mb-2 opacity-50" />
                      <p className="text-sm">Loading table of contents...</p>
                    </div>
                  ) : (
                    headings.map((heading, index) => {
                    const isActive = activeId === heading.id;
                    const isSubheading = heading.level === 3;
                    
                    return (
                      <div key={heading.id} className="relative">
                        <button
                          onClick={() => scrollToSection(heading.id)}
                          data-section-id={heading.id}
                          className={cn(
                            'group w-full text-left transition-all duration-300 ease-out relative',
                            'flex items-center gap-3 rounded-lg overflow-hidden',
                            isActive
                              ? 'text-primary font-semibold bg-gradient-to-r from-primary/10 to-secondary/5 border border-primary/20 shadow-md p-3 toc-item-active'
                              : 'text-muted-foreground hover:text-foreground hover:bg-muted/20 border border-transparent p-2.5',
                            isSubheading ? 'ml-6 text-sm' : 'text-sm font-medium'
                          )}
                        >
                          {/* Active indicator line */}
                          {isActive && (
                            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-secondary rounded-r-full" />
                          )}
                          
                          {/* Section number */}
                          <div className={cn(
                            'flex items-center justify-center rounded-lg transition-all duration-300 flex-shrink-0',
                            isSubheading ? 'w-6 h-6 text-xs' : 'w-8 h-8 text-sm',
                            isActive 
                              ? 'bg-gradient-to-br from-primary to-secondary text-white shadow-lg shadow-primary/30' 
                              : 'bg-muted/30 text-muted-foreground group-hover:bg-muted/50 group-hover:text-foreground'
                          )}>
                          {isSubheading ? (
                            <ChevronRight className="w-3 h-3" />
                          ) : (
                            <span className="font-bold">{headings.filter(h => h.level === 2).indexOf(heading) + 1}</span>
                          )}
                          </div>
                          
                          {/* Section title */}
                          <div className="flex-1 min-w-0">
                            <span className="block truncate leading-tight">
                              {heading.text}
                            </span>
                            {isActive && !isSubheading && (
                              <div className="flex items-center gap-1 mt-1">
                                <div className="w-1 h-1 bg-primary/60 rounded-full animate-pulse"></div>
                                <span className="text-xs text-primary/80">Currently reading</span>
                              </div>
                            )}
                            {!isSubheading && heading.readingTime && (
                              <div className="flex items-center gap-1 mt-1">
                                <Clock className="w-3 h-3 text-muted-foreground/60" />
                                <span className="text-xs text-muted-foreground/80">
                                  {heading.readingTime} min read
                                </span>
                              </div>
                            )}
                          </div>
                          
                          {/* Hover arrow */}
                          <ChevronRight className={cn(
                            'w-4 h-4 transition-all duration-300 flex-shrink-0',
                            isActive ? 'text-primary rotate-90' : 'text-transparent group-hover:text-muted-foreground'
                          )} />
                        </button>
                        
                        {/* Connection line for subheadings */}
                        {isSubheading && (
                          <div className="absolute left-4 -top-2 w-px h-4 bg-border/30"></div>
                        )}
                      </div>
                    );
                  })
                  )}
                </nav>
              </div>
            </div>
          </div>
        )}

        {/* Main Content */}
        <main className="flex-1 py-12 px-6 lg:px-16 max-w-5xl mx-auto w-full">
          <div className="max-w-none" ref={contentRef}>
            {/* Header Section */}
            <div className="mb-12 text-center">
              
              <h1 className="text-5xl font-bold mb-4 text-foreground bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">
                {title}
              </h1>
              
              {lastUpdated && (
                <div className="flex items-center justify-center gap-2 text-muted-foreground mb-6">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm">{lastUpdated}</span>
                </div>
              )}
              
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto"></div>
            </div>

            {/* Content */}
            <div className="prose prose-slate dark:prose-invert max-w-none">
              {renderContent()}
            </div>
          </div>
        </main>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-40 p-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      <FooterSection />
    </div>
  );
};
