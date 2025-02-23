import React from "react";
import { Partner } from "../entities/Partner";

interface PartnersProps {
  partners: Partner[];
  size: "1/2" | "1"; // 화면 2분할 또는 전체
}

const PartnerList: React.FC<PartnersProps> = ({ partners, size = "1" }) => {
  return (
    <div className='p-8 bg-gray-100 min-h-screen'>
      <h1 className='text-3xl font-bold mb-6 text-center'>Partner List</h1>
      <div
        className={`${
          size == "1"
            ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            : "grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-6"
        }`}
      >
        {partners.map((partner) => (
          <div
            key={partner.partnerId}
            className='bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300'
          >
            <div className='flex justify-between items-center mb-4'>
              <h2 className='text-xl font-semibold'>{partner.businessName}</h2>
              <div className='text-green-500'>
                {partner.status === "active" ? "활성" : "비활성"}
              </div>
            </div>

            <div className='space-y-4'>
              <div className='flex justify-between'>
                <p className='text-gray-600 font-medium'>Address:</p>
                <p className='text-gray-700'>{partner.businessAddress}</p>
              </div>
              <div className='flex justify-between'>
                <p className='text-gray-600 font-medium'>Phone:</p>
                <p className='text-gray-700'>{partner.businessPhone}</p>
              </div>
              <div className='flex justify-between'>
                <p className='text-gray-600 font-medium'>Business Number:</p>
                <p className='text-gray-700'>{partner.businessNumber}</p>
              </div>
              <div className='flex justify-between'>
                <p className='text-gray-600 font-medium'>Created:</p>
                <p className='text-gray-700'>
                  {new Date(partner.createdAt).toLocaleDateString()}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartnerList;
