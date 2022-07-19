import {
    CHECK_ACCESS_TOKEN_URL_PATH,
    SIGN_IN_URL_PATH
} from './constants'
import instance from './apiInstance';
import tokenService from '../token-service/tokenService'


const authService = {
    async login(username, password) {
         const response = await instance.post(SIGN_IN_URL_PATH, {username, password});
        if(response.status !== 200) {
            throw new Error(`Could not fetch ${ SIGN_IN_URL_PATH } received ${ response.status }`)
        } else {
            const {headers} = response;
            return ({accessToken: headers["x-satrap-1"], refreshToken: headers["x-satrap-2"]})
        }
    },

    async logout() {
        tokenService.removeAccessToken();
        tokenService.removeRefreshToken();
    },

    async checkAccessToken() {
        const res = await instance.get(CHECK_ACCESS_TOKEN_URL_PATH);
        return res.status === 200;
    }
};

export default authService;

// axios-retries Allows request-specific configuration
// Config params property

