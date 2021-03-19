import axios from "axios";

const BASE_URL = "http://localhost:5000/api";

const api = axios.create({ baseURL: BASE_URL });

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

export default {
  //user apis:

  signup: (body) => api.post(`/users/signup`, body),
  login: (body) => api.post(`/users/login`, body),
  sendVerifiationEmail: () => api.put(`/users/send_verification_mail`),
  verifyEmail: (body) => api.put(`/users/verify_email`, body),
  getUserProfile: (userId) => api.get(`/users/profile/${userId}`),
  deleteUser: () => api.delete(`/users/delete`),

  //coupon apis

  createCoupon: (body) => api.post(`/coupons/create`, body),
  listCoupons: (filters) => api.get(`/coupons/list`, { params: filters }),
  buyCoupon: (body) => api.put(`/coupons/buy`, body),
};
