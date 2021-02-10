
import axios from 'axios'
import config from '../configs/environment.config'

const api = axios.create({
  baseURL: config.apis.meli.url,
})

export const searchItem = async (query: any, limit: any) => {
    return await api.get(`${config.apis.meli.url}/sites/${config.apis.meli.region}/search?q=${query}&limit=${limit ? limit : config.apis.meli.limit}`);
}

export const getItem = async (id: string) => {
    return await api.get(`${config.apis.meli.url}/items/${id}`);
}

export const getItemDescription = async (id: string) => {
    return await api.get(`${config.apis.meli.url}/items/${id}/description`);
}
