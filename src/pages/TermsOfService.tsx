import { LegalPage } from "@/components/LegalPage";

const termsContent = `## 1. INTRODUCTION

Welcome to **Govitrix Corporation** ("Govitrix", "we", "us", or "our").  
These Terms & Conditions ("**Terms**") govern your access to and use of:
- The website [www.govitrix.com](https://www.govitrix.com)
- All consulting, engineering, AI, analytics, cloud, product, and digital services
- All proposals, communications, documentation, and deliverables

By accessing or using our Website or Services, you agree to be bound by these Terms.  
If you do not agree, you must discontinue use immediately.

## 2. DEFINITIONS

- **Client**: Any individual or entity engaging Govitrix for services
- **Services**: Professional technology, consulting, and engineering services provided by Govitrix
- **Website**: [www.govitrix.com](https://www.govitrix.com) and related pages
- **Agreement**: These Terms, Privacy Policy, and any executed MSA, SOW, NDA, or DPA
- **Deliverables**: Work products defined in an SOW

## 3. ELIGIBILITY & AUTHORITY

You represent and warrant that:
- You are at least 18 years of age
- You have legal authority to bind the entity you represent
- Your use of the Services complies with applicable laws

## 4. SCOPE OF SERVICES

Govitrix provides professional services including, but not limited to:
- Web & Mobile Application Development
- AI, Machine Learning & Data Analytics
- Product Strategy, MVP Development & Consulting
- UI/UX Design, Interaction Systems & Branding
- Cloud Architecture, DevOps & Performance Engineering
- Digital Transformation & Technology Advisory

All commercial terms (scope, pricing, timelines, IP ownership) are governed by written contracts such as MSAs and SOWs.  
In case of conflict, executed contracts prevail over these Terms.

## 5. NO GUARANTEE OF BUSINESS OUTCOMES

Govitrix provides services on a professional, best-effort basis.  
We do not guarantee:
- Revenue, profit, or user growth
- Funding or investment success
- Market acceptance or regulatory approvals
- Performance beyond contractual specifications

Business decisions and outcomes remain solely the Client's responsibility.

## 6. WEBSITE USE & RESTRICTIONS

You agree not to:
- Copy, scrape, reverse-engineer, or misuse Website content
- Introduce malware, security threats, or harmful code
- Impersonate Govitrix or misrepresent affiliation
- Violate intellectual property or applicable laws

We may restrict or terminate access for violations.

## 7. INTELLECTUAL PROPERTY RIGHTS

### 7.1 Govitrix IP
All pre-existing materials, frameworks, methodologies, templates, libraries, designs, and know-how remain the exclusive IP of Govitrix unless expressly transferred in writing.

### 7.2 Client IP
Client-provided materials remain Client property.

### 7.3 Project Deliverables
Ownership and licensing of Deliverables are governed by the applicable SOW or Agreement.

## 8. OPEN-SOURCE & THIRD-PARTY SOFTWARE

Deliverables may include open-source or third-party components governed by their respective licenses.  
Govitrix makes no warranties beyond those licenses and disclaims liability arising from third-party software.

## 9. CONFIDENTIALITY

Each party shall maintain strict confidentiality of non-public information received during the engagement.  
Confidentiality obligations survive termination of the Agreement.

## 10. AI & ANALYTICS DISCLAIMER

- AI outputs, analytics, and recommendations are advisory in nature
- Govitrix does not guarantee accuracy, completeness, or suitability of AI results
- Clients remain responsible for decisions based on AI outputs
- Client data is not used to train AI models without explicit written consent

## 11. PAYMENTS, TAXES & GST

- Fees are exclusive of applicable taxes unless stated otherwise
- GST (India) shall be charged as applicable
- Clients are responsible for withholding taxes, bank fees, and currency charges
- Late payments may result in service suspension or termination

## 12. SERVICE SUSPENSION

Govitrix may suspend Services if:
- Payments are overdue
- Client breaches contractual obligations
- Legal, compliance, or security risks arise

## 13. NON-SOLICITATION

Clients shall not solicit or hire Govitrix employees or contractors during engagement and for 12 months thereafter without written consent.

## 14. THIRD-PARTY SERVICES

Govitrix is not responsible for:
- Availability or performance of cloud providers
- API pricing or policy changes
- Third-party outages or failures

## 15. LIMITATION OF LIABILITY

To the maximum extent permitted by law:
- Govitrix is not liable for indirect, incidental, or consequential damages
- Total liability is limited to fees paid in the preceding 6 months

## 16. INDEMNIFICATION

Client agrees to indemnify and hold Govitrix harmless against claims arising from:
- Client content or instructions
- Misuse of Services
- Regulatory or legal violations

## 17. TERMINATION

Termination shall be governed by contractual terms.  
Upon termination:
- Outstanding payments become immediately due
- Confidentiality, IP, liability, and governing law clauses survive

## 18. FORCE MAJEURE

Neither party is liable for delays or failures due to events beyond reasonable control, including cyber incidents, natural disasters, or governmental actions.

## 19. EXPORT CONTROL & SANCTIONS

Client confirms compliance with all applicable export control, trade, and sanctions laws.

## 20. PUBLICITY & PORTFOLIO RIGHTS

Unless restricted in writing, Govitrix may reference Client name and logo for marketing and portfolio purposes.

## 21. GOVERNING LAW & JURISDICTION

These Terms are governed by the laws of India.  
Jurisdiction lies exclusively with courts in Noida, India unless otherwise agreed.

## 22. SEVERABILITY

If any provision is held unenforceable, remaining provisions remain in full force.

## 23. ENTIRE AGREEMENT

These Terms, together with the Privacy Policy and executed contracts, constitute the entire agreement between the parties.

## 24. CONTACT INFORMATION

**Govitrix Corporation**  
Email: sales@govitrix.com  
Website: https://www.govitrix.com`;

const TermsOfService = () => {
  return (
    <LegalPage 
      title="Terms of Service" 
      content={termsContent} 
      lastUpdated="December 28, 2025"
    />
  );
};

export default TermsOfService;
