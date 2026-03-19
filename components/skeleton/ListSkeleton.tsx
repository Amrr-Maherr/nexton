import { Skeleton } from "./Skeleton";
import { memo } from "react";

export interface ListSkeletonProps {
  /**
   * Number of skeleton items to render
   */
  count?: number;
  /**
   * Layout type for the list
   * - horizontal: items in a row
   * - vertical: items in a column
   */
  layout?: "horizontal" | "vertical";
  /**
   * Size of each list item
   * - compact: smaller items with less detail
   * - default: standard size
   * - expanded: larger items with more detail
   */
  size?: "compact" | "default" | "expanded";
}

/**
 * ListSkeleton component for list views
 * Configurable count, layout, and size
 */
export const ListSkeleton = memo(function ListSkeleton({
  count = 5,
  layout = "vertical",
  size = "default",
}: ListSkeletonProps) {
  const containerClass =
    layout === "horizontal"
      ? "flex gap-4 overflow-hidden"
      : "flex flex-col gap-4";

  return (
    <div className={containerClass}>
      {Array.from({ length: count }, (_, i) => (
        <ListItemSkeleton key={i} size={size} />
      ))}
    </div>
  );
});

/**
 * Individual list item skeleton based on size
 */
const ListItemSkeleton = memo(function ListItemSkeleton({
  size = "default",
}: {
  size: "compact" | "default" | "expanded";
}) {
  if (size === "compact") {
    return (
      <div className="flex items-center gap-3 flex-1">
        <Skeleton className="w-10 h-10 flex-shrink-0" radius="md" />
        <div className="flex flex-col gap-1 flex-1">
          <Skeleton className="w-3/4 h-3" radius="sm" />
          <Skeleton className="w-1/2 h-3" radius="sm" />
        </div>
      </div>
    );
  }

  if (size === "expanded") {
    return (
      <div className="flex gap-4 flex-1">
        <Skeleton className="w-24 h-24 flex-shrink-0" radius="lg" />
        <div className="flex flex-col gap-2 flex-1">
          <Skeleton className="w-full h-5" radius="sm" />
          <Skeleton className="w-3/4 h-4" radius="sm" />
          <Skeleton className="w-1/2 h-4" radius="sm" />
          <div className="flex gap-2 mt-2">
            <Skeleton className="w-20 h-8" radius="md" />
            <Skeleton className="w-20 h-8" radius="md" />
          </div>
        </div>
      </div>
    );
  }

  // Default size
  return (
    <div className="flex gap-3 flex-1">
      <Skeleton className="w-16 h-16 flex-shrink-0" radius="md" />
      <div className="flex flex-col gap-2 flex-1">
        <Skeleton className="w-3/4 h-4" radius="sm" />
        <Skeleton className="w-full h-3" radius="sm" />
        <Skeleton className="w-1/2 h-3" radius="sm" />
      </div>
    </div>
  );
});
