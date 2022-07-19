import React from 'react';
import { connect } from 'react-redux'
import { useFormik } from 'formik';
import LoginView from './LoginView';
import { loginUser } from '../../redux/modules/oauth/authorization/actions/actions';

const Login = ({loginUser}) => {
    const formik = useFormik({
        initialValues: {
            username: '',
            password: ''
        },
        onSubmit: ({username, password}) => {
            loginUser(username, password);
        }
    });

    return (
        <LoginView onFormSubmit={formik.handleSubmit} handleInputChange={formik.handleChange} />
    );
};

const mapDispatchToProps = {
    loginUser
}

export default connect(null, mapDispatchToProps)(Login);


