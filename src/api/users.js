import Api from './fetch'

const routeUrl = '/users'

export default {
    getUsers() {
        return Api.get(`${routeUrl}`)
    },
}
