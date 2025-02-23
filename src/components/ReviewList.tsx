import React, { useState } from "react";
import { Review } from "../entities/Review";

interface ReviewsProps {
  reviews: Review[];
}

const ITEMS_PER_PAGE = 4;

// 별점 렌더링 함수 (최대 5개 별)
const renderStars = (rating: number) => {
  return (
    <div className='flex'>
      {[...Array(5)].map((_, index) => (
        <svg
          key={index}
          className={`h-5 w-5 ${
            index < rating ? "text-yellow-400" : "text-gray-300"
          }`}
          fill='currentColor'
          viewBox='0 0 20 20'
        >
          <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.366 2.448a1 1 0 00-.364 1.118l1.286 3.957c.3.921-.755 1.688-1.54 1.118l-3.366-2.448a1 1 0 00-1.175 0l-3.366 2.448c-.785.57-1.84-.197-1.54-1.118l1.286-3.957a1 1 0 00-.364-1.118L2.25 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.957z' />
        </svg>
      ))}
    </div>
  );
};

const ReviewList: React.FC<ReviewsProps> = ({ reviews }) => {
  const [currentPage, setCurrentPage] = useState(1);

  // 총 페이지 수 계산
  const totalPages = Math.ceil(reviews.length / ITEMS_PER_PAGE);

  const currentReviews = reviews.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <div className='max-w-4xl mx-auto p-4'>
      <div className='grid gap-6'>
        {currentReviews.map((review) => (
          <div
            key={review.reviewId} // 고유한 key로 변경
            className='bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow duration-300'
          >
            <div className='flex items-center justify-between mb-4'>
              <div className='flex items-center'>
                <div className='bg-blue-500 rounded-full h-12 w-12 flex items-center justify-center text-white font-bold text-xl'>
                  {review.username.charAt(0)}
                </div>
                <div className='ml-4'>
                  <h2 className='text-lg font-semibold text-gray-800'>
                    {review.username}
                  </h2>
                  <p className='text-sm text-gray-500'>
                    {new Date(review.createdAt).toLocaleDateString()}
                  </p>
                </div>
              </div>
              <div className='flex flex-col items-center'>
                <div className='mb-2'>
                  <p className='text-gray-600'>
                    <span className='px-3 py-1 bg-gray-100 text-gray-800 font-medium rounded-md'>
                      {review.procedureName}
                    </span>
                  </p>
                </div>
                <div>{renderStars(review.rating)}</div>
              </div>
            </div>
            <div className='mt-3'>
              <p className='text-gray-800 whitespace-pre-line leading-relaxed'>
                {review.content}
              </p>
            </div>
          </div>
        ))}
      </div>
      {/* 페이지네이션 버튼 */}
      <div className='flex justify-center items-center mt-6 space-x-2'>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => setCurrentPage(index + 1)}
            className={`px-4 py-2 rounded transition-colors duration-200 ${
              currentPage === index + 1
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-blue-400"
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ReviewList;
