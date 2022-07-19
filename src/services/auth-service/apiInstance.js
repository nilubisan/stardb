import axios from 'axios';
import {API_BASE_URL, SIGN_IN_URL_PATH, REFRESH_TOKEN_URL_PATH} from './constants';
import  tokenService from "../token-service/tokenService";

const instance = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

instance.interceptors.request.use(
    (config) => {
        const accessToken = tokenService.getAccessToken();
        if(accessToken) {
            config.headers["x-satrap-1"] = accessToken;
        }
        return config;
    },
    (error) => {
        return Promise.reject(
            error
        );
    }
);

instance.interceptors.response.use(
    (res) => {
        return res;
    },
    async (err) => {
        const originalConfig = err.config;
        if(originalConfig.url !== SIGN_IN_URL_PATH && err.response ) {
            console.log(originalConfig);
            if(err.response.status === 401 && !err.response.headers.retry) {
                try {
                    const rs = await instance.post(REFRESH_TOKEN_URL_PATH, {}, {
                        headers: { "x-satrap-2": tokenService.getRefreshToken(), "retry": true }
                    });
                    const { headers } = rs;
                    tokenService.setAccessToken(headers["x-satrap-1"]);
                    tokenService.setRefreshToken(headers["x-satrap-2"]);
                    return instance(originalConfig);
                } catch (error) {
                    return Promise.reject(error);
                }
            }
        }
            return Promise.reject(err);
            }
);

export default instance;