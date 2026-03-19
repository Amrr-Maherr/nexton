import { memo, useState } from "react";
import { cn } from "@/lib/utils";
import { Search, ShoppingCart, Heart, User, Menu, X } from "lucide-react";

interface HeaderProps {
  className?: string;
}

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
      <div className="container mx-auto px-4">
        {/* Main Header */}
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>

          {/* Logo / Store Name */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
              Nexton
            </h1>
          </div>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-xl mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search for products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-gray-100 border border-gray-200 text-gray-900 pl-12 pr-4 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-900 focus:bg-white transition-all"
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            </div>
          </div>

          {/* Action Icons */}
          <div className="flex items-center gap-2 md:gap-4">
            {/* Mobile Search Toggle */}
            <button
              className="md:hidden p-2.5 hover:bg-gray-100 rounded-full transition-colors"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              aria-label="Search"
            >
              <Search className="h-5 w-5 text-gray-700" />
            </button>

            {/* Wishlist */}
            <button
              className="relative p-2.5 hover:bg-gray-100 rounded-full transition-colors"
              aria-label="Wishlist"
            >
              <Heart className="h-5 w-5 text-gray-700" />
              <span className="absolute top-1 right-1 bg-gray-900 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
                0
              </span>
            </button>

            {/* Cart */}
            <button
              className="relative p-2.5 hover:bg-gray-100 rounded-full transition-colors"
              aria-label="Shopping Cart"
            >
              <ShoppingCart className="h-5 w-5 text-gray-700" />
              <span className="absolute top-1 right-1 bg-gray-900 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
                0
              </span>
            </button>

            {/* Account */}
            <button
              className="p-2.5 hover:bg-gray-100 rounded-full transition-colors"
              aria-label="Account"
            >
              <User className="h-5 w-5 text-gray-700" />
            </button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        {isSearchOpen && (
          <div className="md:hidden pb-4 animate-in slide-in-from-top-2">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-gray-100 border border-gray-200 text-gray-900 pl-12 pr-4 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-900 focus:bg-white transition-all"
                autoFocus
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            </div>
          </div>
        )}

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4 border-t border-gray-200 pt-4 animate-in slide-in-from-top-2">
            <nav className="flex flex-col gap-2">
              <a
                href="/"
                className="px-4 py-2 hover:bg-gray-100 rounded-lg transition-colors text-gray-700"
              >
                Home
              </a>
              <a
                href="/products"
                className="px-4 py-2 hover:bg-gray-100 rounded-lg transition-colors text-gray-700"
              >
                Products
              </a>
              <a
                href="/categories"
                className="px-4 py-2 hover:bg-gray-100 rounded-lg transition-colors text-gray-700"
              >
                Categories
              </a>
              <a
                href="/about"
                className="px-4 py-2 hover:bg-gray-100 rounded-lg transition-colors text-gray-700"
              >
                About
              </a>
              <a
                href="/contact"
                className="px-4 py-2 hover:bg-gray-100 rounded-lg transition-colors text-gray-700"
              >
                Contact
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
});

export default Header;
