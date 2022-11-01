import React from "react";
import {Button, AppBar, Container, Toolbar, IconButton, Typography, Box, Paper} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import {Link} from "react-router-dom";
import {LOGIN_ROUTE, REGISTER_ROUTE} from "../../consts/const";


// eslint-disable-next-line require-jsdoc
function StartPage() {
    const handlerClickReg = (() => {
        console.log("register");
    });
    const handlerClickAuth = (() => {
        console.log("login");
    });

    return (
        <Box >
            <AppBar position='fixed' >
                <Container fixed>
                    <Toolbar >
                        <Typography variant='h4' mr={40}>Logotype</Typography>
                        <IconButton edge="start" color='inherit' aria-label='menu' >
                            <MenuIcon></MenuIcon>
                        </IconButton>
                        <Box mr={4}>
                            <Link to={ REGISTER_ROUTE }>
                                <Button color="inherit" variant='outlined' onClick={handlerClickReg}>Регистрация
                                </Button>
                            </Link>
                        </Box>
                        <Link to={ LOGIN_ROUTE }>
                            <Button color="secondary" variant='contained' onClick={handlerClickAuth}>Авторизация
                            </Button>
                        </Link>
                        {/* <Button color="secondary" variant='contained' onClick={handlerClickAuth}>Авторизация
                        </Button>  */}
                    </Toolbar>
                </Container>
            </AppBar>
            <Paper>
                <Container sx={{marginTop: "80px", maxWidth: "100%", height: "500px",
                    backgroundImage: "url(http://thermal-ok.com/images/wpi.cache/photo/photo_127_240_180_80.jpg)",
                    backgroundRepeat: "no-repeat"}} >kjkjnkjnkjn
                    {/* <CardMedia
               component="img"
               height="300px"
               image="/images/getres.jpg"
               /> */}

                    {/* sx={{paddingTop: "60%", backgroundImage: `url(https://source.unsplash.com/random)` }} */}
                    {/* image="/static/images/cards/contemplative-reptile.jpg" */}
                </Container>
            </Paper>
        </Box>

    );
}

export default StartPage;
