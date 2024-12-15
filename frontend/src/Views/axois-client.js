import axios from "axios";

let axiosClient = axios.create({
  baseURL: "http://127.0.0.1:8000/",
});
axiosClient.interceptors.request.use((request) => {
  let token = localStorage.getItem("Access_Token");
  if (request) {
    request.headers.Authorization = `bearer ${token}`;
    return request;
  }
});
axiosClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (err) => {
    if (err.staus == 401) {
      localStorage.removeItem("Access_Token");
    }
    throw err;
  }
);

export default axiosClient;
