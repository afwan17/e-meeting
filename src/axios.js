import axios from "axios";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

const api = axios.create({
  baseURL: apiUrl,
});

// Request interceptor → selalu pakai access_token
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("access_token");
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  return config;
});

// Response interceptor → kalau token expired, coba refresh
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // kalau 401 dan belum dicoba ulang
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const refreshToken = localStorage.getItem("refresh_token");
        const res = await axios.post(`${apiUrl}/auth/refresh`, {
          refresh_token: refreshToken,
        });

        const newAccessToken = res.data.data.access_token;
        localStorage.setItem("access_token", newAccessToken);

        // set ulang Authorization
        originalRequest.headers["Authorization"] = "Bearer " + newAccessToken;

        // ulang request sekali lagi
        return api(originalRequest);
      } catch (err) {
        // kalau refresh gagal, logout
        localStorage.removeItem("access_token");
        localStorage.removeItem("refresh_token");
        window.location.href = "/login";
        return Promise.reject(err);
      }
    }

    return Promise.reject(error);
  }
);

export default api;
