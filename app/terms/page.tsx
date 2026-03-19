import { Shield, FileText, CheckCircle } from "lucide-react";

export default function TermsPage() {
  const sections = [
    {
      title: "1. Acceptance of Terms",
      content:
        "By accessing and using Nexton, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by these terms, please do not use this service.",
    },
    {
      title: "2. Use License",
      content:
        "Permission is granted to temporarily access the materials (information or software) on Nexton for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.",
    },
    {
      title: "3. Product Information",
      content:
        "We strive to provide accurate product descriptions, images, and pricing. However, we do not warrant that product descriptions or other content is accurate, complete, reliable, current, or error-free.",
    },
    {
      title: "4. Orders and Payment",
      content:
        "All orders are subject to acceptance and availability. We reserve the right to refuse or cancel any order for any reason. Prices are subject to change without notice.",
    },
    {
      title: "5. Shipping and Delivery",
      content:
        "Shipping times are estimates and not guaranteed. We are not responsible for delays caused by customs, weather, or other factors beyond our control.",
    },
    {
      title: "6. Returns and Refunds",
      content:
        "Items may be returned within 30 days of receipt in unused condition with original packaging. Refunds will be processed within 5-7 business days of receiving the return.",
    },
    {
      title: "7. Limitations",
      content:
        "In no event shall Nexton or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Nexton.",
    },
    {
      title: "8. Modifications",
      content:
        "Nexton may revise these terms of service at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.",
    },
    {
      title: "9. Governing Law",
      content:
        "These terms and conditions are governed by and construed in accordance with the laws and you irrevocably submit to the exclusive jurisdiction of the courts in that location.",
    },
    {
      title: "10. Contact Information",
      content:
        "For any questions regarding these Terms of Service, please contact us at legal@nexton.com or through our contact page.",
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
            Terms of Service
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

        {/* Content */}
        <div className="border rounded-2xl bg-card overflow-hidden shadow-lg">
          <div className="p-6 md:p-8 space-y-8">
            {sections.map((section, index) => (
              <div
                key={index}
                className="border-b last:border-0 pb-8 last:pb-0"
              >
                <h2 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  {section.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {section.content}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Accept Notice */}
        <div className="border rounded-2xl bg-card p-6 mt-8 text-center shadow-lg">
          <p className="text-muted-foreground mb-4">
            By using our services, you acknowledge that you have read and
            understood these terms.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="/privacy"
              className="text-primary font-semibold hover:underline"
            >
              Privacy Policy
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
