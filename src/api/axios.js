import axios from 'axios'

const baseURL = '/api'

export const service = axios.create({
    baseURL: baseURL, // api base_url
    timeout: 6000 // 请求超时时间
})

service.interceptors.response.use((response) => {
    return response.data
})
