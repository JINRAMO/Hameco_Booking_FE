import { api } from "../../api";
import { Partner } from "../../../entities/Partner";

const getPartners = async () => {
  const response = await api.get<Partner[]>(`/manager/partners`);
  return response;
};

export default getPartners;
export type { Partner };
