import { api } from "../../api";
import { Store } from "../../../entities/Store";

const getStore = async (storeId: number) => {
  const response = await api.get<Store>(`/store/${storeId}`);
  return response;
};

export default getStore;
export type { Store };
