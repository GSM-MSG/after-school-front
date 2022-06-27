import axios from "axios";
import { AdminUrl } from "../config/config";

const admin = axios.create({
  baseURL: AdminUrl,
  withCredentials: true,
});

export default admin;
