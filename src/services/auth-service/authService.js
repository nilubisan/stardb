import { CHECK_ACCESS_TOKEN_URL_PATH, REFRESH_TOKEN_URL_PATH, SIGN_IN_URL_PATH } from './constants'
import instance from './apiInstance'
import tokenService from '../token-service/tokenService'

const authService = {
    async login(username, password) {
        const response = await instance.post(SIGN_IN_URL_PATH, { username, password })
        const { headers } = response
        return ({ accessToken: headers['x-satrap-1'], refreshToken: headers['x-satrap-2'] })
    },

    async logout() {
        tokenService.removeAccessToken()
        tokenService.removeRefreshToken()
    },

    async checkAccessToken(token) {
        let response
        try {
            response = await instance.get(CHECK_ACCESS_TOKEN_URL_PATH, { headers: { 'x-satrap-1': token } })
            return response.status === 200
        } catch (e) {
            return false
        }
    },

    async refreshToken(token) {
        try {
            const res = await instance.post(REFRESH_TOKEN_URL_PATH, {}, {
                headers: { 'x-satrap-2': token }
            })
            if(res.status === 200) {
                const { headers } = res
                return ({ accessToken: headers['x-satrap-1'], refreshToken: headers['x-satrap-2'] })
            }
        } catch (e) {
            return false
        }

    },
}

export default authService

