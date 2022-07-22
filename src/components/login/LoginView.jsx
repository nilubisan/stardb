import React from 'react';
import { Box, Button, Container, TextField, Typography } from '@mui/material'

const LoginView = ({ handleInputChange, onFormSubmit, error}) => {
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
                <Box component="form" onSubmit={onFormSubmit} noValidate sx={{ mt: 1 }} data-cy="login-form">
                    <TextField
                        autoComplete="off"
                        margin="normal"
                        required
                        fullWidth
                        id="username"
                        label="Username"
                        name="username"
                        autoFocus
                        onChange={handleInputChange}
                        inputProps={{
                            'minLength': '3',
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
                        onChange={handleInputChange}
                        inputProps={{
                            'minLength': '6',
                            'data-cy': 'password-input'
                        }}
                    />
                    {
                        error ? (
                            <Typography variant={'subtitle1'} sx={{
                                color: 'red'
                            }}>{error}</Typography>
                        ) : null
                    }
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Sign In
                    </Button>
                </Box>
            </Box>
        </Container>
    )
};

export default LoginView;