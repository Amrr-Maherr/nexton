"use client";
import { memo, useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Heart, X, Trash2, Plus, Minus } from "lucide-react";
import type { ReactNode } from "react";

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface WishlistItem {
  id: string;
  name: string;
  price: number;
  image: string;
}

interface SideDrawerProps {
  children: ReactNode;
  type?: "cart" | "wishlist";
  side?: "left" | "right";
}

const SideDrawer = memo(function SideDrawer({
  children,
  type = "cart",
  side = "right",
}: SideDrawerProps) {
  const [open, setOpen] = useState(false);

  // Mock data - replace with real state management
  const cartItems: CartItem[] = [
    {
      id: "1",
      name: "Product 1",
      price: 29.99,
      quantity: 2,
      image: "/placeholder.jpg",
    },
    {
      id: "2",
      name: "Product 2",
      price: 49.99,
      quantity: 1,
      image: "/placeholder.jpg",
    },
  ];

  const wishlistItems: WishlistItem[] = [
    {
      id: "3",
      name: "Wishlist Product 1",
      price: 59.99,
      image: "/placeholder.jpg",
    },
    {
      id: "4",
      name: "Wishlist Product 2",
      price: 79.99,
      image: "/placeholder.jpg",
    },
  ];

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  const isCart = type === "cart";
  const items = isCart ? cartItems : wishlistItems;
  const title = isCart ? "Shopping Cart" : "Wishlist";
  const emptyMessage = isCart
    ? "Your cart is empty"
    : "Your wishlist is empty";

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent side={side} className="w-full sm:max-w-md p-0">
        <SheetHeader className="p-4 border-b">
          <div className="flex items-center justify-between">
            <SheetTitle className="flex items-center gap-2">
              {isCart ? (
                <ShoppingCart className="h-5 w-5" />
              ) : (
                <Heart className="h-5 w-5" />
              )}
              {title}
            </SheetTitle>
            {/* <SheetClose asChild>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <X className="h-4 w-4" />
                <span className="sr-only">Close</span>
              </Button>
            </SheetClose> */}
          </div>
        </SheetHeader>

        <div className="flex flex-col h-[calc(100vh-180px)]">
          {/* Items List */}
          <div className="flex-1 overflow-y-auto p-4">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center text-gray-500">
                {isCart ? (
                  <ShoppingCart className="h-16 w-16 mb-4 opacity-50" />
                ) : (
                  <Heart className="h-16 w-16 mb-4 opacity-50" />
                )}
                <p className="text-lg font-medium">{emptyMessage}</p>
                <p className="text-sm mt-2">
                  {isCart
                    ? "Start shopping to add items"
                    : "Start browsing to add items"}
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-4 p-3 bg-gray-50 rounded-lg"
                  >
                    <div className="w-20 h-20 bg-gray-200 rounded-md flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-sm truncate">
                        {item.name}
                      </h4>
                      <p className="text-gray-600 text-sm mt-1">
                        ${item.price.toFixed(2)}
                      </p>
                      {isCart && (
                        <div className="flex items-center gap-2 mt-2">
                          <Button variant="outline" size="icon" className="h-7 w-7">
                            <Minus className="h-3 w-3" />
                          </Button>
                          <span className="text-sm w-8 text-center">
                            {(item as CartItem).quantity}
                          </span>
                          <Button variant="outline" size="icon" className="h-7 w-7">
                            <Plus className="h-3 w-3" />
                          </Button>
                        </div>
                      )}
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 text-red-500 hover:text-red-600 hover:bg-red-50"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t p-4 space-y-4">
              {isCart && (
                <>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-semibold text-lg">
                      ${total.toFixed(2)}
                    </span>
                  </div>
                  <Button className="w-full" size="lg">
                    Checkout
                  </Button>
                </>
              )}
              {!isCart && (
                <Button className="w-full" size="lg" variant="outline">
                  Add All to Cart
                </Button>
              )}
            </div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
});

export default SideDrawer;
