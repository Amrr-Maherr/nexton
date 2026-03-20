"use client";

import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { X } from "lucide-react";
import { useCategories } from "@/hooks/api/useCategories";
import { useBrands } from "@/hooks/api/useBrands";

interface ProductFiltersProps {
  onClearFilters?: () => void;
}

export function ProductFilters({ onClearFilters }: ProductFiltersProps) {
  const { data: categories = [], isLoading: isLoadingCategories } =
    useCategories();
  const { data: brands = [], isLoading: isLoadingBrands } = useBrands();

  const colors = [
    { id: "black", label: "Black", value: "#000000" },
    { id: "white", label: "White", value: "#FFFFFF" },
    { id: "red", label: "Red", value: "#FF0000" },
    { id: "blue", label: "Blue", value: "#0000FF" },
    { id: "green", label: "Green", value: "#00FF00" },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Filters</h3>
        <Button
          variant="ghost"
          size="sm"
          onClick={onClearFilters}
          className="h-8 gap-1 text-muted-foreground hover:text-foreground"
        >
          <X className="h-3.5 w-3.5" />
          Clear All
        </Button>
      </div>

      <Accordion
        type="multiple"
        defaultValue={["category", "price", "brand", "color"]}
        className="w-full"
      >
        {/* Categories */}
        <AccordionItem value="category">
          <AccordionTrigger className="py-3">Categories</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-3 pt-2">
              {isLoadingCategories ? (
                <div className="space-y-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <div
                      key={i}
                      className="h-4 bg-secondary/50 rounded animate-pulse"
                    />
                  ))}
                </div>
              ) : (
                categories.map(
                  (category: { _id: string; name: string; slug: string }) => (
                    <label
                      key={category._id}
                      className="flex items-center justify-between cursor-pointer group"
                    >
                      <div className="flex items-center gap-2">
                        <Checkbox id={category._id} />
                        <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                          {category.name}
                        </span>
                      </div>
                      <span className="text-xs text-muted-foreground">
                        /{category.slug}
                      </span>
                    </label>
                  ),
                )
              )}
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Price Range */}
        <AccordionItem value="price">
          <AccordionTrigger className="py-3">Price Range</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4 pt-2">
              <Slider
                defaultValue={[0, 1000]}
                max={1000}
                step={10}
                className="w-full"
              />
              <div className="flex items-center justify-between gap-2">
                <div className="relative flex-1">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs text-muted-foreground">
                    $
                  </span>
                  <input
                    type="number"
                    defaultValue={0}
                    className="w-full h-9 rounded-md border border-input bg-background px-3 py-1 pl-6 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  />
                </div>
                <span className="text-muted-foreground">to</span>
                <div className="relative flex-1">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs text-muted-foreground">
                    $
                  </span>
                  <input
                    type="number"
                    defaultValue={1000}
                    className="w-full h-9 rounded-md border border-input bg-background px-3 py-1 pl-6 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  />
                </div>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Brand */}
        <AccordionItem value="brand">
          <AccordionTrigger className="py-3">Brand</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-3 pt-2">
              {isLoadingBrands ? (
                <div className="space-y-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <div
                      key={i}
                      className="h-4 bg-secondary/50 rounded animate-pulse"
                    />
                  ))}
                </div>
              ) : (
                brands.map(
                  (brand: { _id: string; name: string; slug: string }) => (
                    <label
                      key={brand._id}
                      className="flex items-center gap-2 cursor-pointer group"
                    >
                      <Checkbox id={`brand-${brand._id}`} />
                      <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                        {brand.name}
                      </span>
                    </label>
                  ),
                )
              )}
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Color */}
        <AccordionItem value="color">
          <AccordionTrigger className="py-3">Color</AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-wrap gap-2 pt-2">
              {colors.map((color) => (
                <label
                  key={color.id}
                  className="relative flex items-center justify-center w-10 h-10 rounded-full border-2 border-input cursor-pointer hover:border-ring transition-colors"
                  title={color.label}
                >
                  <Checkbox id={`color-${color.id}`} className="sr-only" />
                  <span
                    className="w-6 h-6 rounded-full border border-black/10"
                    style={{ backgroundColor: color.value }}
                  />
                </label>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      {/* Sort By */}
      <div className="space-y-2">
        <label className="text-sm font-medium">Sort By</label>
        <Select defaultValue="featured">
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select sort option" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="featured">Featured</SelectItem>
            <SelectItem value="newest">Newest</SelectItem>
            <SelectItem value="price-low">Price: Low to High</SelectItem>
            <SelectItem value="price-high">Price: High to Low</SelectItem>
            <SelectItem value="rating">Top Rated</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
