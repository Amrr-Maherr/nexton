import {
  HelpCircle,
  ChevronDown,
  Package,
  ShoppingCart,
  CreditCard,
  Shield,
  Truck,
  RefreshCcw,
} from "lucide-react";

const faqCategories = [
  {
    icon: ShoppingCart,
    title: "Orders & Shopping",
    questions: [
      {
        q: "How do I place an order?",
        a: "Simply browse our products, add items to your cart, and proceed to checkout. You can pay using various payment methods including credit cards and digital wallets.",
      },
      {
        q: "Can I modify my order after placing it?",
        a: "You can modify your order within 1 hour of placing it. After that, the order enters processing and cannot be changed. Contact our support team for assistance.",
      },
      {
        q: "How do I track my order?",
        a: "Once your order ships, you'll receive a tracking number via email. You can use this to track your package on our website or the carrier's site.",
      },
    ],
  },
  {
    icon: Package,
    title: "Shipping & Delivery",
    questions: [
      {
        q: "What are your shipping options?",
        a: "We offer standard shipping (5-7 business days), express shipping (2-3 business days), and overnight shipping (1 business day). Shipping costs vary by location and speed.",
      },
      {
        q: "Do you ship internationally?",
        a: "Yes, we ship to over 50 countries worldwide. International shipping times and costs vary by destination. Customs fees may apply.",
      },
      {
        q: "What if my package is damaged?",
        a: "If your package arrives damaged, contact us within 48 hours with photos of the damage. We'll arrange a replacement or refund immediately.",
      },
    ],
  },
  {
    icon: RefreshCcw,
    title: "Returns & Refunds",
    questions: [
      {
        q: "What is your return policy?",
        a: "We offer a 30-day return policy for unused items in original packaging. Some exclusions apply. See our full returns policy for details.",
      },
      {
        q: "How long do refunds take?",
        a: "Refunds are processed within 5-7 business days after we receive your return. The time it appears in your account depends on your bank.",
      },
      {
        q: "Who pays for return shipping?",
        a: "For defective or wrong items, we cover return shipping. For change-of-mind returns, customers are responsible for return shipping costs.",
      },
    ],
  },
  {
    icon: CreditCard,
    title: "Payment",
    questions: [
      {
        q: "What payment methods do you accept?",
        a: "We accept all major credit cards (Visa, MasterCard, Amex), PayPal, Apple Pay, Google Pay, and bank transfers.",
      },
      {
        q: "Is my payment information secure?",
        a: "Absolutely. We use industry-standard SSL encryption and never store your full payment details. All transactions are processed securely.",
      },
    ],
  },
  {
    icon: Shield,
    title: "Account & Security",
    questions: [
      {
        q: "How do I reset my password?",
        a: "Click 'Forgot Password' on the login page, enter your email, and we'll send you a password reset link.",
      },
      {
        q: "Can I delete my account?",
        a: "Yes, you can delete your account from your account settings or by contacting our support team. Note that this action is permanent.",
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-primary/10 py-12 px-4">
      <div className="main_container max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-primary/10 flex items-center justify-center">
            <HelpCircle className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about our products, services, and
            policies.
          </p>
        </div>

        {/* FAQ Categories */}
        <div className="space-y-8">
          {faqCategories.map((category, catIndex) => {
            const Icon = category.icon;
            return (
              <div
                key={catIndex}
                className="border rounded-2xl bg-card overflow-hidden shadow-lg"
              >
                {/* Category Header */}
                <div className="bg-secondary/50 p-6 border-b">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <h2 className="text-xl font-bold">{category.title}</h2>
                  </div>
                </div>

                {/* Questions */}
                <div className="divide-y">
                  {category.questions.map((faq, qIndex) => (
                    <details
                      key={qIndex}
                      className="group p-6 hover:bg-secondary/30 transition-colors"
                    >
                      <summary className="flex items-center justify-between cursor-pointer list-none">
                        <h3 className="font-semibold text-lg pr-4">{faq.q}</h3>
                        <ChevronDown className="h-5 w-5 text-muted-foreground shrink-0 group-open:rotate-180 transition-transform" />
                      </summary>
                      <p className="mt-4 text-muted-foreground leading-relaxed">
                        {faq.a}
                      </p>
                    </details>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Still Have Questions */}
        <div className="border rounded-2xl bg-card p-8 mt-12 text-center shadow-lg">
          <h2 className="text-2xl font-bold mb-3">Still have questions?</h2>
          <p className="text-muted-foreground mb-6">
            Can&apos;t find the answer you&apos;re looking for? Our support team
            is here to help.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition-opacity"
          >
            Contact Support
          </a>
        </div>
      </div>
    </div>
  );
}
