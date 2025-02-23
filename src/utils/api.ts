import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

// Axios 인스턴스 생성
export const baseApi: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL, // 환경 변수에서 API URL 가져오기
  headers: {
    accept: "application/json", // 기본 accept 헤더 설정
  },
});

// 요청 인터셉터
baseApi.interceptors.request.use(
  (config) => {
    // const Token = localStorage.getItem("Authorization");
    const Authorization = "1";

    // Authorization 헤더 추가
    if (Authorization) {
      config.headers.Authorization = Authorization;
    }

    return config;
  },
  (error) => {
    console.error("요청 인터셉터 에러:", error);
    return Promise.reject(error);
  }
);

// API 호출 객체
export const api = {
  // GET 요청
  get: async <T>(
    endpoint: string,
    config: AxiosRequestConfig = {}
  ): Promise<T> => {
    const response = await baseApi.get<T>(endpoint, config);
    return response.data;
  },

  // POST 요청
  post: async <T>(
    endpoint: string,
    data: unknown = null,
    config: AxiosRequestConfig = {}
  ): Promise<T> => {
    const response = await baseApi.post<T>(endpoint, data, config);
    return response.data;
  },

  // PATCH 요청
  patch: async <T>(
    endpoint: string,
    data: unknown,
    config: AxiosRequestConfig = {}
  ): Promise<T> => {
    const response = await baseApi.patch<T>(endpoint, data, config);
    return response.data;
  },

  // PUT 요청
  put: async <T>(
    endpoint: string,
    data: unknown,
    config: AxiosRequestConfig = {}
  ): Promise<T> => {
    const response = await baseApi.put<T>(endpoint, data, config);
    return response.data;
  },

  // DELETE 요청
  delete: async <T>(
    endpoint: string,
    config: AxiosRequestConfig = {}
  ): Promise<T> => {
    const response = await baseApi.delete<T>(endpoint, config);
    return response.data;
  },
};
