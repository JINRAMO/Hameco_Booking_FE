import React, { useState, useMemo } from "react";

type AvailableHours = {
  Monday?: number[];
  Tuesday?: number[];
  Wednesday?: number[];
  Thursday?: number[];
  Friday?: number[];
  Saturday?: number[];
  Sunday?: number[];
};

interface DesignerData {
  availableHours: AvailableHours;
}

const Calendar: React.FC<DesignerData> = ({ availableHours }) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedHour, setSelectedHour] = useState<number | null>(null);

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    return new Date(year, month, 1).getDay();
  };

  const days = useMemo(() => {
    const daysInMonth = getDaysInMonth(currentMonth);
    const firstDayOfMonth = getFirstDayOfMonth(currentMonth);

    const daysArray = [];
    for (let i = 0; i < firstDayOfMonth; i++) {
      daysArray.push(<div key={`empty-${i}`} className='p-2'></div>);
    }
    for (let i = 1; i <= daysInMonth; i++) {
      const date = new Date(
        currentMonth.getFullYear(),
        currentMonth.getMonth(),
        i
      );
      daysArray.push(
        <div
          key={i}
          className={`p-2 cursor-pointer ${
            selectedDate && date.toDateString() === selectedDate.toDateString()
              ? "bg-blue-200"
              : ""
          }`}
          onClick={() => {
            if (
              selectedDate &&
              date.toDateString() === selectedDate.toDateString()
            ) {
              setSelectedDate(null);
              setSelectedHour(null);
            } else {
              setSelectedDate(date);
              setSelectedHour(null);
            }
          }}
        >
          {i}
        </div>
      );
    }
    return daysArray;
  }, [currentMonth, selectedDate]);

  const getDayName = (date: Date) => {
    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    return daysOfWeek[date.getDay()];
  };

  const getAvailableHours = () => {
    if (!selectedDate) return [];
    const dayName = getDayName(selectedDate);
    return availableHours[dayName as keyof AvailableHours] || [];
  };

  const getMonthName = (date: Date) => {
    return date.toLocaleString("default", { month: "long" });
  };

  const handlePrevMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1)
    );
  };

  const handleNextMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1)
    );
  };

  return (
    <div className='p-4'>
      <div className='flex justify-center items-center mb-4'>
        <button
          onClick={handlePrevMonth}
          className='p-2 rounded-full hover:bg-gray-200 transition-colors duration-200'
        >
          {"<"}
        </button>
        <div className='flex items-center mx-4'>
          <div className='font-semibold text-lg'>
            {currentMonth.getFullYear()}년 {getMonthName(currentMonth)}
          </div>
        </div>
        <button
          onClick={handleNextMonth}
          className='p-2 rounded-full hover:bg-gray-200 transition-colors duration-200'
        >
          {">"}
        </button>
      </div>
      <div className='bg-white shadow-md rounded-lg overflow-hidden'>
        <div className='grid grid-cols-7 gap-2 p-4'>
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
            <div key={day} className='text-center font-semibold'>
              {day}
            </div>
          ))}
          {days}
        </div>
      </div>
      <div className='mt-4'>
        {getAvailableHours().map((hour) => (
          <label
            key={hour}
            className={`inline-flex items-center mr-2 mb-2 ${
              selectedHour === hour
                ? "bg-blue-200 hover:bg-blue-300"
                : "bg-gray-200 hover:bg-gray-300"
            } rounded-full px-4 py-2 cursor-pointer transition-colors duration-200`}
          >
            <input
              type='radio'
              className='hidden'
              value={hour}
              checked={selectedHour === hour}
              onChange={() => setSelectedHour(hour)}
            />
            <span className='text-sm'>{hour}:00</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
export type { AvailableHours, DesignerData };
