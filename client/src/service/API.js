import axios from "axios";

const API = axios.create({
  baseURL: "https://goel-service-proj-docx.vercel.app/api/", // change if needed
});

export default API;
