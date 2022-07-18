import { CHECK_ACCESS_TOKEN_URL_PATH, SIGN_IN_URL_PATH } from './constants';
import instance from './apiInstance';

const authService = {
    async login(username, password) {
         const response = await instance.post(SIGN_IN_URL_PATH, {username, password});
         if(response.data.accessToken) {
             localStorage.setItem("user", JSON.stringify(response.data));
         }
            return response.data;
    },

    async logout() {
        localStorage.removeItem("user");
    },

    async checkAccessToken() {
        const res = await instance.post(CHECK_ACCESS_TOKEN_URL_PATH);
        return res.status === 200;
    }
};

export default authService;