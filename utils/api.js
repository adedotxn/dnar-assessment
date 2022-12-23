import apiClient from "./http-config";

export const fetchCoinsList = async () => {
    const fetch = await apiClient.get(`/coins/list`);
    return fetch.data
}


export const getSpecificCoinDetails  = async (coinId) => {
    const fetch = await apiClient.get(`/coins/${coinId}`);
    return fetch.data
}


export const fetchMarketLeaders = async() => {
    const fetch = await apiClient.get(`/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`)
    return fetch.data
}