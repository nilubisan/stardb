const ACCESS_TOKEN = "ACCESS_TOKEN";
const REFRESH_TOKEN = "REFRESH_TOKEN";

const tokenService = {
    getAccessToken() {
        return localStorage.getItem(ACCESS_TOKEN);
    },
    getRefreshToken() {
        return localStorage.getItem(REFRESH_TOKEN);
    },
    setAccessToken(accessToken) {
        localStorage.setItem(ACCESS_TOKEN, accessToken);
    },
    setRefreshToken(refreshToken) {
        localStorage.setItem(REFRESH_TOKEN, refreshToken);
    },
    removeAccessToken() {
        localStorage.removeItem(ACCESS_TOKEN)
    },
    removeRefreshToken() {
        localStorage.removeItem(REFRESH_TOKEN)
    }
}

export default tokenService;