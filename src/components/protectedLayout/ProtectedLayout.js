import React, {useEffect} from 'react'
import { Navigate, Outlet } from "react-router-dom";
import {authenticateUser} from '../../redux/modules/oauth/authentication/actions/actions';
import { connect } from 'react-redux'
import Loader from '../loader';

const ProtectedLayout = ({isAuth, loading, authenticateUser}) => {
    useEffect(() => {
        authenticateUser();
    }, []);
    return (
        loading ? <Loader /> :
            (!loading && isAuth) ? <Outlet /> : <Navigate to="/login" replace="true" />
    );
};

const mapStateToProps = (state) => ({
    isAuth: state.login.isAuth,
    loading: state.auth.loading
});

const mapDispatchToProps = {
    authenticateUser
};

export default connect(mapStateToProps, mapDispatchToProps)(ProtectedLayout);