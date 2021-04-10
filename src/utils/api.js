import axios from "axios";

const api = axios.create({ baseURL: process.env.REACT_APP_BASE_URL });

api.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  function (error) {
    const originalRequest = error.config;
    let refreshToken = localStorage.getItem("refreshToken");

    if (
      refreshToken &&
      error.response.status === 401 &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;
      return axios
        .post(`${process.env.REACT_APP_BASE_URL}/api/user/refresh_token`, {
          refreshToken,
        })
        .then((res) => {
          if (res.status === 200) {
            localStorage.setItem("accessToken", res.data.accessToken);
            return axios(originalRequest);
          }
        });
    }
    return Promise.reject(error);
  }
);

const apiCalls = {
  //user apis:

  signup: (body) => api.post(`/users/signup`, body),
  login: (body) => api.post(`/users/login`, body),
  sendVerifiationEmail: () => api.put(`/users/send_verification_mail`),
  verifyEmail: (body) => api.put(`/users/verify_email`, body),
  getUserProfile: () => api.get(`/users/profile`),
  deleteUser: () => api.delete(`/users/delete`),

  //coupon apis

  createCoupon: (body) => api.post(`/coupons/create`, body),
  listCoupons: (filters = {}) => api.get(`/coupons/list`, { params: filters }),
  buyCoupon: (body) => api.put(`/coupons/buy`, body),
};

export default apiCalls;
