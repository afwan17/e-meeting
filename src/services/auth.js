import axios from "axios";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export const registerApi = async (payload) => {
  const response = await axios.post(`${apiUrl}/register`, payload);
  return response.data;
};

export const loginApi = async (payload) => {
  const response = await axios.post(`${apiUrl}/login`, payload);
  return response.data;
};
