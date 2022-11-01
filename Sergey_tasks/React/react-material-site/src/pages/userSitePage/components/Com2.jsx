import React from 'react';
import {
    Button, Container, Card, Typography, Grid, CardMedia, CardContent, CardActions,
} from '@mui/material';
import LayerIcon from '@mui/icons-material/Layers';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function Com2() {
    return (
        <Container sx={{ maxWidth: 'md' }}>
            <Grid container spacing={4}>
                {cards.map((card) => (
                    <Grid item key={card} xs={12} sm={6} md={4}>
                        <Card sx={{ border: '1px solid gray' }}>
                            <CardMedia sx={{ paddingTop: '60%', backgroundImage: 'url(https://source.unsplash.com/random)' }} />
                            <CardContent>
                                <Typography variant="h4" gutterBottom>Title</Typography>
                                <Typography variant="h6" gutterBottom>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" color="primary">Text</Button>
                                <Button size="small" color="secondary">Text</Button>
                            </CardActions>
                            <LayerIcon />
                            <PlayCircleFilledIcon />
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}
export default Com2;
