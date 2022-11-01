import React from 'react';
// import Header from '../components/Header';
import LoginLink from './LoginLink';
import { Button, AppBar, Container, Toolbar, Typography, Box } from '@mui/material';
import { Card, CardContent, TextField } from '@mui/material';
// import  MenuIcon  from '@mui/icons-material/Menu';

import {useForm} from "react-hook-form";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db, storage } from '../../firebaseinit/firebaseinit';
import { doc, setDoc} from "firebase/firestore"; 

function RegisterPage(){
   const { register, handleSubmit, formState: { errors } } = useForm();
   // const photoURL = await  uploadFiles(data.file);

   const onSubmit = (async(data) => {
      createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
         return userCredential.user;
      })
      .then(({uid})=>{
         const docRef =  setDoc(doc(db, "clients", uid), {
            login: data.login,
            email: data.email,
            uid: uid,
            // photoURL: photoURL
         });
      })
      .catch((error) => {
         const errorCode = error.code;
         const errorMessage = error.message;
         console.log("Error");
      });
   })

   // const uploadFiles = async(data) => {
   //    const storageRef = ref(storage, `images/${data[0].name}`);
   //    const uploadTask = await  uploadBytes(storageRef, data[0]);
   //    const photoURL = await getDownloadURL(uploadTask.ref);
   //    return  photoURL;
   // };

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
            <Card sx={{maxWidth: 450, padding: "20px 5px", margin: "70px auto"}}>
               <CardContent>
                  <Typography  variant="h4" >Регистрация</Typography> 
                  <form onSubmit={handleSubmit(onSubmit)} sx={{display: "flex", flexDirection: "column", gap: "20px"}}>
                     <TextField placeholder="Введите login" variant="outlined" fullWidth  {...register("login")}/>
                     <TextField type="email" placeholder="Введите email" variant="outlined" fullWidth {...register("email")} />
                     <TextField type="password" placeholder="Enter password" variant="outlined" fullWidth  {...register("password")}/>
                     {/* <TextField type="file" placeholder="Установите аватар" variant="outlined" fullWidth  /> */}
                     <Button type="submit" variant="contained" color="primary" fullWidth >Зарегистрироваться</Button>
                  </form>
                  <LoginLink/>
               </CardContent>
            </Card>
         </Box>
      </div>  
   )
   
}
export default RegisterPage;

// <div className="container">
// {/* <Header/> */}
// <div className='formRegister'>
//    <span className="formRegister__title">Регистрация</span>
//    <form onSubmit={handleSubmit(onSubmit)} className="formRegister__view">
//       <input required  placeholder="login" {...register("login")} className="formRegister__input"></input>
//       <input required type="email" placeholder="email"  {...register("email")} className="formRegister__input"></input>
//       <input required type="password" placeholder="password"  {...register("password")} className="formRegister__input"></input>
//       <button type="submit" className='formRegister__button'>Зарегистрироваться</button>
//    </form>
//    {/* <LoginLink/> */}
// </div> 
// </div>
