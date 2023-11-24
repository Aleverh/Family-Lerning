import Grid2 from '@mui/material/Unstable_Grid2';
import { Avatar, Button, Badge } from '@mui/material';
import { signOut } from 'firebase/auth';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.jpg';
import { auth } from '../../../firebase';
import bucket from '../../../images/bucket.png';
import ordersSubscriber from '../../../api/ordersSubscriber';
import ava from '../../../images/avatar_default.jpg';
import useAuth from '../../../components/Hooks/useAuth';

function Header() {
    const [orders] = ordersSubscriber();
    const [user] = useAuth();
    const checkUser = () => {
        if (user.role === 'Client') {
            return 'myOrders';
        } return 'myProducts';
    };
    const getAvatar = () => {
        if (user.avatar) {
            return user.avatar[0];
        } return ava;
    };
    return (
        <Grid2 style={{ display: 'flex', justifyContent: 'space-between' }}>
            <img src={logo} alt="logo" height="80px" style={{ borderRadius: '20px' }} />
            <Grid2 display="flex" gap="20px" alignItems="center">
                <Button
                    style={{ fontSize: 20 }}
                    onClick={() => {
                        signOut(auth);
                        window.location.reload();
                    }}
                >
                    Log Out
                </Button>
                <Link
                    style={{
                        color: '#1976d2', fontWeight: '500', textDecoration: 'none', fontSize: '20px',
                    }}
                    to="/AllProducts"
                >
                    All Products
                </Link>
                <Link to={`/profile/${checkUser()}`}>
                    <Avatar style={{ cursor: 'pointer' }} src={getAvatar()} />
                </Link>
                <Link to="/cart">
                    <Badge badgeContent={orders?.length} color="primary">
                        <img style={{ cursor: 'pointer' }} src={bucket} alt="bucket" height="40px" width="40px" />
                    </Badge>
                </Link>
            </Grid2>
        </Grid2>
    );
}
export default Header;
