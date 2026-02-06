import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQSection = () => {
  const faqs = [
    {
      question: "How do we start a project with Govitrix?",
      answer: "Getting started is simple! Reach out via our contact form or email, and we'll schedule a discovery call to understand your vision, requirements, and goals. From there, we'll create a tailored proposal and roadmap.",
    },
    {
      question: "What industries do you serve?",
      answer: "We serve a wide range of industries including Fintech, Healthcare, eCommerce, EdTech, AI Startups, and Enterprise Solutions. Our expertise allows us to adapt to any sector requiring digital transformation.",
    },
    {
      question: "How do you ensure security and confidentiality?",
      answer: "We take security seriously. All projects are protected by NDA agreements, we use enterprise-grade security protocols, implement GDPR-compliant workflows, and maintain regular backups with comprehensive version control.",
    },
    {
      question: "Do you work with startups and enterprises?",
      answer: "Absolutely! We work with businesses of all sizes, from early-stage startups to established enterprises. Our flexible engagement models and scalable solutions ensure we can meet your specific needs.",
    },
    {
      question: "What are typical project timelines?",
      answer: "Timelines vary based on project complexity and scope. Simple projects may take 4-8 weeks, while complex enterprise solutions can take 3-6 months or more. We provide detailed timelines during our initial planning phase.",
    },
    {
      question: "What engagement models do you offer?",
      answer: "We offer flexible engagement models including Fixed Price Projects, Time & Material, Dedicated Teams, and Consulting Services. We'll work with you to find the best fit for your project requirements and budget.",
    },
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            FAQ's
          </h2>
        </div>

        <div className="max-w-4xl mx-auto glass-panel p-8 rounded-2xl">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-border/50">
                <AccordionTrigger className="text-left hover:text-primary transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
