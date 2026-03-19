"use client";
import { memo, useState } from "react";
import { cn } from "@/lib/utils";
import { Search, ShoppingCart, Heart, User, Menu, X } from "lucide-react";

interface HeaderProps {
  className?: string;
}

// Logo Component
const Logo = memo(function Logo() {
  return (
    <div className="flex-shrink-0">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Nexton</h1>
    </div>
  );
});

// Search Bar Component
interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
  autoFocus?: boolean;
}

const SearchBar = memo(function SearchBar({
  value,
  onChange,
  placeholder = "Search for products...",
  className,
  autoFocus = false,
}: SearchBarProps) {
  return (
    <div className={cn("relative", className)}>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-gray-100 border border-gray-200 text-gray-900 pl-12 pr-4 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-900 focus:bg-white transition-all"
        autoFocus={autoFocus}
      />
      <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
    </div>
  );
});

// Action Icon Button Component
interface ActionIconButtonProps {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  badge?: number;
  onClick?: () => void;
}

const ActionIconButton = memo(function ActionIconButton({
  icon: Icon,
  label,
  badge,
  onClick,
}: ActionIconButtonProps) {
  return (
    <button
      className={cn(
        "relative p-2.5 hover:bg-gray-100 rounded-full transition-colors",
        onClick && "cursor-pointer",
      )}
      onClick={onClick}
      aria-label={label}
    >
      <Icon className="h-5 w-5 text-gray-700" />
      {badge !== undefined && badge > 0 && (
        <span className="absolute top-1 right-1 bg-gray-900 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
          {badge}
        </span>
      )}
    </button>
  );
});

// Action Icons Group Component
interface ActionIconsProps {
  wishlistCount?: number;
  cartCount?: number;
  onSearchClick?: () => void;
  showMobileSearch?: boolean;
}

const ActionIcons = memo(function ActionIcons({
  wishlistCount = 0,
  cartCount = 0,
  onSearchClick,
  showMobileSearch = false,
}: ActionIconsProps) {
  return (
    <div className="flex items-center gap-2 md:gap-4">
      {/* Mobile Search Toggle */}
      {showMobileSearch && onSearchClick && (
        <button
          className="md:hidden p-2.5 hover:bg-gray-100 rounded-full transition-colors"
          onClick={onSearchClick}
          aria-label="Search"
        >
          <Search className="h-5 w-5 text-gray-700" />
        </button>
      )}

      {/* Wishlist */}
      <ActionIconButton icon={Heart} label="Wishlist" badge={wishlistCount} />

      {/* Cart */}
      <ActionIconButton
        icon={ShoppingCart}
        label="Shopping Cart"
        badge={cartCount}
      />

      {/* Account */}
      <ActionIconButton icon={User} label="Account" />
    </div>
  );
});

// Mobile Menu Toggle Button Component
interface MobileMenuButtonProps {
  isOpen: boolean;
  onToggle: () => void;
}

const MobileMenuButton = memo(function MobileMenuButton({
  isOpen,
  onToggle,
}: MobileMenuButtonProps) {
  return (
    <button
      className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
      onClick={onToggle}
      aria-label="Toggle menu"
    >
      {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
    </button>
  );
});

// Mobile Menu Navigation Component
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

// Main Header Component
const Header = memo(function Header({ className }: HeaderProps) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <header
      className={cn(
        "bg-white border-b border-gray-200 sticky top-0 z-50",
        className,
      )}
    >
      <div className="main_container">
        {/* Main Header */}
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Mobile Menu Button */}
          <MobileMenuButton
            isOpen={isMobileMenuOpen}
            onToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />

          {/* Logo */}
          <Logo />

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-xl mx-8">
            <SearchBar
              value={searchQuery}
              onChange={setSearchQuery}
              placeholder="Search for products..."
            />
          </div>

          {/* Action Icons */}
          <ActionIcons
            wishlistCount={0}
            cartCount={0}
            onSearchClick={() => setIsSearchOpen(!isSearchOpen)}
            showMobileSearch={true}
          />
        </div>

        {/* Mobile Search Bar */}
        {isSearchOpen && (
          <div className="md:hidden pb-4 animate-in slide-in-from-top-2">
            <SearchBar
              value={searchQuery}
              onChange={setSearchQuery}
              placeholder="Search for products..."
              autoFocus
            />
          </div>
        )}

        {/* Mobile Menu */}
        <MobileMenu isOpen={isMobileMenuOpen} />
      </div>
    </header>
  );
});

export default Header;
