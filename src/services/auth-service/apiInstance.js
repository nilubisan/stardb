import axios from 'axios';
import {API_BASE_URL, SIGN_IN_URL_PATH, REFRESH_TOKEN_URL_PATH} from './constants';

const instance = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

instance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("accessToken");
        if(token) {
            config.headers["X-Satrap-1"] = token;
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
        if(originalConfig.url !== SIGN_IN_URL_PATH && err.response) {
            if(err.response.status === 401 && !originalConfig._retry) {
                originalConfig._retry = true;
                try {
                    const rs = await instance.post(REFRESH_TOKEN_URL_PATH, {
                        "X-Satrap-2":  localStorage.getItem("refreshToken"),
                    });
                    localStorage.setItem("accessToken", rs.headers["X-Satrap-2"]);
                    return instance(originalConfig);
                } catch (error) {
                    return Promise.reject(error)
                }
            }
        }
        return Promise.reject(err)
    }
);

export default instance;