import { api } from "../../api";

type Review = {
  reviewId: number;
  username: string;
  procedureName: string;
  rating: number;
  content: string;
  createdAt: string; // ISO 형식의 날짜 문자열
};

const getReviews = async (storeId: number): Promise<Review[]> => {
  const response = await api.get<Review[]>(`/store/${storeId}/reviews`);
  return response;
};

export default getReviews;
export type { Review };
