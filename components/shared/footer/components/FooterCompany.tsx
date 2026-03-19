import { memo } from "react";

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
      <h2 className="text-2xl font-bold">{companyName}</h2>
      <p className="text-sm opacity-70">{companyDescription}</p>
    </div>
  );
});

export default FooterCompany;
