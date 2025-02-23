import { api } from "../../api";
import { Store } from "../../../entities/Store";

const getDeail = async (storeId: number) => {
  const response = await api.get<Store>(`/store/${storeId}`);
  return response;
};

export default getDeail;
export type { Store };
