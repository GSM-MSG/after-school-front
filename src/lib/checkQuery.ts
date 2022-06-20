import { AxiosResponse } from "axios";
import api from "./api";

const checkQuery = async (query: () => Promise<AxiosResponse>) => {
  try {
    const { data } = await query();
    return data;
  } catch (e) {
    await api.post("/auth/refresh/web");
    const { data } = await query();
    return data;
  }
};

export default checkQuery;
