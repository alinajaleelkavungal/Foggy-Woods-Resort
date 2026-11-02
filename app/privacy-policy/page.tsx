import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | Foggy Woods Resort Meppadi, Wayanad",
  description: "Learn how Foggy Woods Resort collects, uses, and safeguards your personal data when you visit our website or stay at our resort in Meppadi, Wayanad.",
};

const sections = [
  { id: "overview", label: "1. Overview & Commitment" },
  { id: "information-collected", label: "2. Information We Collect" },
  { id: "how-we-use", label: "3. How We Use Information" },
  { id: "sharing-disclosure", label: "4. Sharing & Disclosure" },
  { id: "security-retention", label: "5. Data Security & Storage" },
  { id: "cookies-tracking", label: "6. Cookies & Tracking" },
  { id: "guest-rights", label: "7. Your Rights & Choices" },
  { id: "children-privacy", label: "8. Children's Privacy" },
  { id: "policy-updates", label: "9. Updates to this Policy" },
  { id: "contact-us", label: "10. Contact Information" },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#f9f8f6] text-zinc-800 antialiased selection:bg-[#5d3e2e]/20 selection:text-[#5d3e2e]">
      <Navbar />

      {/* ── Hero Section ── */}
      <header className="pt-32 pb-16 md:pt-40 md:pb-20 px-6 bg-[#1a2416] text-white relative overflow-hidden">
        {/* Subtle atmospheric radial glow */}
        <div 
          className="absolute inset-0 bg-[radial-gradient(circle_at_top_center,rgba(93,62,46,0.2),transparent_70%)] pointer-events-none" 
          aria-hidden="true"
        />
        
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <Link
            href="/"
            className="inline-flex items-center text-white/60 hover:text-white text-xs tracking-[0.25em] uppercase mb-6 transition-colors duration-200"
          >
            ← Back to Home
          </Link>

          <div className="block">
            <span className="inline-block px-3.5 py-1 rounded-full bg-white/10 text-white/90 text-xs tracking-widest uppercase mb-4 font-medium backdrop-blur-sm">
              Legal & Data Protection
            </span>
          </div>

          <h1 
            className="text-4xl sm:text-5xl md:text-6xl mb-5 font-medium tracking-tight text-white"
            style={{ fontFamily: "'Boska', serif", letterSpacing: '-0.02em' }}
          >
            Privacy Policy
          </h1>

          <p 
            className="text-white/70 text-sm md:text-base max-w-2xl mx-auto font-light leading-relaxed"
            style={{ fontFamily: "'Satoshi', sans-serif" }}
          >
            At Foggy Woods Resort, we respect your privacy and are committed to safeguarding your personal information. This Privacy Policy details our practices concerning data collection, usage, and your rights during your reservations, stays, and interactions with our website.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 mt-8 text-xs text-white/50 border-t border-white/10 pt-6">
            <span>Last Updated: November 2026</span>
            <span className="hidden sm:inline">•</span>
            <span>Effective Date: January 1, 2026</span>
            <span className="hidden sm:inline">•</span>
            <span>Applicable to: Foggy Woods Resort, Meppadi, Wayanad</span>
          </div>
        </div>
      </header>

      {/* ── Highlights Strip ── */}
      <section className="bg-white border-b border-stone-200/80 py-8 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-5 rounded-xl bg-[#f9f8f6] border border-stone-200/60">
            <span className="text-[11px] font-semibold text-[#5d3e2e] uppercase tracking-wider block mb-1">
              Commitment 01
            </span>
            <h3 className="text-sm font-semibold text-zinc-900 mb-1" style={{ fontFamily: "'Satoshi', sans-serif" }}>
              Zero Sale of Data
            </h3>
            <p className="text-xs text-zinc-600 leading-relaxed">
              We never sell, monetize, or rent your personal data to any third-party marketers.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-[#f9f8f6] border border-stone-200/60">
            <span className="text-[11px] font-semibold text-[#5d3e2e] uppercase tracking-wider block mb-1">
              Commitment 02
            </span>
            <h3 className="text-sm font-semibold text-zinc-900 mb-1" style={{ fontFamily: "'Satoshi', sans-serif" }}>
              Encrypted & Secure
            </h3>
            <p className="text-xs text-zinc-600 leading-relaxed">
              Industry-grade SSL encryption and secure payment gateways for all reservations.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-[#f9f8f6] border border-stone-200/60">
            <span className="text-[11px] font-semibold text-[#5d3e2e] uppercase tracking-wider block mb-1">
              Commitment 03
            </span>
            <h3 className="text-sm font-semibold text-zinc-900 mb-1" style={{ fontFamily: "'Satoshi', sans-serif" }}>
              Guest Transparency
            </h3>
            <p className="text-xs text-zinc-600 leading-relaxed">
              We collect only what is necessary to deliver your hospitality stay and meet legal mandates.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-[#f9f8f6] border border-stone-200/60">
            <span className="text-[11px] font-semibold text-[#5d3e2e] uppercase tracking-wider block mb-1">
              Commitment 04
            </span>
            <h3 className="text-sm font-semibold text-zinc-900 mb-1" style={{ fontFamily: "'Satoshi', sans-serif" }}>
              Your Rights
            </h3>
            <p className="text-xs text-zinc-600 leading-relaxed">
              You retain full rights to review, update, or request deletion of your contact information.
            </p>
          </div>
        </div>
      </section>

      {/* ── Main Policy Content ── */}
      <main className="flex-1 py-14 md:py-20 max-w-6xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Quick Navigation Sidebar (Desktop Sticky) */}
          <aside className="lg:col-span-4 hidden lg:block">
            <div className="sticky top-28 space-y-6">
              <div className="bg-white p-6 rounded-2xl border border-stone-200/80 shadow-xs">
                <h2 
                  className="text-base font-semibold text-zinc-900 uppercase tracking-wider mb-4 pb-3 border-b border-stone-100"
                  style={{ fontFamily: "'Satoshi', sans-serif" }}
                >
                  Contents
                </h2>
                <nav className="space-y-1.5">
                  {sections.map((section) => (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      className="block text-xs font-medium text-zinc-600 hover:text-[#5d3e2e] hover:bg-[#5d3e2e]/5 px-2.5 py-1.5 rounded-lg transition-colors duration-150"
                      style={{ fontFamily: "'Satoshi', sans-serif" }}
                    >
                      {section.label}
                    </a>
                  ))}
                </nav>
              </div>

              {/* Direct Support Card */}
              <div className="bg-[#1a2416] text-white p-6 rounded-2xl shadow-sm">
                <h3 
                  className="text-lg font-medium mb-2 text-white"
                  style={{ fontFamily: "'Boska', serif" }}
                >
                  Privacy Inquiries?
                </h3>
                <p 
                  className="text-white/70 text-xs leading-relaxed mb-4"
                  style={{ fontFamily: "'Satoshi', sans-serif" }}
                >
                  Our management team is happy to assist you with any questions regarding personal data or privacy rights.
                </p>
                <div className="space-y-3 text-xs text-white/80">
                  <div>
                    <span className="text-white/50 block text-[11px] uppercase tracking-wider mb-0.5">Email</span>
                    <a 
                      href="mailto:foggywoods1@gmail.com" 
                      className="hover:text-white transition-colors underline"
                    >
                      foggywoods1@gmail.com
                    </a>
                  </div>
                  <div>
                    <span className="text-white/50 block text-[11px] uppercase tracking-wider mb-0.5">Phone</span>
                    <div className="space-y-0.5">
                      <a 
                        href="tel:+919074450023" 
                        className="block hover:text-white transition-colors"
                      >
                        +91 9074450023
                      </a>
                      <a 
                        href="tel:+919074410023" 
                        className="block hover:text-white transition-colors"
                      >
                        +91 9074410023
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* Policy Articles */}
          <article className="lg:col-span-8 space-y-12">

            {/* 1. Overview */}
            <section id="overview" className="scroll-mt-28 bg-white p-8 md:p-10 rounded-2xl border border-stone-200/80 shadow-xs">
              <h2 
                className="text-2xl md:text-3xl text-zinc-900 font-medium mb-4 pb-3 border-b border-stone-100"
                style={{ fontFamily: "'Boska', serif" }}
              >
                1. Overview & Commitment
              </h2>
              <div className="space-y-4 text-zinc-600 text-sm md:text-base leading-relaxed" style={{ fontFamily: "'Satoshi', sans-serif" }}>
                <p>
                  Foggy Woods Resort (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) operates the boutique hospitality retreat located at Meppadi Rd, Chundale, Kunnampetta, Wayanad, Kerala 673123. We pride ourselves on providing a peaceful sanctuary amidst the misty hills of Wayanad, and this ethos extends to respecting and protecting the privacy of our valued guests, website visitors, and booking clients.
                </p>
                <p>
                  This Privacy Policy applies to all personal information collected via our website, direct WhatsApp communications, telephonic reservations, on-site check-in registers, and associated digital services. By browsing our website, reserving accommodations, or staying at Foggy Woods Resort, you acknowledge the terms detailed in this document.
                </p>
              </div>
            </section>

            {/* 2. Information We Collect */}
            <section id="information-collected" className="scroll-mt-28 bg-white p-8 md:p-10 rounded-2xl border border-stone-200/80 shadow-xs">
              <h2 
                className="text-2xl md:text-3xl text-zinc-900 font-medium mb-4 pb-3 border-b border-stone-100"
                style={{ fontFamily: "'Boska', serif" }}
              >
                2. Information We Collect
              </h2>
              <div className="space-y-4 text-zinc-600 text-sm md:text-base leading-relaxed" style={{ fontFamily: "'Satoshi', sans-serif" }}>
                <p>
                  To manage reservations smoothly and provide exceptional hospitality, we may collect the following categories of information:
                </p>

                <div className="space-y-4 my-6">
                  <div className="p-4 rounded-xl bg-stone-50 border border-stone-200/60">
                    <h3 className="font-semibold text-zinc-900 text-sm md:text-base mb-1">
                      A. Personal Identification & Contact Details
                    </h3>
                    <p className="text-sm text-zinc-600">
                      Full name, residential address, telephone / WhatsApp phone numbers, email address, and emergency contact details provided when inquiring or placing a reservation.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-stone-50 border border-stone-200/60">
                    <h3 className="font-semibold text-zinc-900 text-sm md:text-base mb-1">
                      B. Mandatory Guest Verification Documents (Statutory Requirement)
                    </h3>
                    <p className="text-sm text-zinc-600">
                      As mandated by Indian law and the Kerala Tourism Department, every staying adult guest must present a government-issued photo ID (Aadhaar, Passport, Voter ID, or Driver&apos;s License) at check-in. For international travelers, valid passport and visa details are recorded in compliance with Form C requirements.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-stone-50 border border-stone-200/60">
                    <h3 className="font-semibold text-zinc-900 text-sm md:text-base mb-1">
                      C. Stay Preferences & Special Requests
                    </h3>
                    <p className="text-sm text-zinc-600">
                      Dates of arrival and departure, room category (Grand Family Suite, Premier Family Suite, Private Pool Villa, or Double Deluxe Room), dietary preferences, campfire requests, special celebrations, and notes for customized service.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-stone-50 border border-stone-200/60">
                    <h3 className="font-semibold text-zinc-900 text-sm md:text-base mb-1">
                      D. Payment & Billing Information
                    </h3>
                    <p className="text-sm text-zinc-600">
                      Transaction reference numbers, payment mode (UPI, bank transfer, card payments). Note that full credit or debit card credentials are processed via encrypted third-party payment gateways; Foggy Woods Resort never stores raw credit or debit card numbers on its servers.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-stone-50 border border-stone-200/60">
                    <h3 className="font-semibold text-zinc-900 text-sm md:text-base mb-1">
                      E. Technical & Browsing Data
                    </h3>
                    <p className="text-sm text-zinc-600">
                      When visiting our website, our server logs may collect your IP address, browser type, operating system, referring URL, pages viewed, and visit timestamps to assist with website optimization and security monitoring.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* 3. How We Use Your Information */}
            <section id="how-we-use" className="scroll-mt-28 bg-white p-8 md:p-10 rounded-2xl border border-stone-200/80 shadow-xs">
              <h2 
                className="text-2xl md:text-3xl text-zinc-900 font-medium mb-4 pb-3 border-b border-stone-100"
                style={{ fontFamily: "'Boska', serif" }}
              >
                3. How We Use Information
              </h2>
              <div className="space-y-4 text-zinc-600 text-sm md:text-base leading-relaxed" style={{ fontFamily: "'Satoshi', sans-serif" }}>
                <p>We use the collected information solely for legitimate hospitality and business operations:</p>
                
                <ul className="space-y-2.5 list-disc pl-5">
                  <li><strong>Reservation Processing:</strong> Facilitating check-in/check-out, room allocation, sending booking vouchers, itinerary reminders, and route guidance to Meppadi, Wayanad.</li>
                  <li><strong>Personalized Hospitality:</strong> Tailoring your stay experience, arranging dining preferences, private pool amenities, campfire arrangements, and special requests.</li>
                  <li><strong>Customer Service:</strong> Responding promptly to your WhatsApp messages, emails, questions, and billing inquiries.</li>
                  <li><strong>Regulatory & Legal Compliance:</strong> Maintaining official guest registers and submitting foreign guest records in accordance with Indian immigration laws and local law enforcement mandates.</li>
                  <li><strong>Website Optimization:</strong> Monitoring site traffic and diagnosing technical issues to ensure a responsive digital experience.</li>
                  <li><strong>Direct Communications:</strong> Sending booking confirmations, stay feedback requests, and occasional seasonal retreat updates (which you can opt out of at any time).</li>
                </ul>

                <div className="p-4 mt-4 rounded-xl bg-[#5d3e2e]/5 border-l-4 border-[#5d3e2e] text-[#5d3e2e]">
                  <p className="text-xs md:text-sm">
                    <strong>Our Promise:</strong> We never engage in cold calling, spam marketing, or selling your phone number or email address to third-party telemarketers or advertisers.
                  </p>
                </div>
              </div>
            </section>

            {/* 4. Sharing & Disclosure */}
            <section id="sharing-disclosure" className="scroll-mt-28 bg-white p-8 md:p-10 rounded-2xl border border-stone-200/80 shadow-xs">
              <h2 
                className="text-2xl md:text-3xl text-zinc-900 font-medium mb-4 pb-3 border-b border-stone-100"
                style={{ fontFamily: "'Boska', serif" }}
              >
                4. Sharing & Disclosure
              </h2>
              <div className="space-y-4 text-zinc-600 text-sm md:text-base leading-relaxed" style={{ fontFamily: "'Satoshi', sans-serif" }}>
                <p>
                  We treat your personal information with strict confidentiality. We do not sell, trade, or transfer personal data, except in the specific situations outlined below:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                  <div className="p-4 rounded-xl border border-stone-200 bg-stone-50/50">
                    <h4 className="font-semibold text-zinc-900 text-sm mb-1">Trusted Service Providers</h4>
                    <p className="text-xs text-zinc-600">
                      Payment gateways, web hosting providers, and communication platforms (such as WhatsApp Business API) who are bound by strict non-disclosure obligations.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl border border-stone-200 bg-stone-50/50">
                    <h4 className="font-semibold text-zinc-900 text-sm mb-1">Legal Authorities</h4>
                    <p className="text-xs text-zinc-600">
                      When required by law, court order, or official request by police authorities or the Tourism Ministry for guest verification or investigation.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl border border-stone-200 bg-stone-50/50">
                    <h4 className="font-semibold text-zinc-900 text-sm mb-1">Health & Safety Emergencies</h4>
                    <p className="text-xs text-zinc-600">
                      In case of medical emergencies or safety incidents where sharing critical guest details with local hospitals, doctors, or emergency response teams is necessary.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl border border-stone-200 bg-stone-50/50">
                    <h4 className="font-semibold text-zinc-900 text-sm mb-1">Business Transfers</h4>
                    <p className="text-xs text-zinc-600">
                      In the rare event of a resort reorganization, merger, or asset transfer, guest data may be transferred to the successor entity under equivalent privacy standards.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* 5. Data Security & Storage */}
            <section id="security-retention" className="scroll-mt-28 bg-white p-8 md:p-10 rounded-2xl border border-stone-200/80 shadow-xs">
              <h2 
                className="text-2xl md:text-3xl text-zinc-900 font-medium mb-4 pb-3 border-b border-stone-100"
                style={{ fontFamily: "'Boska', serif" }}
              >
                5. Data Security & Storage
              </h2>
              <div className="space-y-4 text-zinc-600 text-sm md:text-base leading-relaxed" style={{ fontFamily: "'Satoshi', sans-serif" }}>
                <p>
                  We implement robust administrative, technical, and physical security measures to protect your personal information against unauthorized access, loss, misuse, or alteration:
                </p>
                <ul className="space-y-2 list-disc pl-5">
                  <li><strong>SSL/TLS Encryption:</strong> All data transmitted to and from our website is protected using industry-standard Secure Sockets Layer (SSL) encryption.</li>
                  <li><strong>Restricted Access:</strong> Only authorized resort administrative and front-desk personnel with a direct need to know have access to guest registers and contact logs.</li>
                  <li><strong>Physical Security:</strong> Physical guest registration folios and ID photocopies are stored in secure, locked administrative facilities.</li>
                  <li><strong>Retention Period:</strong> We retain guest records only for the period mandated by hospitality and tax laws (typically up to 5 to 7 years for financial records), after which they are securely shredded or permanently purged.</li>
                </ul>
              </div>
            </section>

            {/* 6. Cookies & Tracking */}
            <section id="cookies-tracking" className="scroll-mt-28 bg-white p-8 md:p-10 rounded-2xl border border-stone-200/80 shadow-xs">
              <h2 
                className="text-2xl md:text-3xl text-zinc-900 font-medium mb-4 pb-3 border-b border-stone-100"
                style={{ fontFamily: "'Boska', serif" }}
              >
                6. Cookies & Tracking
              </h2>
              <div className="space-y-4 text-zinc-600 text-sm md:text-base leading-relaxed" style={{ fontFamily: "'Satoshi', sans-serif" }}>
                <p>
                  Our website uses cookies and similar technologies to enhance your browsing experience:
                </p>
                <div className="space-y-3">
                  <div className="p-3.5 rounded-lg bg-stone-50 border border-stone-200/60">
                    <strong className="text-zinc-900 text-sm">Essential Cookies:</strong>
                    <span className="text-sm text-zinc-600 block mt-0.5">Required for the website to function properly, including navigation, responsive layouts, and booking inquiry routing.</span>
                  </div>
                  <div className="p-3.5 rounded-lg bg-stone-50 border border-stone-200/60">
                    <strong className="text-zinc-900 text-sm">Performance & Analytics Cookies:</strong>
                    <span className="text-sm text-zinc-600 block mt-0.5">Help us understand which pages and resort amenities interest our visitors most, allowing us to enhance site speed and usability.</span>
                  </div>
                </div>
                <p className="text-xs text-zinc-500">
                  You can set your browser to refuse cookies or alert you when cookies are being sent. Note that some portions of the site may function with reduced functionality if cookies are disabled.
                </p>
              </div>
            </section>

            {/* 7. Your Rights & Choices */}
            <section id="guest-rights" className="scroll-mt-28 bg-white p-8 md:p-10 rounded-2xl border border-stone-200/80 shadow-xs">
              <h2 
                className="text-2xl md:text-3xl text-zinc-900 font-medium mb-4 pb-3 border-b border-stone-100"
                style={{ fontFamily: "'Boska', serif" }}
              >
                7. Your Rights & Choices
              </h2>
              <div className="space-y-4 text-zinc-600 text-sm md:text-base leading-relaxed" style={{ fontFamily: "'Satoshi', sans-serif" }}>
                <p>
                  You have several rights regarding the personal information we maintain about you:
                </p>
                <ul className="space-y-2 list-disc pl-5">
                  <li><strong>Right to Access:</strong> Request a copy of the personal information we hold about you.</li>
                  <li><strong>Right to Rectification:</strong> Request correction of inaccurate, incomplete, or outdated details.</li>
                  <li><strong>Right to Deletion:</strong> Request the deletion of your personal contact data, subject to statutory hospitality record-keeping mandates.</li>
                  <li><strong>Opt-Out:</strong> Unsubscribe from non-essential promotional messages or seasonal offers by notifying us at <a href="mailto:foggywoods1@gmail.com" className="text-[#5d3e2e] underline font-medium">foggywoods1@gmail.com</a>.</li>
                </ul>
              </div>
            </section>

            {/* 8. Children's Privacy */}
            <section id="children-privacy" className="scroll-mt-28 bg-white p-8 md:p-10 rounded-2xl border border-stone-200/80 shadow-xs">
              <h2 
                className="text-2xl md:text-3xl text-zinc-900 font-medium mb-4 pb-3 border-b border-stone-100"
                style={{ fontFamily: "'Boska', serif" }}
              >
                8. Children&apos;s Privacy
              </h2>
              <div className="space-y-4 text-zinc-600 text-sm md:text-base leading-relaxed" style={{ fontFamily: "'Satoshi', sans-serif" }}>
                <p>
                  Foggy Woods Resort warmly welcomes families and children. However, our online services are not targeted towards persons under 18 years of age. We do not knowingly collect personal data directly from children online without parental or guardian consent. Information regarding minor guests staying at our resort must be submitted exclusively by a parent or legal guardian during the reservation and check-in process.
                </p>
              </div>
            </section>

            {/* 9. Updates to this Policy */}
            <section id="policy-updates" className="scroll-mt-28 bg-white p-8 md:p-10 rounded-2xl border border-stone-200/80 shadow-xs">
              <h2 
                className="text-2xl md:text-3xl text-zinc-900 font-medium mb-4 pb-3 border-b border-stone-100"
                style={{ fontFamily: "'Boska', serif" }}
              >
                9. Updates to this Policy
              </h2>
              <div className="space-y-4 text-zinc-600 text-sm md:text-base leading-relaxed" style={{ fontFamily: "'Satoshi', sans-serif" }}>
                <p>
                  We reserve the right to modify or update this Privacy Policy periodically to reflect changes in our operational procedures, legal mandates, or technology. Any modifications will be posted directly on this page with an updated &ldquo;Last Updated&rdquo; date. We encourage you to review this policy periodically.
                </p>
              </div>
            </section>

            {/* 10. Contact Information */}
            <section id="contact-us" className="scroll-mt-28 bg-white p-8 md:p-10 rounded-2xl border border-stone-200/80 shadow-xs">
              <h2 
                className="text-2xl md:text-3xl text-zinc-900 font-medium mb-4 pb-3 border-b border-stone-100"
                style={{ fontFamily: "'Boska', serif" }}
              >
                10. Contact Information
              </h2>
              <div className="space-y-4 text-zinc-600 text-sm md:text-base leading-relaxed" style={{ fontFamily: "'Satoshi', sans-serif" }}>
                <p>
                  If you have questions, feedback, or concerns regarding this Privacy Policy or wish to exercise your data rights, please contact our management team:
                </p>
                <div className="p-6 rounded-xl bg-stone-50 border border-stone-200/70 space-y-4 mt-4">
                  <h3 className="font-semibold text-zinc-900 text-lg" style={{ fontFamily: "'Boska', serif" }}>
                    Foggy Woods Resort
                  </h3>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-zinc-400 block mb-0.5">Address</span>
                    <p className="text-sm text-zinc-700">Meppadi Rd, Wayanad, Chundale, Kunnampetta, Kerala 673123, India</p>
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-zinc-400 block mb-0.5">Email</span>
                    <a href="mailto:foggywoods1@gmail.com" className="text-sm text-zinc-700 hover:text-zinc-900 transition-colors underline">
                      foggywoods1@gmail.com
                    </a>
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-zinc-400 block mb-0.5">Phone</span>
                    <div className="flex flex-wrap gap-x-4 text-sm text-zinc-700">
                      <a href="tel:+919074450023" className="hover:text-zinc-900 transition-colors">
                        +91 9074450023
                      </a>
                      <a href="tel:+919074410023" className="hover:text-zinc-900 transition-colors">
                        +91 9074410023
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>

          </article>
        </div>
      </main>

      <Footer />
    </div>
  );
}
