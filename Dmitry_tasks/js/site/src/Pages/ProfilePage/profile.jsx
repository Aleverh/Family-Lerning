import { Typography } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2';
import { Link, useParams } from 'react-router-dom';
import Container from '../../components/MUI/mainContainer';
import Header from '../AllProducts/components/header';
import Controller from './components/Controller';
import useAuth from '../../components/Hooks/useAuth';

function Profile() {
    const params = useParams();
    const [user] = useAuth();
    const checkColor = (name) => {
        if (name === params.tab) {
            return '3px solid #0FBC26';
        } return '3px solid #1976d2';
    };
    const checkUser = () => {
        if (user.role === 'Client') return 'none';
    };
    return (
        <Container container>
            <Header />
            <Typography mt={2} variant="h3">Profile</Typography>
            <Grid2 display="flex" justifyContent="center" gap={20} margin="30px 0">
                <Link to="/profile/myProducts" style={{ display: checkUser(), textDecoration: 'none' }}>
                    <Typography
                        style={{ cursor: 'pointer' }}
                        borderBottom={checkColor('myProducts')}
                        variant="p"
                    >
                        My products
                    </Typography>
                </Link>
                <Link to="/profile/myOrders" style={{ textDecoration: 'none' }}>
                    <Typography
                        style={{ cursor: 'pointer' }}
                        borderBottom={checkColor('myOrders')}
                        variant="p"
                    >
                        My orders
                    </Typography>
                </Link>
                <Link to="/profile/aboutMe" style={{ textDecoration: 'none' }}>
                    <Typography
                        style={{ cursor: 'pointer' }}
                        borderBottom={checkColor('aboutMe')}
                        variant="p"
                    >
                        About me
                    </Typography>
                </Link>
            </Grid2>
            <Controller />
        </Container>
    );
}
export default Profile;
