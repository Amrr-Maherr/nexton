import { memo } from "react";
import Link from "next/link";

interface MobileMenuProps {
  isOpen: boolean;
}

const MobileMenu = memo(function MobileMenu({ isOpen }: MobileMenuProps) {
  if (!isOpen) return null;

  const menuItems = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: "Categories", href: "/categories" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <div className="md:hidden pb-4 border-t pt-4 animate-in slide-in-from-top-2">
      <nav className="flex flex-col gap-2">
        {menuItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="px-4 py-2 hover:bg-secondary rounded-lg transition-colors"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </div>
  );
});

export default MobileMenu;
