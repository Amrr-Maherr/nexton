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

export function Reviews({ reviews }: ReviewsProps) {
  if (!reviews || reviews.length === 0) return null;

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Reviews ({reviews.length})</h2>
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
    </div>
  );
}
