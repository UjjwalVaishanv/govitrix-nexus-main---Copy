import { LegalPage } from "@/components/LegalPage";

const privacyContent = `Govitrix Corporation (“Govitrix”, “we”, “us”, or “our”) is a next-generation technology and product engineering firm committed to protecting the privacy, confidentiality, and security of personal information entrusted to us.
This Privacy Policy explains how we collect, use, process, store, disclose, transfer, and protect personal data when you:
- Visit or use our website https://www.govitrix.com ("Website")
- Engage with our services, consultations, products, or solutions
- Communicate with us via email, forms, chat, phone, or social platforms
- Participate in events, webinars, hiring processes, or partnerships
- By accessing or using our Website or Services, you agree to the practices described in this Privacy Policy.


## 1. SCOPE OF THIS POLICY

This Privacy Policy applies to:

- Website visitors
- Business prospects and clients
- Partners and vendors
- Job applicants
- Authorized users of Govitrix platforms or tools

This policy does not apply to third-party websites or platforms linked from our Website.

## 2. INFORMATION WE COLLECT

### 2.1 Information You Provide Directly

We may collect personal information that you voluntarily provide, including but not limited to:

- Full name
- Email address
- Phone number
- Company name
- Job title or designation
- Project details or business requirements
- Resume, portfolio, or employment information
- Billing or payment details (where applicable)
- Communications and correspondence with us

### 2.2 Information Collected Automatically

When you access our Website, we automatically collect certain technical and usage data, including:

- Browser type and version
- Device information
- Operating system
- Pages visited, session duration, clickstream data
- Referring URLs
- Approximate geographic location

### 2.3 Cookies & Tracking Technologies

We use cookies, pixels, tags, and similar technologies to enhance performance and experience.

**Types of cookies used:**
- Strictly Necessary Cookies
- Performance & Analytics Cookies
- Functional Cookies
- Marketing & Advertising Cookies

You may manage cookies through browser settings; however, disabling essential cookies may affect functionality.

### 2.4 Third-Party Sources

We may receive information from:
- Analytics providers (e.g., Google Analytics)
- Marketing and CRM platforms
- Business partners and referral sources
- Publicly available databases

## 3. HOW WE USE YOUR INFORMATION

### 3.1 Service Delivery & Operations
- Responding to inquiries and requests
- Providing consulting, development, and engineering services
- Managing contracts and engagements

### 3.2 Communication
- Sending updates, proposals, newsletters, and service information
- Customer support and issue resolution

### 3.3 Marketing & Growth
- Personalizing content and outreach
- Improving campaigns and engagement
- Showcasing relevant offerings

### 3.4 Analytics & Improvement
- Website optimization and UX improvements
- Trend analysis and performance monitoring

### 3.5 Legal, Security & Compliance
- Fraud prevention and risk mitigation
- Regulatory compliance
- Enforcing agreements and policies

## 4. LEGAL BASIS FOR PROCESSING

Depending on jurisdiction, processing is based on:
- Your consent
- Contractual necessity
- Legitimate business interests
- Legal and regulatory obligations

## 5. CLIENT DATA VS WEBSITE DATA

Client project data is handled strictly under contractual agreements (NDAs, MSAs, DPAs) and is logically and operationally separated from website visitor data.

Client data is never reused, resold, or shared beyond agreed contractual terms.

## 6. AI & DATA USAGE DISCLOSURE

Govitrix does not use client confidential data to train AI models or systems unless explicitly authorized in writing.

All AI-enabled services are delivered with human oversight, transparency, and contractual safeguards.

## 7. DISCLOSURE OF INFORMATION

### 7.1 Service Providers
Trusted third-party vendors for:
- Hosting & cloud infrastructure
- CRM and marketing tools
- Analytics and communication services

All such providers are bound by confidentiality and data protection obligations.

### 7.2 Legal & Regulatory Authorities
When required by law, regulation, or legal process.

### 7.3 Business Transactions
In case of merger, acquisition, or restructuring, data may be transferred under appropriate safeguards.

## 8. DATA RETENTION

We retain personal data only as long as necessary.

| Data Category       | Retention Period |
|---------------------|------------------|
| Website inquiries   | 2–5 years       |
| Marketing consent   | Until withdrawn  |
| Client records      | 7+ years        |
| Recruitment data    | 1–2 years       |
| Analytics data      | Up to 24 months |

## 9. INTERNATIONAL DATA TRANSFERS

Your data may be processed in countries outside your residence, including India. Appropriate safeguards are implemented to ensure lawful transfers.

## 10. DATA SECURITY

We implement industry-standard measures including:
- Encryption in transit and at rest
- Access controls and authentication
- Secure cloud infrastructure
- Regular audits and monitoring
- Incident response protocols

No system is 100% secure, but we continuously enhance safeguards.

## 11. DATA BREACH NOTIFICATION

In the event of a data breach involving personal data, Govitrix will notify affected individuals and authorities as required by applicable law.

## 12. YOUR RIGHTS

**GDPR (EU/UK)**
- Access, correction, deletion
- Restriction and objection
- Data portability
- Withdraw consent

**CCPA/CPRA (California)**
- Know, delete, opt-out
- Non-discrimination

**India (DPDP Act)**
- Access and correction
- Grievance redressal

Requests can be sent to **sales@govitrix.com**.

## 13. GRIEVANCE REDRESSAL (INDIA)

**Grievance Officer**  
Email: sales@govitrix.com  
Response Time: Within 7 business days

## 14. CHILDREN'S PRIVACY

Our services are not intended for individuals under 16. We do not knowingly collect such data.

## 15. THIRD-PARTY LINKS

We are not responsible for third-party websites or platforms linked from our Website.

## 16. CHANGES TO THIS POLICY

We may update this policy periodically. Changes will be reflected with a revised "Last Updated" date.

## 17. YOUR ACCEPTANCE OF THIS POLICY

If you are using our website, you signify your acceptance of this privacy policy. If you don't agree to the policy, please do not use Govitrix's site. Your continued use of Govitrix's site following the sharing of changes to this privacy policy will be deemed as your acceptance of those updates and changes.

## 18. CONTACT INFORMATION

**Govitrix Corporation**  
Website: https://www.govitrix.com  
Email/Privacy Contact: sales@govitrix.com`;
const PrivacyPolicy = () => {
  return (
    <LegalPage 
      title="Privacy Policy"
      content={privacyContent}
      lastUpdated="Last updated: January 1, 2026"
    />
  );
};

export default PrivacyPolicy;
