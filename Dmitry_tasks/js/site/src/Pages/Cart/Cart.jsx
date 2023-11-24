import { Typography } from '@mui/material';
import Orders from '../../components/Orders/Orders';
import Container from '../../components/MUI/mainContainer';
import Header from '../AllProducts/components/header';

function Cart() {
    return (
        <Container>
            <Header />
            <Typography variant="h3" mt={2} mb={2}>Cart</Typography>
            <Orders />
        </Container>
    );
}
export default Cart;
