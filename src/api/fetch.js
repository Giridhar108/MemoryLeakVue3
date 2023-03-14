import axios from 'axios'
// import Qs from 'qs'
// TODO: catch errors
export const baseUrl = 'https://jsonplaceholder.typicode.com'
let requests = []

const service = axios.create({
    baseURL: baseUrl,
})

service.interceptors.response.use(
    (response) => {
        requests = requests.filter(({ url }) => url !== response.config.url)
        return response.data
    },
    (error) => {
        if (error.name !== 'CanceledError') {
            return Promise.reject(error)
        }
    }
)

export default service
