import Grid2 from '@mui/material/Unstable_Grid2';
import {
    Typography, Rating, Divider, Button, Paper,
} from '@mui/material';
import { getDoc, doc } from 'firebase/firestore';
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { useDispatch, useSelector } from 'react-redux';
import minus from '../../images/minus.png';
import plus from '../../images/plus.png';
import bluePlus from '../../images/blue plus icon.png';
import { db } from '../../firebase';
import Header from '../AllProducts/components/header';
import { selectCount, decrement, increment } from '../../components/redux/counterSlice';
import Container from '../../components/MUI/mainContainer';
import setOrders from '../../api/setOrders';
import useAuth from '../../components/Hooks/useAuth';

const Item = styled(Paper)(() => ({
    display: 'flex',
    flexDirection: 'column',
    width: 600,
    elevation: 3,
    padding: 20,
    borderRadius: 20,
    backgroundColor: '#FFFFFFB5',
}));

function AllInfoAboutProduct() {
    const navigate = useNavigate();
    const [user] = useAuth();
    const quantity = useSelector(selectCount);
    const dispatch = useDispatch();
    const [data, setData] = useState(null);
    const params = useParams();
    console.log(params);
    useEffect(() => {
        getDoc(doc(db, 'products', params.id)).then((docs) => setData(docs.data()));
    }, [params]);
    const [picture, setPicture] = useState(data?.imagesUrl[0]);
    useEffect(() => {
        if (data) {
            setPicture(data.imagesUrl[0]);
        }
    }, [data]);
    const changePicture = (src) => {
        setPicture(src);
    };
    if (data) {
        return (
            <Container container>
                <Header />
                <Grid2 padding="20px 40px">
                    <Typography mb="20px" fontWeight={700} variant="h6">Product Details</Typography>
                    <Grid2 display="flex" gap="20px">
                        <Grid2 style={{
                            flexDirection: 'column',
                            alignItems: 'center',
                            display: 'flex',
                            width: '500px',
                        }}
                        >
                            <Grid2>
                                <img
                                    width="390px"
                                    style={{ borderRadius: '20px' }}
                                    height="360px"
                                    src={picture}
                                    alt="stone"
                                />
                            </Grid2>
                            <Grid2 mb="20px" width="100%" display="flex" alignItems="center" justifyContent="space-around">
                                {
                                    data.imagesUrl.map((item) => (
                                        <Grid2 key={item} onClick={() => changePicture(item)}>
                                            <img
                                                src={item}
                                                style={{ borderRadius: '20px' }}
                                                width="150px"
                                                height="150px"
                                                alt="stone"
                                            />
                                        </Grid2>
                                    ))
                                }
                            </Grid2>
                        </Grid2>
                        <Grid2 width="321px" display="flex" flexDirection="column">
                            <Typography mb="20px" fontWeight={700} variant="h6">{data.name}</Typography>
                            <Rating style={{ marginBottom: 20 }} name="read-only" value={4} readOnly />
                            <Typography mb="20px" fontSize="20px" variant="p">Delivery from JAPAN</Typography>
                            <Typography mb="20px" fontWeight={700} fontSize={30} variant="p">{data.price}</Typography>
                            <Divider style={{ borderStyle: 'dashed' }} />
                            <Grid2 display="flex" justifyContent="space-between" margin="40px 0" alignItems="center">
                                <Typography variant="p" fontSize="20px">Quantity</Typography>
                                <Grid2 display="flex" gap={3} border="2px dashed #1976d2" borderRadius="20px" padding={1}>
                                    <Grid2 onClick={() => dispatch(decrement())}>
                                        <img
                                            style={{ cursor: 'pointer', width: '20px', height: '20px' }}
                                            src={minus}
                                            alt="minusIcon"
                                        />
                                    </Grid2>
                                    <Typography variant="p" fontSize="20px" fontWeight={700}>{quantity}</Typography>
                                    <Grid2 onClick={() => dispatch(increment())}>
                                        <img
                                            style={{ cursor: 'pointer', width: '20px', height: '20px' }}
                                            src={plus}
                                            alt="plus"
                                        />
                                    </Grid2>
                                </Grid2>
                            </Grid2>
                            <Divider style={{ borderStyle: 'dashed' }} />
                            <Grid2 display="flex" justifyContent="space-between">
                                <Button
                                    onClick={() => {
                                        setOrders(
                                            params.id,
                                            user.uid,
                                            quantity,
                                            data,
                                            'add to cart',
                                        );
                                    }}
                                    style={{
                                        border: '2px solid #1976d2',
                                        borderRadius: '30px',
                                        padding: '8px',
                                        fontSize: '18px',
                                        marginTop: '10px',
                                    }}
                                >
                                    <img src={bluePlus} width="40px" height="40px" alt="plus" />
                                    <Typography variant="p" fontSize="18px">Add to cart</Typography>
                                </Button>
                                <Button
                                    onClick={() => {
                                        setOrders(
                                            params.id,
                                            user.uid,
                                            quantity,
                                            data,
                                            'buy now',
                                            navigate,
                                        );
                                    }}
                                    style={{
                                        border: '2px solid #1976d2',
                                        borderRadius: '30px',
                                        padding: '8px',
                                        fontSize: '18px',
                                        marginTop: '10px',
                                    }}
                                >
                                    Buy Now
                                </Button>
                            </Grid2>
                        </Grid2>
                    </Grid2>
                    <Item elevation={10}>
                        <Typography style={{ marginBottom: '30px' }} variant="h6">Description:</Typography>
                        <Typography lineHeight="40px" mb="20px" fontSize="20px" variant="p">{data.description}</Typography>
                    </Item>
                </Grid2>
            </Container>
        );
    }
}
export default AllInfoAboutProduct;
