import React from 'react';
import { connect } from 'react-redux'
import { useFormik } from 'formik';
import LoginView from './LoginView';
import { loginUser } from '../../redux/modules/oauth/authorization/actions/actions';

const Login = ({authError, loginUser}) => {
    const formik = useFormik({
        initialValues: {
            username: '',
            password: ''
        },
        onSubmit: ({username, password}) => {
            const isValid = document.querySelector("#password").checkValidity();

            if(isValid) loginUser(username, password);
        }
    });

    return (
        <LoginView onFormSubmit={formik.handleSubmit} handleInputChange={formik.handleChange} error={authError}/>
    );
};

const mapStateToProps = (state) => ({
    authError: state.login.error
})

const mapDispatchToProps = {
    loginUser
}



export default connect(mapStateToProps, mapDispatchToProps)(Login);


