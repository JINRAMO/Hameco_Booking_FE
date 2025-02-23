import React from "react";
import { Store } from "../entities/Store";

interface StoreInfoProps {
  store: Store;
}

const StoreInfo: React.FC<StoreInfoProps> = ({ store }) => {
  const {
    // storeId,
    storeName,
    storeAddress,
    storePhone,
    storeType,
    createdAt,
    rating,
  } = store;

  return (
    <div className='relative overflow-x-auto bg-white shadow-md'>
      <table className='w-full text-sm text-left text-gray-500'>
        <tbody>
          <tr className='bg-white border-b border-gray-200'>
            <th className='px-6 py-3 text-gray-700'>가게명</th>
            <td className='px-6 py-3 text-gray-900'>{storeName}</td>
          </tr>
          <tr className='bg-white border-b border-gray-200'>
            <th className='px-6 py-3 text-gray-700'>주소</th>
            <td className='px-6 py-3 text-gray-900'>{storeAddress}</td>
          </tr>
          <tr className='bg-white border-b border-gray-200'>
            <th className='px-6 py-3 text-gray-700'>전화번호</th>
            <td className='px-6 py-3 text-gray-900'>{storePhone}</td>
          </tr>
          <tr className='bg-white border-b border-gray-200'>
            <th className='px-6 py-3 text-gray-700'>업종</th>
            <td className='px-6 py-3 text-gray-900'>{storeType}</td>
          </tr>
          <tr className='bg-white border-b border-gray-200'>
            <th className='px-6 py-3 text-gray-700'>개장일</th>
            <td className='px-6 py-3 text-gray-900'>
              {new Date(createdAt)
                .toLocaleDateString("ko-KR", {
                  year: "numeric",
                  month: "2-digit",
                  day: "2-digit",
                })
                .replace(/\./g, "-")
                .replace(/ /g, "")
                .slice(0, 10)}
            </td>
          </tr>
          <tr className='bg-white'>
            <th className='px-6 py-3 text-gray-700'>평점</th>
            <td className='px-6 py-3 text-gray-900'>{rating}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default StoreInfo;
