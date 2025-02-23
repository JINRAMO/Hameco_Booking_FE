import React, { useState, useEffect } from "react";
import getList, { Store } from "../utils/apies/store/GetList";

const MainUserPage: React.FC = () => {
  const [storeList, setStoreList] = useState<Store[] | null>(null);

  useEffect(() => {
    getList().then((data) => {
      setStoreList(data);
    });
  }, []);

  if (!storeList) {
    return (
      <div className='flex justify-center items-center h-screen'>
        <p className='text-xl font-semibold'>Loading...</p>
      </div>
    );
  }

  return (
    <div className='p-8 bg-gray-100 min-h-screen'>
      <h1 className='text-3xl font-bold mb-6 text-center'>Store List</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        {storeList.map((store) => (
          <div
            key={store.storeId}
            className='bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300'
          >
            <div className='flex justify-between items-center mb-4'>
              <h2 className='text-xl font-semibold'>{store.storeName}</h2>
              <div className='text-yellow-500'>
                {store.rating} <span>⭐</span>
              </div>
            </div>

            <div className='space-y-4'>
              <div className='flex justify-between'>
                <p className='text-gray-600 font-medium'>Address:</p>
                <p className='text-gray-700'>{store.storeAddress}</p>
              </div>
              <div className='flex justify-between'>
                <p className='text-gray-600 font-medium'>Phone:</p>
                <p className='text-gray-700'>{store.storePhone}</p>
              </div>
              <div className='flex justify-between'>
                <p className='text-gray-600 font-medium'>Type:</p>
                <p className='text-gray-700'>{store.storeType}</p>
              </div>
              <div className='flex justify-between'>
                <p className='text-gray-600 font-medium'>Created:</p>
                <p className='text-gray-700'>
                  {new Date(store.createdAt).toLocaleDateString()}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainUserPage;
