export const BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE || "http://localhost:4000/api";


  export interface GeneralApiResponse<T> {
    status?: "success" | "error";
    data: T;
    message?: string;
  }
