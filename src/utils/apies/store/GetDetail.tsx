import { api } from "../../api";

type GetDetailResponse = {
  storeId: number;
  storeName: string;
  storeAddress: string;
  storePhone: string;
  storeType: string;
  createdAt: string;
  rating: number;
};

const getDeail = async (storeId: number) => {
  const response = await api.get<GetDetailResponse>(`/store/${storeId}`);
  return response;
};

export default getDeail;
export type { GetDetailResponse };
