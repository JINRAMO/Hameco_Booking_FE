import React from "react";
import StoreInfo, { Store } from "../components/StoreInfo";
import DesignerList, { Designer } from "../components/DesignerList";
import Calendar, { AvailableHours } from "../components/Calendar";
import ReviewList from "../components/ReviewList";

const StoreDetailPage: React.FC = () => {
  const storeData: Store = {
    storeName: "Beauty Salon",
    storeAddress: "123 Main St, City, Country",
    storePhone: "+1234567890",
    storeType: "Hair & Beauty",
    createdAt: "2025-02-22T12:00:00",
    rating: 4.5,
  };

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

  return (
    <div>
      <StoreInfo store={storeData} />
      <DesignerList designers={designerData} />
      <Calendar availableHours={availableHours} />
      <ReviewList />
    </div>
  );
};

export default StoreDetailPage;
