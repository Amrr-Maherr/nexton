import { memo } from "react";
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

interface ContactItem {
  icon: React.ComponentType<{ className?: string }>;
  text: string;
  href: string;
}

interface FooterContactProps {
  title?: string;
  contactInfo?: ContactItem[];
}

const FooterContact = memo(function FooterContact({
  title = "Contact Us",
  contactInfo = [
    { icon: Mail, text: "info@nexton.com", href: "mailto:info@nexton.com" },
    { icon: Phone, text: "+1 234 567 8900", href: "tel:+12345678900" },
    {
      icon: MapPin,
      text: "123 Main Street, City, Country",
      href: "#",
    },
  ],
}: FooterContactProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <ul className="space-y-3">
        {contactInfo.map((item, index) => (
          <li key={index}>
            <Link
              href={item.href}
              className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors duration-300 text-sm"
            >
              <item.icon className="h-5 w-5 flex-shrink-0" />
              <span>{item.text}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
});

export default FooterContact;
