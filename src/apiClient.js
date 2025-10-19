import axios from "axios";

const baseURL = "https://dhanganga-backend.vercel.app/"

const apiClient = axios.create({
	baseURL,
	headers: {
		Accept: "application/json",
	},
});

export default apiClient;
