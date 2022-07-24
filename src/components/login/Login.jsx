import React from 'react';
import { connect } from 'react-redux'
import { useFormik } from 'formik';
import { loginUser, loginUserFail } from '../../redux/modules/oauth/authorization/actions/actions';
import { Box, Button, Container, TextField, Typography } from '@mui/material'
import {validateInput} from '../../utils/loginUtils';

const Login = ({authError, loginUser, loginUserFail}) => {

    const formik = useFormik({
        initialValues: {
            username: '',
            password: ''
        },
        onSubmit: ({username, password}) => {
            const errorMessage = validateInput(username, password);
            if(errorMessage) {
                loginUserFail(errorMessage);
                return;
            }
            loginUser(username, password);
        }
    });

    return (
        <Container component="main" maxWidth="xs" style={{backgroundColor: "rgba(255,255,255,.9)"}}>
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    padding: 2
                }}
            >
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <Box component="form" onSubmit={formik.handleSubmit} sx={{ mt: 1 }} data-cy="login-form">
                    <TextField
                        autoComplete="off"
                        margin="normal"
                        required
                        fullWidth
                        id="username"
                        label="Username"
                        name="username"
                        autoFocus
                        onChange={formik.handleChange}
                        inputProps={{
                            minLength: 3,
                            maxLength: 25,
                            'data-cy': 'username-input',
                        }}
                    />
                    <TextField
                        autoComplete="off"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        onChange={formik.handleChange}
                        inputProps={{
                            minLength: 6,
                            maxLength: 100,
                            'data-cy': 'password-input',
                        }}
                    />
                    {
                        authError ? (
                            <Typography variant={'subtitle1'} sx={{
                                color: 'red'
                            }} className="login__error-message">{authError}</Typography>
                        ) : null
                    }
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        data-cy= 'login-submit-button'
                    >
                        Sign In
                    </Button>
                </Box>
            </Box>
        </Container>
    );
};

const mapStateToProps = (state) => ({
    authError: state.login.error
});

const mapDispatchToProps = {
    loginUser,
    loginUserFail
}



export default connect(mapStateToProps, mapDispatchToProps)(Login);


