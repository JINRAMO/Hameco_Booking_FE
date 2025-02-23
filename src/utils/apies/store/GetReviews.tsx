import { api } from "../../api";
import { Review } from "../../../entities/Review";

const getReviews = async (storeId: number): Promise<Review[]> => {
  const response = await api.get<Review[]>(`/store/${storeId}/reviews`);
  return response;
};

export default getReviews;
export type { Review };
