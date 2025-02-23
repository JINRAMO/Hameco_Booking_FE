import React from "react";

type Designer = {
  username: string;
  phoneNumber: string;
  careerYears: number;
};

interface DesignerListProps {
  designers: Designer[];
}

const DesignerList: React.FC<DesignerListProps> = ({ designers }) => {
  return (
    <div className='bg-white shadow-md rounded-lg overflow-hidden'>
      <div className='grid gap-6'>
        {designers.map((designer, index) => (
          <div
            key={index}
            className='p-bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow duration-300'
          >
            <div className='flex items-center'>
              <div className='flex-shrink-0'>
                <div className='bg-gray-200 rounded-full h-12 w-12 flex items-center justify-center'>
                  <span className='text-xl font-semibold text-gray-700'>
                    {designer.username.charAt(0)}
                  </span>
                </div>
              </div>
              <div className='ml-4 text-left'>
                <p className='text-lg font-semibold text-gray-800'>
                  {designer.username}
                </p>
                <p className='text-sm text-gray-600'>{designer.phoneNumber}</p>
                <p className='text-sm text-gray-500'>
                  경력: {designer.careerYears}년
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DesignerList;
export type { Designer };
