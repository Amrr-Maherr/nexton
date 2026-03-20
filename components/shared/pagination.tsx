"use client";

import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
  currentPage?: number;
  totalPages?: number;
}

export function Pagination({
  currentPage = 1,
  totalPages = 10,
}: PaginationProps) {
  return (
    <div className="flex items-center justify-center gap-2">
      {/* Previous Button */}
      <Button variant="outline" disabled={currentPage === 1}>
        <ChevronLeft className="h-4 w-4 mr-1" />
        Previous
      </Button>

      {/* Page Info */}
      <span className="text-sm text-muted-foreground">
        Page {currentPage} of {totalPages}
      </span>

      {/* Next Button */}
      <Button variant="outline" disabled={currentPage === totalPages}>
        Next
        <ChevronRight className="h-4 w-4 ml-1" />
      </Button>
    </div>
  );
}
