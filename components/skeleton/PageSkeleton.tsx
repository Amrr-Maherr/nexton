import { Skeleton } from "./Skeleton";
import { memo } from "react";

export interface PageSkeletonProps {
  /**
   * Type of page skeleton
   * - default: Generic page with header and grid content
   * - withSidebar: Page with sidebar navigation
   */
  variant?: "default" | "withSidebar";
  /**
   * Show page header with title and subtitle
   */
  showHeader?: boolean;
  /**
   * Number of grid items to show
   */
  gridCount?: number;
  /**
   * Grid columns (for responsive layout)
   */
  gridColumns?: 2 | 3 | 4 | 5;
}

/**
 * PageSkeleton component for full page loading states
 * Provides a generic page-level skeleton layout
 */
export const PageSkeleton = memo(function PageSkeleton({
  variant = "default",
  showHeader = true,
  gridCount = 8,
  gridColumns = 4,
}: PageSkeletonProps) {
  const gridClass = {
    2: "grid-cols-2",
    3: "grid-cols-3",
    4: "grid-cols-4",
    5: "grid-cols-5",
  }[gridColumns];

  return (
    <div className="flex flex-col gap-6">
      {/* Page Header */}
      {showHeader && (
        <div className="flex flex-col gap-2">
          <Skeleton className="w-1/3 h-8" radius="sm" />
          <Skeleton className="w-1/4 h-4" radius="sm" />
        </div>
      )}

      {/* Main Content */}
      {variant === "withSidebar" ? (
        <div className="grid md:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="hidden md:flex flex-col gap-3">
            <Skeleton className="w-full h-10" radius="md" />
            <Skeleton className="w-full h-10" radius="md" />
            <Skeleton className="w-full h-10" radius="md" />
            <Skeleton className="w-full h-10" radius="md" />
            <Skeleton className="w-full h-10" radius="md" />
          </div>

          {/* Content Grid */}
          <div className={`md:col-span-3 grid ${gridClass} gap-4 md:gap-6`}>
            {Array.from({ length: gridCount }, (_, i) => (
              <div key={i} className="flex flex-col gap-2">
                <Skeleton className="w-full aspect-square" radius="lg" />
                <Skeleton className="w-3/4 h-4" radius="sm" />
                <Skeleton className="w-1/2 h-4" radius="sm" />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className={`grid ${gridClass} gap-4 md:gap-6`}>
          {Array.from({ length: gridCount }, (_, i) => (
            <div key={i} className="flex flex-col gap-2">
              <Skeleton className="w-full aspect-square" radius="lg" />
              <Skeleton className="w-3/4 h-4" radius="sm" />
              <Skeleton className="w-1/2 h-4" radius="sm" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
});
