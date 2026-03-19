import { memo } from "react";
import { cn } from "@/lib/utils";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

interface FooterLink {
  label: string;
  href: string;
}

interface FooterProps {
  className?: string;
}

const Footer = memo(function Footer({ className }: FooterProps) {
  // Company info
  const companyName = "Nexton";
  const companyDescription =
    "Your trusted partner for quality products and exceptional service.";

  // Social media links
  const socialLinks = [
    { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  ];

  // Quick links
  const quickLinks: FooterLink[] = [
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "FAQ", href: "/faq" },
  ];

  // Contact info
  const contactInfo = [
    { icon: Mail, text: "info@nexton.com", href: "mailto:info@nexton.com" },
    { icon: Phone, text: "+1 234 567 8900", href: "tel:+12345678900" },
    {
      icon: MapPin,
      text: "123 Main Street, City, Country",
      href: "#",
    },
  ];

  // Payment methods
  const paymentMethods = [
    { name: "Visa", icon: "💳" },
    { name: "Mastercard", icon: "💳" },
    { name: "PayPal", icon: "🅿️" },
    { name: "Apple Pay", icon: "🍎" },
  ];

  return (
    <footer
      className={cn(
        "bg-gray-900 text-gray-300 border-t border-gray-800",
        className,
      )}
    >
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: Company Info & Social Icons */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white">{companyName}</h2>
            <p className="text-sm text-gray-400">{companyDescription}</p>

            {/* Social Icons */}
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
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300 text-sm hover:underline"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Contact Us</h3>
            <ul className="space-y-3">
              {contactInfo.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                  >
                    <item.icon className="h-5 w-5 flex-shrink-0" />
                    <span>{item.text}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Newsletter</h3>
            <p className="text-sm text-gray-400">
              Subscribe to get special offers and updates.
            </p>
            <form className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="bg-gray-800 border border-gray-700 text-white px-4 py-2.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 text-sm"
              />
              <button
                type="submit"
                className="bg-white text-gray-900 px-4 py-2.5 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-300 text-sm"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
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
    </footer>
  );
});

export default Footer;
