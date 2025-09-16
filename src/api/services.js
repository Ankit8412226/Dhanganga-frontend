import apiClient from "../apiClient";

export const fetchServices = () => apiClient.get("/api/service/services");
export const fetchServiceById = (id) => apiClient.get(`/api/service/services/${id}`);
export const fetchSubServices = () => apiClient.get("/api/service/subservices");
export const fetchSubServiceById = (id) => apiClient.get(`/api/service/subservices/${id}`);
export const fetchTypes = () => apiClient.get("/api/service/types");
export const fetchTypeById = (id) => apiClient.get(`/api/service/types/${id}`);
export const fetchAssociates = () => apiClient.get("/api/service/associates");
export const fetchAssociateById = (id) => apiClient.get(`/api/service/associates/${id}`);
