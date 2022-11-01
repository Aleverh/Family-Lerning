import React from "react";
import {Button, Container, Typography, Box, Paper, Grid} from "@mui/material";
// import  MenuIcon  from '@mui/icons-material/Menu';
// import { Link } from 'react-router-dom';
// import {useForm} from "react-hook-form";
// import { styled, createTheme, ThemeProvider, positions } from '@mui/system';


// const customTheme = createTheme({
//    palette: {
//       primary: {
//          main: 'red',
//          contrastText: 'black',
//       },
//    },
// });

// const MyThemeComponent = styled('button')(({ theme }) => ({
//   color: theme.palette.primary.contrastText,
//   backgroundColor: theme.palette.primary.main,
//   padding: theme.spacing(5),
//   borderRadius: theme.shape.borderRadius,
// //   fontSize: theme.
// }));


function Com1() {
    return (
        <Paper elevation={0} square sx={{backgroundImage: "url(https://source.unsplash.com/random)",
            positions: "relative",
            marginBottom: "10px",
            // marginTop: "65px",
            // backgroundSize: "cover",
            maxHeight: "100%",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center"}}>
            <Container fixed>
                {/* <Box sx={{position: "absolute", top: 0, bottom: 0, right: 0, left: 0, backgroundOverlay: "rgba(0,0,0,0.9)"}}></Box> */}
                <Grid container>
                    <Grid item md={6} sx={{maxWidth: 450, padding: "20px 5px", margin: "70px auto"}}>
                        <Box sx={{positions: "relative", padding: "25px"}}>
                            <Typography gutterBottom sx={{textAlign: "center", fontSize: "1.5rem"}}>
                     Здравствуйте вы зашли на сайт продажи теплотехнического оборудования
                            </Typography>
                            <Typography color="inherit" component="h5" gutterBottom paragraph>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore adipisci maiores, sint rem vel commodi beatae asperiores numquam eum? Nisi hic nemo obcaecati nobis nihil molestiae quia rerum vero distinctio.
                            </Typography>

                            <Button variant='contained'
                                color="secondary"
                                sx={{width: 400, height: 50, marginBottom: 2}} >
                              Продолжить
                            </Button>


                            {/* <ThemeProvider theme={customTheme}>
                        <MyThemeComponent sx={{marginRight: 3}}>Styled div with theme</MyThemeComponent>
                        <MyThemeComponent>Styled div with theme</MyThemeComponent>
                     </ThemeProvider> */}

                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Paper>
    );
}
export default Com1;
