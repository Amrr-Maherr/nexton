"use client";
import { memo } from "react";
import { cn } from "@/lib/utils";
import {
  FooterCompany,
  SocialIcons,
  FooterLinks,
  FooterContact,
  FooterNewsletter,
  FooterBottom,
} from "./components";

interface FooterProps {
  className?: string;
}

const Footer = memo(function Footer({ className }: FooterProps) {
  return (
    <footer className={cn("bg-card border-t", className)}>
      {/* Main Footer Content */}
      <div className="main_container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: Company Info & Social Icons */}
          <div className="space-y-4">
            <FooterCompany />
            <SocialIcons />
          </div>

          {/* Column 2: Quick Links */}
          <FooterLinks />

          {/* Column 3: Contact Info */}
          <FooterContact />

          {/* Column 4: Newsletter */}
          <FooterNewsletter />
        </div>
      </div>

      {/* Bottom Footer */}
      <FooterBottom />
    </footer>
  );
});

export default Footer;
