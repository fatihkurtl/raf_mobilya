import axios from "axios";

const useApi = axios.create({
  baseURL:
    "https://jsonplaceholder.typicode.com" || import.meta.env.VITE_BASE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default useApi;
