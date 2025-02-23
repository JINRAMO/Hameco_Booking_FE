import React, { useState, useEffect } from "react";
import StoreInfo from "../components/StoreInfo";
import getDetail, { GetDetailResponse } from "../utils/apies/store/GetDetail";
import DesignerList, { Designer } from "../components/DesignerList";
import Calendar, { AvailableHours } from "../components/Calendar";
import ReviewList from "../components/ReviewList";
import getReviews, { Review } from "../utils/apies/store/GetReviews";

const StoreDetailPage: React.FC = () => {
  const [storeData, setStoreData] = useState<GetDetailResponse | null>(null);
  const [reviewData, setReviewData] = useState<Review[] | null>(null);

  useEffect(() => {
    getDetail(1).then((data) => {
      setStoreData(data);
    });
    getReviews(1).then((data) => {
      setReviewData(data);
      console.log(data);
    });
  }, []);

  const designerData: Designer[] = [
    {
      username: "John Doe",
      phoneNumber: "010-1234-1234",
      careerYears: 3,
    },
    {
      username: "Jane Doe",
      phoneNumber: "010-1234-5678",
      careerYears: 5,
    },

    {
      username: "Jane Doe",
      phoneNumber: "010-1234-5678",
      careerYears: 5,
    },

    {
      username: "Jane Doe",
      phoneNumber: "010-1234-5678",
      careerYears: 5,
    },

    {
      username: "Jane Doe",
      phoneNumber: "010-1234-5678",
      careerYears: 5,
    },

    {
      username: "Jane Doe",
      phoneNumber: "010-1234-5678",
      careerYears: 5,
    },
  ];

  const availableHours: AvailableHours = {
    Monday: [9, 10, 11, 12, 13, 14, 15, 16, 17],
    Tuesday: [9, 10, 11, 12, 13, 14, 15, 16, 17],
    Wednesday: [9, 10, 11, 12, 13, 14, 15, 16, 17],
    Thursday: [9, 10, 11, 12, 13, 14, 15, 16, 17],
    Friday: [9, 10, 11, 12, 13, 14, 15, 16, 17],
    Saturday: [9, 10, 11, 12, 13, 14, 15, 16, 17],
    Sunday: [9, 10, 11, 12, 13, 14, 15, 16, 17],
  };

  if (!storeData || !reviewData) {
    return <div>Loading...</div>;
  }

  return (
    <div className='container mx-auto p-4'>
      <div className='flex flex-col md:flex-row gap-6'>
        {/* 왼쪽 컬럼 */}
        <div className='w-full md:w-1/2 space-y-6'>
          <StoreInfo store={storeData} />
          <DesignerList designers={designerData} />
        </div>
        {/* 오른쪽 컬럼 */}
        <div className='w-full md:w-1/2 space-y-6'>
          <Calendar availableHours={availableHours} />
          <ReviewList reviews={reviewData} />
        </div>
      </div>
    </div>
  );
};

export default StoreDetailPage;
