import axios from "axios";

// we have to set the base url for the backend
const api = axios.create({
    baseURL: "https://fullstack-app-mxiu.onrender.com/api/",
})

export default api;