"use client";
import { useState } from "react";
import { Plus } from "lucide-react";
import { AddReview } from "./AddReview";

interface Review {
  _id: string;
  review?: string;
  rating: number;
  user: {
    _id: string;
    name: string;
  };
  createdAt: string;
}

interface ReviewsProps {
  reviews?: Review[];
}

export default function Reviews({ reviews }: ReviewsProps) {
  const [showAddReview, setShowAddReview] = useState(false);

  const handleAddReview = (newReview: { rating: number; review: string }) => {
    console.log("New review:", newReview);
    setShowAddReview(false);
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold">
          Reviews {reviews && reviews.length > 0 && `(${reviews.length})`}
        </h2>
        <button
          onClick={() => setShowAddReview(true)}
          className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg font-medium hover:opacity-90 transition-opacity"
        >
          <Plus className="h-5 w-5" />
          Add Review
        </button>
      </div>

      {showAddReview && (
        <div className="mb-6">
          <AddReview
            onClose={() => setShowAddReview(false)}
            onSubmit={handleAddReview}
          />
        </div>
      )}

      {reviews && reviews.length > 0 ? (
        <div className="space-y-4">
          {reviews.map((review) => (
            <div key={review._id} className="border rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                    {review.user.name.charAt(0).toUpperCase()}
                  </div>
                  <span className="font-semibold">{review.user.name}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-yellow-500">⭐</span>
                  <span className="font-semibold">{review.rating}/5</span>
                </div>
              </div>
              {review.review && (
                <p className="opacity-70 text-sm mt-2 pl-10">{review.review}</p>
              )}
              <p className="text-xs opacity-50 mt-2 pl-10">
                {new Date(review.createdAt).toLocaleDateString()}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <p className="opacity-70 text-center py-8">
          No reviews yet. Be the first to review this product!
        </p>
      )}
    </div>
  );
}
