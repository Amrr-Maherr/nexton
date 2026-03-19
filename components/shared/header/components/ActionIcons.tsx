import { memo } from "react";
import { Search, Heart, ShoppingCart, User } from "lucide-react";
import ActionIconButton from "./ActionIconButton";
import SideDrawer from "./SideDrawer";

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
      <SideDrawer type="wishlist" side="right">
        <ActionIconButton icon={Heart} label="Wishlist" badge={wishlistCount} />
      </SideDrawer>

      {/* Cart */}
      <SideDrawer type="cart" side="right">
        <ActionIconButton
          icon={ShoppingCart}
          label="Shopping Cart"
          badge={cartCount}
        />
      </SideDrawer>

      {/* Account */}
      <ActionIconButton icon={User} label="Account" />
    </div>
  );
});

export default ActionIcons;
