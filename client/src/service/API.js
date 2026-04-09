import axios from "axios";

const API = axios.create({
  baseURL: "https://goel-service-proj-docx-k8fmvuhub-aditya2909s-projects.vercel.app/api/", // change if needed
});

export default API;
