import axios from "axios";

const baseURL = "https://dhanganga-backend-production.up.railway.app/"

const apiClient = axios.create({
	baseURL,
	headers: {
		Accept: "application/json",
	},
});

export default apiClient;
