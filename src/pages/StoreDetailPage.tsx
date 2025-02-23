import React, { useState, useEffect } from "react";
import StoreInfo from "../components/StoreInfo";
import getDetail, { GetDetailResponse } from "../utils/apies/store/GetDetail";
import DesignerList, { Designer } from "../components/DesignerList";
import Calendar, { AvailableHours } from "../components/Calendar";
import ReviewList, { Review } from "../components/ReviewList";

const StoreDetailPage: React.FC = () => {
  const [storeData, setStoreData] = useState<GetDetailResponse | null>(null);

  useEffect(() => {
    getDetail(1).then((data) => {
      setStoreData(data);
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

  const reviewData: Review[] = [
    {
      reviewId: 1,
      username: "John Doe",
      procedureName: "Haircut",
      rating: 4.5,
      content: "Great service and friendly staff!",
      createdAt: "2025-02-22T12:00:00",
    },
    {
      reviewId: 2,
      username: "Jane Doe",
      procedureName: "Hair Color",
      rating: 5,
      content: "Amazing experience, highly recommended!",
      createdAt: "2025-02-23T12:00:00",
    },
    {
      reviewId: 3,
      username: "Jane Doe",
      procedureName: "Hair Color",
      rating: 5,
      content: "Amazing experience, highly recommended!",
      createdAt: "2025-02-23T12:00:00",
    },
    {
      reviewId: 4,
      username: "Jane Doe",
      procedureName: "Hair Color",
      rating: 5,
      content: "Amazing experience, highly recommended!",
      createdAt: "2025-02-23T12:00:00",
    },
    {
      reviewId: 5,
      username: "Jane Doe",
      procedureName: "Hair Color",
      rating: 5,
      content: "Amazing experience, highly recommended!",
      createdAt: "2025-02-23T12:00:00",
    },
  ];

  if (!storeData) {
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
