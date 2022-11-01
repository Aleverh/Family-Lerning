
import React, { useEffect, useState } from 'react';
// import "../components/main.css";
import RegisterLink from './RegisterLink';
// import Logotype from '../components/logotype/Logotype';
import { useForm } from "react-hook-form";
import { Link, Navigate } from 'react-router-dom';
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
import { auth } from '../../firebaseinit/firebaseinit';
import { signOut } from "firebase/auth";
import { Button, AppBar, Container, Toolbar, Typography, Box } from '@mui/material';
import { Card, CardContent, TextField } from '@mui/material';
import useUser from '../../hooks/useUser';
import { SITE_USER_ROUTE, ADMIN_ROUTE } from '../../consts/const';

function LoginPage(){
   const { register, handleSubmit, reset, formState: { errors } } = useForm();
   const [value, setValue] = useState();

   const onSubmit = ((data) => {
      console.log("login up");

         signInWithEmailAndPassword(auth, data.email, data.password)
         .then((userCredential) => {
           const user = userCredential.user;
            console.log(user);
         })
         .catch((error) => {
           const errorCode = error.code;
           const errorMessage = error.message;
         });  

   });

   return(
      <div>
         <AppBar position='fixed'>
            <Container fixed>
               <Toolbar>
                  <Typography variant='h4'>Logotype</Typography>
               </Toolbar>
            </Container>
         </AppBar>

         <Box>
            <Card style={{ maxWidth: 450, padding: "20px 5px", margin: "70px auto" }}>
               <CardContent>
                  <Typography  variant="h4" >Авторизация</Typography> 
                  <form >
                     <TextField type="email" placeholder="Введите email" variant="outlined" fullWidth {...register("email", {required: true})} value={value} onChange={(e) => setValue(e.target.value)}/>

                     {/* <TextField  type="email" placeholder="Введите email" variant="outlined" fullWidth {...register("email", {required: true})}/> */}
                     <TextField type="password" placeholder="Введите password" variant="outlined" fullWidth  {...register("password", {required: true})}/>
                     {/* <TextField type="file" placeholder="Установите аватар" variant="outlined" fullWidth  /> */}

                     <Link to={ value != "admin@test.test" ? SITE_USER_ROUTE : ADMIN_ROUTE}>
                        <Button type="button"  onClick={handleSubmit(onSubmit)} variant="contained" color="primary" fullWidth >Вход</Button>
                     </Link>
                  </form>
                  <RegisterLink/>
               </CardContent>
            </Card>
         </Box>
      </div>  
   )
   
}
export default LoginPage;