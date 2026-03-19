import {
  Shield,
  Eye,
  Lock,
  Database,
  Cookie,
  Mail,
  CheckCircle,
} from "lucide-react";

export default function PrivacyPage() {
  const sections = [
    {
      icon: Shield,
      title: "Information We Collect",
      content:
        "We collect information you provide directly to us, including your name, email address, postal address, phone number, and payment information. We also automatically collect certain information about your device and how you interact with our services.",
    },
    {
      icon: Eye,
      title: "How We Use Your Information",
      content:
        "We use the information we collect to process orders, communicate with you about products and promotions, provide customer service, personalize your experience, and improve our services.",
    },
    {
      icon: Lock,
      title: "Information Security",
      content:
        "We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no internet transmission is ever completely secure.",
    },
    {
      icon: Database,
      title: "Information Sharing",
      content:
        "We do not sell your personal information. We may share your information with service providers who perform services on our behalf, in response to legal requests, or to protect our rights and the rights of others.",
    },
    {
      icon: Cookie,
      title: "Cookies and Tracking",
      content:
        "We use cookies and similar tracking technologies to collect information about your browsing activities. You can control cookies through your browser settings, but disabling cookies may limit your use of certain features.",
    },
    {
      icon: Mail,
      title: "Your Rights",
      content:
        "You have the right to access, correct, or delete your personal information. You can also object to or restrict certain processing of your data. Contact us to exercise these rights.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-primary/10 py-12 px-4">
      <div className="main_container max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-primary/10 flex items-center justify-center">
            <Shield className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Privacy Policy
          </h1>
          <p className="text-lg text-muted-foreground">
            Last updated:{" "}
            {new Date().toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>

        {/* Introduction */}
        <div className="border rounded-2xl bg-card p-6 md:p-8 mb-8 shadow-lg">
          <p className="text-muted-foreground leading-relaxed mb-4">
            At Nexton, we take your privacy seriously. This Privacy Policy
            explains how we collect, use, disclose, and safeguard your
            information when you visit our website or make purchases.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Please read this privacy policy carefully. If you do not agree with
            the terms of this privacy policy, please do not access the site.
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-6">
          {sections.map((section, index) => {
            const Icon = section.icon;
            return (
              <div
                key={index}
                className="border rounded-2xl bg-card overflow-hidden shadow-lg"
              >
                <div className="bg-secondary/50 p-6 border-b">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <h2 className="text-xl font-bold">{section.title}</h2>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {section.content}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Contact Section */}
        <div className="border rounded-2xl bg-card p-8 mt-8 shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <p className="text-muted-foreground mb-6">
            If you have questions about this Privacy Policy, please contact us:
          </p>
          <div className="space-y-2">
            <p className="text-muted-foreground">
              Email:{" "}
              <a
                href="mailto:privacy@nexton.com"
                className="text-primary hover:underline"
              >
                privacy@nexton.com
              </a>
            </p>
            <p className="text-muted-foreground">
              Address: 123 Business Street, City, Country
            </p>
          </div>
        </div>

        {/* Notice */}
        <div className="border rounded-2xl bg-card p-6 mt-8 text-center shadow-lg">
          <p className="text-muted-foreground">
            By using our services, you acknowledge that you have read and
            understood this Privacy Policy.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mt-4">
            <a
              href="/terms"
              className="text-primary font-semibold hover:underline"
            >
              Terms of Service
            </a>
            <span className="text-muted-foreground">•</span>
            <a
              href="/contact"
              className="text-primary font-semibold hover:underline"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
