import React from 'react';
import { Link } from 'react-router-dom';
import { Controller, useForm } from 'react-hook-form';
import Grid2 from '@mui/material/Unstable_Grid2';
import {
    Box, Button, Typography, Divider,
} from '@mui/material';
import styled from '@emotion/styled';
import TextField from '@mui/material/TextField';
import loginWithGoogle from '../../api/loginWithGoogle';
import google from '../../images/google icon.png';
import signIn from '../../api/signIn';

const LoginFormContainer = styled(Grid2)(() => ({
    margin: '250px auto',
    display: 'flex',
    flexDirection: 'column',
    padding: '20 60',
    gap: 10,
    alignItems: 'center',
    background: 'white',
    borderRadius: 10,
    width: 400,
}));
const defaultValues = {
    email: '',
    password: '',
};
function Login() {
    const { handleSubmit, control } = useForm({ defaultValues });
    const onSubmit = (data) => {
        signIn(data.email, data.password);
    };
    return (
        <LoginFormContainer>
            <Typography fontWeight={700} component="span" fontSize={20}>Sign in to Minimal</Typography>
            <Typography variant="body1" component="span">Login</Typography>
            <Box
                component="form"
                style={{
                    width: 100,
                    gap: 15,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
                onSubmit={handleSubmit(onSubmit)}
            >
                <Controller
                    control={control}
                    name="email"
                    render={({ field }) => (
                        <TextField {...field} style={{ width: '280px' }} type="email" placeholder="Email" />
                    )}
                />
                <Controller
                    control={control}
                    name="password"
                    render={({ field }) => (
                        <TextField {...field} style={{ width: '280px' }} type="password" placeholder="Password" />
                    )}
                />
                <Button style={{ width: 280 }} type="submit" variant="contained">Sign In</Button>
            </Box>
            <Divider border="solid 3px" style={{ width: '280px', marginTop: 5 }}>OR</Divider>
            <Grid2 onKeyDown={loginWithGoogle} onClick={loginWithGoogle}>
                <img style={{ cursor: 'pointer' }} height={20} width={20} src={google} alt="Google Icon" />
            </Grid2>
            <Typography component="p" variant="body1">
                New user?
                <Link to="/register">
                    <Typography color="rgb(0, 171, 85)" component="span"> Create an account</Typography>
                </Link>
            </Typography>
        </LoginFormContainer>
    );
}
export default Login;
