import { cn } from "@/lib/utils";
import { HTMLAttributes, memo } from "react";

export interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Custom animation type
   * - shimmer: horizontal shimmer effect (default)
   * - pulse: simple pulse animation
   * - none: no animation, static skeleton
   */
  animation?: "shimmer" | "pulse" | "none";
  /**
   * Custom height for the skeleton
   */
  height?: string | number;
  /**
   * Custom width for the skeleton
   */
  width?: string | number;
  /**
   * Border radius preset
   */
  radius?: "sm" | "md" | "lg" | "full" | "none";
}

/**
 * Base Skeleton component with shimmer animation
 * Used as a building block for more complex skeleton layouts
 */
export const Skeleton = memo(function Skeleton({
  className,
  animation = "shimmer",
  height,
  width,
  radius = "md",
  ...props
}: SkeletonProps) {
  const radiusClasses = {
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    full: "rounded-full",
    none: "rounded-none",
  }[radius];

  const animationClasses = {
    shimmer: "animate-shimmer",
    pulse: "animate-pulse",
    none: "",
  }[animation];

  const style: React.CSSProperties = {
    ...props.style,
    height,
    width,
  };

  return (
    <div
      className={cn(
        "bg-secondary/50",
        radiusClasses,
        animationClasses,
        className
      )}
      style={style}
      {...props}
    />
  );
});
