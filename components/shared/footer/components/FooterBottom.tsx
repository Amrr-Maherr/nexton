import { memo } from "react";

interface PaymentMethod {
  name: string;
  icon: string;
}

interface FooterBottomProps {
  companyName?: string;
  paymentMethods?: PaymentMethod[];
}

const FooterBottom = memo(function FooterBottom({
  companyName = "Nexton",
  paymentMethods = [
    { name: "Visa", icon: "💳" },
    { name: "Mastercard", icon: "💳" },
    { name: "PayPal", icon: "🅿️" },
    { name: "Apple Pay", icon: "🍎" },
  ],
}: FooterBottomProps) {
  return (
    <div className="border-t border-gray-800">
      <div className="main_container py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Payment Methods */}
          <div className="flex items-center gap-3">
            <span className="text-sm text-gray-400">We accept:</span>
            <div className="flex gap-2">
              {paymentMethods.map((method) => (
                <div
                  key={method.name}
                  className="bg-gray-800 px-3 py-1.5 rounded text-sm"
                  title={method.name}
                >
                  {method.icon}
                </div>
              ))}
            </div>
          </div>

          {/* Copyright */}
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} {companyName}. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
});

export default FooterBottom;
