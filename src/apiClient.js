import axios from "axios";

const baseURL = "http://localhost:5000/"

const apiClient = axios.create({
	baseURL,
	headers: {
		Accept: "application/json",
	},
});

export default apiClient;
