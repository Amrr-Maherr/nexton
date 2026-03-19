import { memo } from "react";

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
    <div className="md:hidden pb-4 border-t border-gray-200 pt-4 animate-in slide-in-from-top-2">
      <nav className="flex flex-col gap-2">
        {menuItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="px-4 py-2 hover:bg-gray-100 rounded-lg transition-colors text-gray-700"
          >
            {item.label}
          </a>
        ))}
      </nav>
    </div>
  );
});

export default MobileMenu;
