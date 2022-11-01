import React from 'react';
import { Button, AppBar, Container, Toolbar, IconButton, Typography, Box, Paper, CardMedia } from '@mui/material';
import  MenuIcon  from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { START_ROUTE } from "../../consts/const";
import { signOut } from "firebase/auth";
import { auth } from '../../firebaseinit/firebaseinit';

function AdminPage() {

   const handlerClickCLose = (() => {
      signOut(auth);
   })
   const handlerClickAuth = (() => {
      console.log("login");
   })

   return (
      <Box >
         <AppBar position='fixed' >
            <Container fixed>
               <Toolbar >
                  <Typography variant='h4' mr={40}>AdminPage</Typography>
                  <IconButton edge="start" color='inherit' aria-label='menu' >
                     <MenuIcon></MenuIcon>
                  </IconButton>
                  <Box mr={4}>
                     <Link to={ START_ROUTE }>
                        <Button color="inherit" variant='outlined' onClick={handlerClickCLose}>Выход</Button>
                     </Link>
                  </Box>
                  {/* <Link to={ LOGIN_ROUTE }>
                     <Button color="secondary" variant='contained' onClick={handlerClickAuth}>Авторизация</Button> 
                  </Link> */}
                  {/* <Button color="secondary" variant='contained' onClick={handlerClickAuth}>Авторизация</Button>  */}
               </Toolbar>
            </Container>
         </AppBar>
      </Box>
   
   )
}

export default AdminPage;
