import { useEffect, useState } from 'react';
import { collection, onSnapshot } from 'firebase/firestore';
import Grid2 from '@mui/material/Unstable_Grid2';
import { Button, Menu, MenuItem } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { db } from '../../../../firebase';
import moreInfo from '../../../../images/moreInfo.png';
import P from '../../../../components/MUI/P';
import deleteProduct from '../../../../api/deleteProduct';
import changeProductStatus from '../../../../api/changeProductStatus';

const GetProducts = () => {
    const navigate = useNavigate();
    const [products, setProducts] = useState(null);
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = (item, productId, category) => {
        if (item === 'edit') {
            navigate(`/create/${productId}/edit`);
        }
        if (item === 'delete') {
            deleteProduct(productId, category);
        }
        if (item === 'activate') {
            changeProductStatus(productId, 'Activated');
        }
        if (item === 'deactivate') {
            changeProductStatus(productId, 'Deactivated');
        }
        setAnchorEl(null);
    };
    useEffect(() => {
        const unsub = onSnapshot(collection(db, 'products'), (doc) => {
            setProducts(doc.docs);
        });
        return () => unsub();
    }, []);
    if (products && products.length > 0) {
        return products.map((item) => {
            const data = item.data();
            return (
                <Grid2 key={data.name + data.price} container width="100%" spacing={2} margin="0 5px">
                    <Grid2 display="flex" gap={1} alignItems="center" xs={6}>
                        <img width="48px" height="48px" src={data.imagesUrl[0]} alt="product" />
                        <Link style={{ textDecoration: 'none' }} to={`/product/${data.id}`}>
                            <P>{data.name}</P>
                        </Link>
                    </Grid2>
                    <Grid2 display="flex" justifyContent="center" alignItems="center" xs={2}>
                        <P>{data.date}</P>
                    </Grid2>
                    <Grid2 display="flex" justifyContent="center" alignItems="center" xs={2}>
                        <P>{data.status}</P>
                    </Grid2>
                    <Grid2 display="flex" justifyContent="center" alignItems="center" xs={1}>
                        <P>{data.price}</P>
                    </Grid2>
                    <Grid2 display="flex" justifyContent="center" xs={1}>
                        <Button
                            id="basic-button"
                            aria-controls={open ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                        >
                            <img style={{ cursor: 'pointer' }} height="25px" width="25px" src={moreInfo} alt="Thee dots" />
                        </Button>
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                                'aria-labelledby': 'basic-button',
                            }}
                        >
                            <MenuItem onClick={() => handleClose('edit', data.id)}>Edit</MenuItem>
                            <MenuItem onClick={() => handleClose('delete', item.data().id, data.category)}>Delete</MenuItem>
                            <MenuItem onClick={() => handleClose((data.status === 'Activated' ? 'deactivate' : 'activate'), data.id)}>
                                {data.status === 'Activated' ? 'Deactivate' : 'Activate'}
                            </MenuItem>
                        </Menu>
                    </Grid2>
                </Grid2>
            );
        });
    }
};
export default GetProducts;
