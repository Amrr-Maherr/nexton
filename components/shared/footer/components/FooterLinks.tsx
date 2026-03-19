import { memo } from "react";
import Link from "next/link";

interface FooterLink {
  label: string;
  href: string;
}

interface FooterLinksProps {
  title?: string;
  links?: FooterLink[];
}

const FooterLinks = memo(function FooterLinks({
  title = "Quick Links",
  links = [
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "FAQ", href: "/faq" },
  ],
}: FooterLinksProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <ul className="space-y-2">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="text-gray-400 hover:text-white transition-colors duration-300 text-sm hover:underline"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
});

export default FooterLinks;
