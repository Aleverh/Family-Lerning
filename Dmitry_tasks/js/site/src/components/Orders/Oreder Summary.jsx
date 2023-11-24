import { Divider, Typography, Button } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2';
import { useSelector } from 'react-redux';
import Item from '../MUI/Paper';
import { totalSum } from '../redux/totalPrice';
import deleteAllOrders from '../../api/deleteAllOrders';
import useAuth from '../Hooks/useAuth';

function OrderSummary() {
    const [user] = useAuth();
    const totalPrice = useSelector(totalSum);
    return (
        <Grid2>
            <Item elevation={10} style={{ width: '250px', padding: '20px', boxSizing: 'border-box' }}>
                <Typography variant="h6" fontWeight={700}>Order Summary</Typography>
                <Grid2 display="flex" justifyContent="space-between" margin="20px 0">
                    <Typography fontSize="20px">Sub total</Typography>
                    <Typography>{`$${totalPrice}`}</Typography>
                </Grid2>
                <Grid2 display="flex" justifyContent="space-between" margin="20px 0">
                    <Typography fontSize="20px">Shipping</Typography>
                    <Typography>Free</Typography>
                </Grid2>
                <Divider style={{ width: '100%' }} />
                <Grid2 display="flex" justifyContent="space-between" margin="20px 0 0 0">
                    <Typography variant="h6" fontWeight={700}>Total</Typography>
                    <Typography fontSize="20px" color="red">{`$${totalPrice}`}</Typography>
                </Grid2>
            </Item>
            <Button style={{ width: '250px' }} onClick={() => deleteAllOrders(user.id)} variant="contained">Buy</Button>
        </Grid2>
    );
}
export default OrderSummary;
