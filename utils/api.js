import apiClient from "./http-config";

export const fetchCoinsList = async () => {
    const fetch = await apiClient.get(`/coins/list`);
    return fetch.data
}