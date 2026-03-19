import { Skeleton } from "./Skeleton";
import { memo } from "react";

export interface TableSkeletonProps {
  /**
   * Number of rows to render
   */
  rowCount?: number;
  /**
   * Number of columns to render
   */
  columnCount?: number;
  /**
   * Show table header
   */
  showHeader?: boolean;
  /**
   * Show row actions column
   */
  showActions?: boolean;
}

/**
 * TableSkeleton component for table views
 */
export const TableSkeleton = memo(function TableSkeleton({
  rowCount = 5,
  columnCount = 4,
  showHeader = true,
  showActions = false,
}: TableSkeletonProps) {
  return (
    <div className="w-full overflow-hidden rounded-lg border">
      <div className="overflow-x-auto">
        <table className="w-full">
          {/* Table Header */}
          {showHeader && (
            <thead className="bg-secondary/30">
              <tr>
                {Array.from({ length: columnCount }, (_, i) => (
                  <th key={i} className="p-4">
                    <Skeleton className="w-20 h-4" radius="sm" />
                  </th>
                ))}
                {showActions && (
                  <th className="p-4">
                    <Skeleton className="w-12 h-4" radius="sm" />
                  </th>
                )}
              </tr>
            </thead>
          )}

          {/* Table Body */}
          <tbody>
            {Array.from({ length: rowCount }, (_, rowIndex) => (
              <tr
                key={rowIndex}
                className="border-t border-secondary/20"
              >
                {Array.from({ length: columnCount }, (_, colIndex) => (
                  <td key={colIndex} className="p-4">
                    <Skeleton className="w-full h-4" radius="sm" />
                  </td>
                ))}
                {showActions && (
                  <td className="p-4">
                    <div className="flex gap-2">
                      <Skeleton className="w-8 h-8" radius="md" />
                      <Skeleton className="w-8 h-8" radius="md" />
                    </div>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
});
