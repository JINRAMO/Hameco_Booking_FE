import React from "react";
import { AvailableHours } from "../../entities/AvailableHours";
import Calendar from "../../components/Calendar";

const MainDesignerPage: React.FC = () => {
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
      <Calendar availableHours={availableHours} dayHeightSize={8} />
    </div>
  );
};

export default MainDesignerPage;
