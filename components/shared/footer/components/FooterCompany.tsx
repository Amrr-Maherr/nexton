import { memo } from "react";
import Link from "next/link";

interface FooterCompanyProps {
  companyName?: string;
  companyDescription?: string;
}

const FooterCompany = memo(function FooterCompany({
  companyName = "Nexton",
  companyDescription = "Your trusted partner for quality products and exceptional service.",
}: FooterCompanyProps) {
  return (
    <div className="space-y-4">
      <Link href="/" className="inline-block">
        <h2 className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
          {companyName}
        </h2>
      </Link>
      <p className="text-sm text-muted-foreground leading-relaxed">
        {companyDescription}
      </p>
    </div>
  );
});

export default FooterCompany;
