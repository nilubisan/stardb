import axios from 'axios';
import {API_BASE_URL} from './constants';

const instance = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

// instance.interceptors.request.use(
//     (config) => {
//         const accessToken = tokenService.getAccessToken();
//         if(accessToken) {
//             config.headers["x-satrap-1"] = accessToken;
//         }
//         return config;
//     },
//     (error) => {
//         return Promise.reject(
//             error
//         );
//     }
// );
//
// instance.interceptors.response.use(
//     (res) => {
//         return res;
//     },
//     async (err) => {
//         const originalConfig = err.config;
//         if(originalConfig.url !== SIGN_IN_URL_PATH && err.response ) {
//             if(err.response.status === 401 && tokenService.getAccessToken()) {
//                 try {
//                     tokenService.removeAccessToken();
//                     const rs = await instance.post(REFRESH_TOKEN_URL_PATH, {}, {
//                         headers: { "x-satrap-2": tokenService.getRefreshToken() }
//                     });
//                     const { headers } = rs;
//                     tokenService.setAccessToken(headers["x-satrap-1"]);
//                     tokenService.setRefreshToken(headers["x-satrap-2"]);
//                     return instance(originalConfig);
//                 } catch (error) {
//                     return Promise.reject(error);
//                 }
//             }
//         }
//             return Promise.reject(err);
//     }
// );

export default instance;