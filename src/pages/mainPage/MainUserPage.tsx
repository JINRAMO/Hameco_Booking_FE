import React, { useState, useEffect } from "react";
import getList, { Store } from "../../utils/apies/store/getStores";
import StoreCardList from "../../components/StoreCardList";

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

  return <StoreCardList stores={storeList} />;
};

export default MainUserPage;
