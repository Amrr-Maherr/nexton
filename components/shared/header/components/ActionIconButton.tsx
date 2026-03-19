import { memo } from "react";
import { cn } from "@/lib/utils";

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

export default ActionIconButton;
