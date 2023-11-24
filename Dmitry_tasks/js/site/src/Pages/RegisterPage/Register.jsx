import React from 'react';
import { Link } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import {
    Box, Button, Typography, Divider,
} from '@mui/material';
import styled from '@emotion/styled';
import Grid2 from '@mui/material/Unstable_Grid2';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import registerWithGoogle from '../../api/registerWithGoogle';
import createUser from '../../api/createUser';
import google from '../../images/google icon.png';
import { auth } from '../../firebase/index';

const FormContainer = styled(Grid2)(() => ({
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
    displayName: '',
    email: '',
    password: '',
    role: '',
};
function Register() {
    const { handleSubmit, control } = useForm({ defaultValues });

    const onSubmit = (data) => {
        console.log(data);
        createUser(auth, data.email, data.password, data.displayName, data.role);
    };
    return (
        <FormContainer>
            <Typography fontWeight={700} component="span" fontSize={20}>Get started absolutely free.</Typography>
            <Typography variant="body1" component="span">Register</Typography>
            <Box component="form" autoComplete="off" style={{ gap: 15 }} display="flex" flexDirection="column" alignItems="center" onSubmit={handleSubmit(onSubmit)}>
                <Controller
                    control={control}
                    name="displayName"
                    render={({ field }) => (
                        <TextField style={{ width: '280px' }} {...field} placeholder="Display name" />
                    )}
                />
                <Controller
                    control={control}
                    name="email"
                    render={({ field }) => (
                        <TextField style={{ width: '280px' }} {...field} placeholder="Email" />
                    )}
                />
                <Controller
                    control={control}
                    name="password"
                    render={({ field }) => (
                        <TextField style={{ width: '280px' }} {...field} type="password" placeholder="Password" />
                    )}
                />
                <Controller
                    control={control}
                    name="role"
                    render={({ field }) => (
                        <RadioGroup
                            {...field}
                            row
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="Client"
                        >
                            <FormControlLabel value="Client" control={<Radio />} label="Client" />
                            <FormControlLabel value="Admin" control={<Radio />} label="Admin" />
                        </RadioGroup>
                    )}
                />
                <Button style={{ width: 280 }} variant="contained" type="submit">Sign Up</Button>
            </Box>
            <Divider sx={{ width: '280px', marginTop: 3 }}>OR</Divider>
            <Grid2 onClick={registerWithGoogle}>
                <img style={{ cursor: 'pointer' }} height={20} width={20} src={google} alt="Google Icon" />
            </Grid2>
            <Typography variant="body1" component="span">
                Already have an account?
                <Link to="/login">
                    <Typography color="rgb(0, 171, 85)" component="span">Sign In</Typography>
                </Link>
            </Typography>
        </FormContainer>
    );
}
export default Register;
