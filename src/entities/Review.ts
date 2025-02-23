type Review = {
  reviewId: number;
  username: string;
  procedureName: string;
  rating: number;
  content: string;
  createdAt: string; // ISO 형식의 날짜 문자열
};

export type { Review };
