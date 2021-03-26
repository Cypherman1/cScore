import axios from "axios";

let url = "http://107.120.70.222:9005/";

const instance = axios.create({
  baseURL: url,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "Cache-Control": "no-cache",
  },
});

// instance.interceptors.request.use(
//   async (config) => {
//     const token = await AsyncStorage.getItem('token');
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (err) => {
//     return Promise.reject(err);
//   },
// );

export const getRawPath = (imageId) => {
  return `${url}/api/images/${imageId}/raw`;
};

export const getDetectedPath = (imageId) => {
  return `${url}/api/images/${imageId}/detected`;
};

export default instance;
