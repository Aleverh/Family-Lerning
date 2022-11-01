import React from "react";
import {Link} from "react-router-dom";
import {Button, AppBar, Container, Toolbar, Typography, Box} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/icons-material/Menu";
import {START_ROUTE} from "../../../consts/const";
import {signOut} from "firebase/auth";
import {auth} from "../../../firebaseinit/firebaseinit";

function HeaderUserSite({authUser}) {
    // console.log(authUser);
    const handlerClick = () => {
        signOut(auth);
    };
    return (
        <Box>
            <AppBar position='fixed' >
                <Container fixed>
                    <Toolbar >
                        <Typography variant='h4' mr={20}>Logotype</Typography>
                        <Typography variant='h6' width={220}> Вы вошли на сайт как </Typography>
                        <Typography color='red' mr={2} variant="h4">{authUser?.login}</Typography>
                        <IconButton edge="start" color='inherit' aria-label='menu' sx={{marginRight: "20px"}}>
                            <MenuIcon></MenuIcon>
                        </IconButton>
                        {/* <TextField  placeholder="Выберите категорию товара" variant="outlined" fullWidth  {...register("password")}/> */}
                        <Box mr={4}>
                            <Button color="inherit" variant='outlined'>Выбрать</Button>
                        </Box>
                        <Link to={START_ROUTE}>
                            <Button color="secondary" variant='contained' onClick={handlerClick}>Выход</Button>
                        </Link>
                    </Toolbar>
                </Container>
            </AppBar>
        </Box>
    );
}
export default HeaderUserSite;
