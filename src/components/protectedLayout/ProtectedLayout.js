import React, {useEffect} from 'react'
import { Navigate, Outlet } from "react-router-dom";
import {authenticateUser} from '../../redux/modules/oauth/authentication/actions/actions';
import { connect } from 'react-redux'
import Loader from '../loader';

const ProtectedLayout = ({isAuth, loading, authenticateUser, isInitialized}) => {
    useEffect(() => {
        authenticateUser();
    }, []);
    return (
        loading ? <Loader /> :
            (!loading && isAuth) ? <Outlet /> : <Navigate to="/login" />
    );
};

const mapStateToProps = (state) => ({
    isAuth: state.login.isAuth,
    loading: state.auth.loading,
    isInitialized: state.app.isInitialized
});

const mapDispatchToProps = {
    authenticateUser
};

export default connect(mapStateToProps, mapDispatchToProps)(ProtectedLayout);