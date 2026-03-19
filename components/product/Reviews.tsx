"use client";
import { useState } from "react";
import { Plus, Star, User, Calendar, MessageSquare } from "lucide-react";
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
  const [visibleReviews, setVisibleReviews] = useState(5);

  const handleAddReview = (newReview: { rating: number; review: string }) => {
    console.log("New review:", newReview);
    setShowAddReview(false);
  };

  // Calculate average rating
  const averageRating =
    reviews && reviews.length > 0
      ? (
          reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length
        ).toFixed(1)
      : "0";

  // Get visible reviews
  const visibleReviewsList = reviews?.slice(0, visibleReviews) || [];
  const hasMoreReviews = (reviews?.length || 0) > visibleReviews;
  const remainingReviews = (reviews?.length || 0) - visibleReviews;

  return (
    <div className="border rounded-xl p-5 md:p-6 bg-card shadow-sm">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={`h-5 w-5 ${
                    star <= Math.round(Number(averageRating))
                      ? "fill-yellow-500 text-yellow-500"
                      : "text-gray-300"
                  }`}
                />
              ))}
            </div>
            <span className="text-2xl font-bold">{averageRating}</span>
          </div>
          <div className="text-muted-foreground">
            ({reviews?.length || 0}{" "}
            {reviews?.length === 1 ? "review" : "reviews"})
          </div>
        </div>
        <button
          onClick={() => setShowAddReview(true)}
          className="flex items-center justify-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-lg font-medium hover:opacity-90 transition-opacity shrink-0"
        >
          <Plus className="h-5 w-5" />
          Add Review
        </button>
      </div>

      {/* Add Review Form */}
      {showAddReview && (
        <div className="mb-6">
          <AddReview
            onClose={() => setShowAddReview(false)}
            onSubmit={handleAddReview}
          />
        </div>
      )}

      {/* Reviews List */}
      {reviews && reviews.length > 0 ? (
        <>
          <div className="space-y-4">
            {visibleReviewsList.map((review) => (
              <div
                key={review._id}
                className="border rounded-xl p-4 md:p-5 bg-secondary/30 hover:bg-secondary/50 transition-colors"
              >
                {/* Review Header */}
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-primary to-primary/70 text-primary-foreground flex items-center justify-center text-base md:text-lg font-bold shrink-0">
                      {review.user.name.charAt(0).toUpperCase()}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <User className="h-4 w-4 text-muted-foreground" />
                        <p className="font-semibold text-sm md:text-base">
                          {review.user.name}
                        </p>
                      </div>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground mt-0.5">
                        <Calendar className="h-3 w-3" />
                        {new Date(review.createdAt).toLocaleDateString(
                          "en-US",
                          {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                          },
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-1 bg-white dark:bg-gray-800 px-3 py-1.5 rounded-full shrink-0">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`h-3.5 w-3.5 ${
                          star <= review.rating
                            ? "fill-yellow-500 text-yellow-500"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Review Text */}
                {review.review && (
                  <div className="flex gap-3">
                    <MessageSquare className="h-4 w-4 text-muted-foreground mt-0.5 shrink-0" />
                    <p className="text-sm md:text-base leading-relaxed">
                      {review.review}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Show More Button */}
          {hasMoreReviews && (
            <div className="mt-6 text-center">
              <button
                onClick={() => setVisibleReviews((prev) => prev + 5)}
                className="inline-flex items-center gap-2 bg-secondary text-foreground px-6 py-3 rounded-lg font-medium hover:bg-secondary/70 transition-colors"
              >
                Show {remainingReviews > 5 ? 5 : remainingReviews} More Reviews
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            </div>
          )}
        </>
      ) : (
        /* Empty State */
        <div className="text-center py-12">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-secondary/50 flex items-center justify-center">
            <MessageSquare className="h-8 w-8 text-muted-foreground" />
          </div>
          <h3 className="text-lg font-semibold mb-2">No reviews yet</h3>
          <p className="text-muted-foreground">
            Be the first to review this product!
          </p>
        </div>
      )}
    </div>
  );
}
