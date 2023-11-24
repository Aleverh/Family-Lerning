import { Button, Paper, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import Grid2 from '@mui/material/Unstable_Grid2';
import styled from '@emotion/styled';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import productSubscriber from '../../../api/productSubscriber';
import { selectCategory } from '../../../components/redux/activeCategory';
import { selectPrices } from '../../../components/redux/priceSort';
import categorySubscriber from '../../../api/categorySubscriber';
import setOrders from '../../../api/setOrders';
import useAuth from '../../../components/Hooks/useAuth';
import addCart from '../../../images/add-to-cart.png';

const Item = styled(Paper)(() => ({
    display: 'flex',
    flexDirection: 'column',
    width: 200,
    elevation: 3,
    padding: 20,
    borderRadius: 20,
    gap: 20,
}));
const AddToCartButton = styled(Button)(() => ({
    display: 'flex',
    alignItems: 'center',
    padding: 0,
    right: '10px',
    bottom: '10px',
    minWidth: '40px',
    height: '40px',
    backgroundColor: '#FFE7A0',
    borderRadius: '50%',
}));
function Enumeration() {
    const [user] = useAuth();
    const categories = categorySubscriber();
    const category = useSelector(selectCategory);
    const sortPrice = useSelector(selectPrices);
    const data = productSubscriber();
    const [signForIndex, setSignForIndex] = useState(2);

    if (data && data.docs.length > 0) {
        const filtered = data.docs.filter((products) => products.data().status === 'Activated'
            && (category !== '' ? products.data().category === category
                : products.data().category === categories[0].docs[0].data().category));
        if (filtered.length === 0) {
            return <Typography marginLeft="40px" marginTop="20px" variant="h5">Nothing found</Typography>;
        }
        const checkPrice = () => {
            if (sortPrice === 'high') {
                return filtered.sort((a, b) => Number(parseInt(b.data().price, 10))
                    - Number(parseInt(a.data().price, 10)));
            } return filtered.sort((a, b) => Number(parseInt(a.data().price, 10))
                - Number(parseInt(b.data().price, 10)));
        };
        return checkPrice().map((item) => {
            function index() {
                if (signForIndex === item.data().name) return 4;
            }
            return (
                <Grid2 key={item.data().name + item.data().category + item.data().description}>
                    <Item
                        elevation={8}
                        onMouseEnter={() => setSignForIndex(item.data().name)}
                        onMouseLeave={() => setSignForIndex(2)}
                    >
                        <Grid2 padding={0} position="relative">
                            <AddToCartButton
                                onClick={() => setOrders(item.data().id, user.uid, 1, item.data(), 'add to cart')}
                                style={{
                                    zIndex: index(),
                                    position: 'absolute',
                                }}
                            >
                                <img
                                    src={addCart}
                                    style={{
                                        height: '20px',
                                        width: '20px',
                                    }}
                                    alt="addCArt"
                                />
                            </AddToCartButton>
                            <img
                                style={{
                                    position: 'relative',
                                    zIndex: 3,
                                    width: 200,
                                    height: 190,
                                    borderRadius: 20,
                                }}
                                src={item.data().imagesUrl[0]}
                                alt="product"
                            />
                        </Grid2>
                        <Typography variant="p" fontWeight={700}>
                            <Link
                                style={{
                                    textDecoration: 'none',
                                    color: '#434b4b',
                                }}
                                to={`/product/${item.data().id}`}
                                state={{ item }}
                            >
                                {item.data().name}
                            </Link>
                        </Typography>
                        <Typography variant="p" fontWeight={700}>
                            {item.data().price}
                        </Typography>
                    </Item>
                </Grid2>
            );
        });
    } return <Typography marginLeft="40px" marginTop="20px" variant="h5">Nothing found</Typography>;
}
export default Enumeration;
