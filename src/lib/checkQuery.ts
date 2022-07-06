import { AxiosResponse } from "axios";
import admin from "./admin";
import api from "./api";

const checkQuery = async <T>(
  query: () => Promise<AxiosResponse>,
  isClient?: boolean
): Promise<T> => {
  try {
    const { data } = await query();
    return data;
  } catch (e) {
    isClient
      ? await api.post("/auth/refresh/web")
      : await admin.get("/teacher/refreshtoken");
    const { data } = await query();
    return data;
  }
};

export default checkQuery;
