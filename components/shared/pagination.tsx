"use client";

import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
interface PaginationProps {
  currentPage?: number;
  totalPages?: number;
  setPage: (page: number) => void;
}

export function Pagination({
  setPage,
  currentPage = 1,
  totalPages = 10,
}: PaginationProps) {
  const router = useRouter();

  const pathname = "/products";
  const query = { currentPage };

  useEffect(() => {
    router.push(`/products?page=${currentPage}`);
  }, []);

  const handleNextPage = () => {
    setPage(currentPage + 1);
    router.push(`/products?page=${currentPage + 1}`);
  };
  
  const handlePrevPage = () => {
    setPage(currentPage - 1);
    router.push(`/products?page=${currentPage - 1}`);
  };

  return (
    <div className="flex items-center justify-center gap-2">
      {/* Previous Button */}
      <Button
        variant="outline"
        disabled={currentPage === 1}
        onClick={handlePrevPage}
      >
        <ChevronLeft className="h-4 w-4 mr-1" />
        Previous
      </Button>

      {/* Page Info */}
      <span className="text-sm text-muted-foreground">
        Page {currentPage} of {totalPages}
      </span>

      {/* Next Button */}
      <Button
        variant="outline"
        disabled={currentPage === totalPages}
        onClick={handleNextPage}
      >
        Next
        <ChevronRight className="h-4 w-4 ml-1" />
      </Button>
    </div>
  );
}
