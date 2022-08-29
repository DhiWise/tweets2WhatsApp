import Axios from "axios";
const defaultAxios = Axios.create({
  headers: {
    Authorization:
      "Bearer AAAAAAAAAAAAAAAAAAAAAJz5dwEAAAAAauJ0KEnrQg7MN5peLShVmoi1neo%3DhILm0kY3xIAsacgZge06qdIsxVlpysCMbrrZV8wUiNDFBGUi5q",
    Cookie:
      "guest_id=v1%3A165639453227761299; guest_id=v1%3A165735342446112413",
  },
});
defaultAxios.interceptors.response.use(
  (res) => {
    return res.data;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export function apiClient(method, url, options = {}) {
  const { data = {}, headers = {}, params = {}, ...rest } = options;
  return defaultAxios({
    url,
    data,
    method,
    params,
    headers,
    ...rest,
  });
}

export const apis = {
  get: (url, args) => apiClient("get", url, args),
  post: (url, args) => apiClient("post", url, args),
  put: (url, args) => apiClient("put", url, args),
  patch: (url, args) => apiClient("patch", url, args),
  delete: (url, args) => apiClient("delete", url, args),
};
