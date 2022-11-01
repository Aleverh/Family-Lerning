import React, { useState } from 'react';
import { Button, AppBar, Container, Card, Toolbar, IconButton, Typography, Box, TextField, Paper, Grid, CardMedia, CardContent, CardActions, BottomNavigation, BottomNavigationAction } from '@mui/material';
import  RestoreIcon  from '@mui/icons-material/Restore';
import  FavoriteIcon  from '@mui/icons-material/Favorite';
import  LocationOnIcon  from '@mui/icons-material/LocationOn';
import  FolderIcon  from '@mui/icons-material/Folder';


function Com3(){
   const [value, setValue] = useState("recents");
   const handleChanges = ((e, newValue) => setValue(newValue));

   return(
      <footer>
         <Container sx={{ border: "1px solid", marginTop: "20px", alignItems: "center"}}>
            <Typography sx={{align: "center"}} variant="h5">Справочная информация</Typography>
            <BottomNavigation value={value} onChange={handleChanges} sx={{}}>
               <BottomNavigationAction label="Recents" value="recents" icon={<RestoreIcon/>}/>
               <BottomNavigationAction label="Favorits" value="favoritees" icon={<FavoriteIcon/>}/>
               <BottomNavigationAction label="Nearby" value="nearby" icon={<LocationOnIcon/>}/>
               <BottomNavigationAction label="Folder" value="folder" icon={<FolderIcon/>}/>
            </BottomNavigation>
            <Typography align="center">Справочная информация</Typography>
         </Container>
      </footer>
   
   )
}
export default Com3;