/**
 * Skeleton Loader Components
 * 
 * A reusable skeleton loader system for loading states.
 * Use with React Query's isLoading/isFetching states.
 * 
 * @example
 * ```tsx
 * const { data, isLoading, isFetching } = useProducts();
 * 
 * if (isLoading || isFetching) {
 *   return <CardSkeleton variant="product" count={8} />;
 * }
 * 
 * return <>{data.map(product => <ProductCard key={product._id} {...product} />)}</>;
 * ```
 */

export { Skeleton, type SkeletonProps } from "./Skeleton";
export { CardSkeleton, type CardSkeletonProps } from "./CardSkeleton";
export { DetailsSkeleton, type DetailsSkeletonProps } from "./DetailsSkeleton";
export { ListSkeleton, type ListSkeletonProps } from "./ListSkeleton";
export { PageSkeleton, type PageSkeletonProps } from "./PageSkeleton";
export { TableSkeleton, type TableSkeletonProps } from "./TableSkeleton";
export { SkeletonFallback } from "./SkeletonFallback";
