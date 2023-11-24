import Grid2 from '@mui/material/Unstable_Grid2';
import { Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import P from '../MUI/P';
import minus from '../../images/minus.png';
import plus from '../../images/plus.png';
import deleteBucket from '../../images/deleteBucket.png';
import ordersSubscriber from '../../api/ordersSubscriber';
import deleteOrder from '../../api/deleteOrder';
import useAuth from '../Hooks/useAuth';
import updateOrderQuantity from '../../api/updateOrderQuantity';
import { addSum, deleteSum } from '../redux/totalPrice';

function GetOrders() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [user] = useAuth();
    const [orders] = ordersSubscriber();
    const changeQuantity = (productId, quantity) => {
        updateOrderQuantity(user.uid, productId, quantity);
    };
    dispatch(deleteSum(0));
    if (orders) {
        return orders.map((item) => {
            const data = item.data();
            dispatch(addSum(parseInt(data.price, 10) * data.quantity));

            return (
                <Grid2
                    display="flex"
                    alignItems="center"
                    margin="10px"
                    key={data.price + data.quantity + Math.random()}
                    container
                >
                    <Grid2 display="flex" alignItems="center" xs={6}>
                        <img width="48px" height="48px" src={data.images[0]} alt="product" />
                        <P style={{ cursor: 'pointer' }} onClick={() => navigate(`/product/${data.productId}`)}>{data.name}</P>
                    </Grid2>
                    <Grid2 xs={2}>
                        <P>{data.price}</P>
                    </Grid2>
                    <Grid2
                        xs={2}
                        display="flex"
                        justifyContent="space-between"
                        border="2px dashed #1976d2"
                        borderRadius="20px"
                        padding={0.5}
                    >
                        <Grid2 onClick={() => {
                            if ((data.quantity - 1) > 0) {
                                changeQuantity(data.productId, (data.quantity - 1));
                            }
                        }}
                        >
                            <img style={{ cursor: 'pointer', width: '15px', height: '15px' }} src={minus} alt="minusIcon" />
                        </Grid2>
                        <Typography variant="p" fontSize="15px" fontWeight={700}>{data.quantity}</Typography>
                        <Grid2 onClick={() => {
                            changeQuantity(data.productId, (data.quantity + 1));
                        }}
                        >
                            <img style={{ cursor: 'pointer', width: '15px', height: '15px' }} src={plus} alt="plus" />
                        </Grid2>
                    </Grid2>
                    <Grid2 xs={1}>
                        <P>{`${parseInt(data.price, 10) * data.quantity}$`}</P>
                    </Grid2>
                    <Grid2 xs={1} display="flex" justifyContent="center" onClick={() => deleteOrder(data.productId, user.uid)}>
                        <img src={deleteBucket} height="25px" style={{ cursor: 'pointer' }} width="25px" alt="Delete bucket" />
                    </Grid2>
                </Grid2>
            );
        });
    }
}
export default GetOrders;
