import styled from '@emotion/styled';
import {
    Button, Divider, Typography,
} from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2';
import { Link } from 'react-router-dom';
import GetProducts from './GetProducts';
import plus from '../../../../images/blue plus icon.png';
import Item from '../../../../components/MUI/Paper';

const P = styled(Typography)(() => ({
    fontSize: '20px',
    textAlign: 'center',
    variant: 'p',
}));
function Products() {
    return (
        <Item elevation={10} style={{ width: '700px' }}>
            <Grid2 container spacing={2} m={0}>
                <Grid2 display="flex" width="100%" style={{ backgroundColor: 'rgb(244, 246, 248)' }}>
                    <Grid2 xs={6}>
                        <Typography variant="p">Product</Typography>
                    </Grid2>
                    <Grid2 xs={2}>
                        <P>Create At</P>
                    </Grid2>
                    <Grid2 xs={2}>
                        <P>Status</P>
                    </Grid2>
                    <Grid2 xs={1}>
                        <P>Price</P>
                    </Grid2>
                    <Grid2 xs={1} />
                </Grid2>
                <GetProducts />
                <Divider width="100%" />
                <Grid2 display="flex" justifyContent="right" width="100%">
                    <Link to="/create/1/create" style={{ textDecoration: 'none' }}>
                        <Button
                            variant="outlined"
                            style={{
                                borderRadius: '30px', fontWeight: 700, display: 'flex', alignItems: 'center',
                            }}
                        >
                            <img src={plus} alt="plus" style={{ cursor: 'pointer', marginRight: '10px' }} width={20} height={20} />
                            New product
                        </Button>
                    </Link>
                </Grid2>
            </Grid2>
        </Item>
    );
}
export default Products;
