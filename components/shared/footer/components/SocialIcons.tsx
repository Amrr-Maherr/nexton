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
          className="w-10 h-10 rounded-xl bg-primary/10 hover:bg-primary text-primary hover:text-primary-foreground flex items-center justify-center transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary/20"
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
