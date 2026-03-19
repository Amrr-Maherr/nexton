import { memo } from "react";
import { CreditCard } from "lucide-react";

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
    <div className="border-t">
      <div className="main_container py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Payment Methods */}
          <div className="flex items-center gap-3">
            <CreditCard className="h-5 w-5 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">We accept:</span>
            <div className="flex gap-2">
              {paymentMethods.map((method) => (
                <div
                  key={method.name}
                  className="bg-secondary/50 px-3 py-1.5 rounded-lg text-sm"
                  title={method.name}
                >
                  {method.icon}
                </div>
              ))}
            </div>
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {companyName}. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
});

export default FooterBottom;
