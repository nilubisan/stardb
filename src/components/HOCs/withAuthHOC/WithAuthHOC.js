import React from 'react';
import Login from '../../login';
import authService from '../../../services/auth-service/authService'

const WithAuth = (wrappedComponent) => {
    const accessToken = localStorage.getItem("accessToken");
    if(accessToken) {
        authService.checkAccessToken().then((res) => {
            return res ? wrappedComponent : Login
        })
    }
    return Login;
};

export default WithAuth;