"use client";
import { memo, useState } from "react";
import { cn } from "@/lib/utils";
import {
  Logo,
  SearchBar,
  ActionIcons,
  MobileMenuButton,
  MobileMenu,
} from "./components";

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
            wishlistCount={10}
            cartCount={10}
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
