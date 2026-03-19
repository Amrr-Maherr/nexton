import { memo } from "react";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

interface SocialLink {
  icon: React.ComponentType<{ className?: string }>;
  href: string;
  label: string;
}

const SocialIcons = memo(function SocialIcons() {
  const socialLinks: SocialLink[] = [
    { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  ];

  return (
    <div className="flex gap-3 pt-2">
      {socialLinks.map((social) => (
        <a
          key={social.label}
          href={social.href}
          className="bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white p-2.5 rounded-full transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-gray-500"
          aria-label={social.label}
          target="_blank"
          rel="noopener noreferrer"
        >
          <social.icon className="h-5 w-5" />
        </a>
      ))}
    </div>
  );
});

export default SocialIcons;
