import Grid2 from '@mui/material/Unstable_Grid2';
import { Typography } from '@mui/material';
import P from '../MUI/P';
import Item from '../MUI/Paper';
import GetOrders from './GetOrders';
import OrderSummary from './Oreder Summary';

function Orders() {
    return (
        <Grid2 display="flex" gap="10px" justifyContent="start" marginBottom="10px">
            <Grid2>
                <Item style={{ width: '700px' }} elevation={10}>
                    <Grid2 display="flex" alignItems="center" width="100%" container style={{ padding: '0 10px', backgroundColor: 'rgb(244, 246, 248)' }}>
                        <Grid2 xs={6}>
                            <Typography variant="p">Product</Typography>
                        </Grid2>
                        <Grid2 xs={2}>
                            <P>Price</P>
                        </Grid2>
                        <Grid2 xs={2}>
                            <P>Quantity</P>
                        </Grid2>
                        <Grid2 xs={1}>
                            <P>Total price</P>
                        </Grid2>
                        <Grid2 xs={1} />
                    </Grid2>
                    <GetOrders />
                </Item>
            </Grid2>
            <OrderSummary />
        </Grid2>
    );
}
export default Orders;
