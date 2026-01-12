"use client";

import { useParams } from "next/navigation";

const ProductReviewByIdPage = () => {
  const params = useParams();

  const id = params.id;
  const reviewId = params.reviewId;

  return (
    <div className="text-7xl">
      Product id: {id} and review id: {reviewId}
    </div>
  );
};

export default ProductReviewByIdPage;
