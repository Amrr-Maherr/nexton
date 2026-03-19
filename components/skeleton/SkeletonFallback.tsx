import { Skeleton } from "@/components/skeleton";

export function SkeletonFallback() {
  return (
    <div className="flex flex-col gap-2">
      <Skeleton className="w-32 h-6" radius="sm" />
      <Skeleton className="w-full h-20" radius="lg" />
    </div>
  );
}
