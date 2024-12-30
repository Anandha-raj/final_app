import axios from "axios";

// we have to set the base url for the backend
const api = axios.create({
    baseURL: "https://final-app-45ng.onrender.com/api/",
})

export default api;