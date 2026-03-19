import { memo } from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

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
      <h3 className="text-lg font-semibold">{title}</h3>
      <ul className="space-y-2">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group"
            >
              <ChevronRight className="h-4 w-4 shrink-0 group-hover:translate-x-1 transition-transform" />
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
});

export default FooterLinks;
