import React, { useState, useEffect } from "react";
import getPartners, { Partner } from "../../utils/apies/partner/getPartners";
import PartnerList from "../../components/PartnerList";
import getStores, { Store } from "../../utils/apies/store/getStores";
import StoreCardList from "../../components/StoreCardList";

const MainManagerPage: React.FC = () => {
  const [partnerList, setPartnerList] = useState<Partner[] | null>(null);
  const [storeList, setStoreList] = useState<Store[] | null>(null);

  useEffect(() => {
    getPartners().then((data) => {
      setPartnerList(data);
    });

    getStores().then((data) => {
      setStoreList(data);
    });
  }, []);

  if (!partnerList || !storeList) {
    return (
      <div className='flex justify-center items-center h-screen'>
        <p className='text-xl font-semibold'>Loading...</p>
      </div>
    );
  }

  return (
    <div className='container mx-auto p-4'>
      <div className='flex flex-col md:flex-row gap-6'>
        {/* 왼쪽 컬럼 */}
        <div className='w-full md:w-1/2 space-y-6'>
          <PartnerList partners={partnerList} size='1/2' />
        </div>
        {/* 오른쪽 컬럼 */}
        <div className='w-full md:w-1/2 space-y-6'>
          <StoreCardList stores={storeList} size='1/2' />
        </div>
      </div>
    </div>
  );
};

export default MainManagerPage;
