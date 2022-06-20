import axios from "axios";
import { ServerUrl } from "../config/config";

const api = axios.create({
  baseURL: ServerUrl,
  withCredentials: true,
});

export default api;
