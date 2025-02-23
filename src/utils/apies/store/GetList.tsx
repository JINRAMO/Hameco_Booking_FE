import { api } from "../../api";
import { Store } from "../../../entities/Store";

const getList = async () => {
  const response = await api.get<Store[]>(`/store`);
  return response;
};

export default getList;
export type { Store };
