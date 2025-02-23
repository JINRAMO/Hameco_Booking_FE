import { api } from "../../api";
import { Store } from "../../../entities/Store";

const getStores = async () => {
  const response = await api.get<Store[]>(`/store`);
  return response;
};

export default getStores;
export type { Store };
