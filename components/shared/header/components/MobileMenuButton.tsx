import { memo } from "react";
import { Menu, X } from "lucide-react";

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
      {isOpen ? (
        <X className="h-6 w-6" />
      ) : (
        <Menu className="h-6 w-6" />
      )}
    </button>
  );
});

export default MobileMenuButton;
