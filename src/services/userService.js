import axios from "axios";

import { API_ENDPOINTS } from "../utils/constants";

export const getUsers = async () => {
  const response = await axios.get(API_ENDPOINTS.USERS);
  return response.data;
};