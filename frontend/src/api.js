import axios from "axios";

axios.defaults.headers.common = {
  "Content-Type": "application/json"
}

const api = axios.create({
  baseURL: "http://localhost:8080"
})

export default api;