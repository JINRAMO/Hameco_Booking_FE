import { api } from "../../api";
import { Review } from "../../../entities/Review";

const getReviewsByStore = async (storeId: number): Promise<Review[]> => {
  const response = await api.get<Review[]>(`/store/${storeId}/reviews`);
  return response;
};

export default getReviewsByStore;
export type { Review };
