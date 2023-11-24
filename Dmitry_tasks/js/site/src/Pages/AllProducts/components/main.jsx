import Grid2 from '@mui/material/Unstable_Grid2';
import {
    Menu, MenuItem, Typography,
} from '@mui/material';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import preview from '../../../images/cerax.png';
import filter from '../../../images/filter-icon.png';
import Enumeration from './Enumeration';
import categorySubscriber from '../../../api/categorySubscriber';
import { changeCategory } from '../../../components/redux/activeCategory';
import { sortPrice } from '../../../components/redux/priceSort';

function Main() {
    const dispatch = useDispatch();
    const [categories] = categorySubscriber();
    const [anchorCategory, setAnchorCategory] = useState(null);
    const [anchorPrice, setAnchorPrice] = useState(null);
    const openCategory = Boolean(anchorCategory);
    const openPrice = Boolean(anchorPrice);
    const MenuController = () => {
        if (categories) {
            return categories.docs.map((item) => (
                <MenuItem
                    key={item.data().category}
                    onClick={() => handleCategoryClose(item.data().category)}
                >
                    {item.data().category}
                </MenuItem>
            ));
        }
    };
    const handleCategoryClick = (event) => {
        setAnchorCategory(event.currentTarget);
    };
    const handleCategoryClose = (item) => {
        if (typeof item === 'string') {
            dispatch(changeCategory(item));
        }
        setAnchorCategory(null);
    };
    const handlePriceClick = (event) => {
        setAnchorPrice(event.currentTarget);
    };
    const handlePriceClose = (item) => {
        if (typeof item === 'string') {
            dispatch(sortPrice(item));
        }
        setAnchorPrice(null);
    };
    return (
        <Grid2 display="flex" flexDirection="column">
            <Grid2>
                <img src={preview} alt="preview" width="700px" height="300px" />
            </Grid2>
            <Grid2 display="flex" gap="20px" alignItems="center" marginLeft={5} marginTop={5}>
                <Grid2
                    style={{
                        cursor: 'pointer', alignItems: 'center', display: 'flex', gap: '5px',
                    }}
                    id="basic-button"
                    aria-controls={openCategory ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={openCategory ? 'true' : undefined}
                    onClick={handleCategoryClick}
                >
                    <img src={filter} height="25px" width="25px" alt="filter" />
                    <Typography variant="p" fontWeight={700}>
                        Категории
                    </Typography>
                </Grid2>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorCategory}
                    open={openCategory}
                    onClose={handleCategoryClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >
                    <MenuController />
                </Menu>
                <Grid2
                    style={{
                        cursor: 'pointer', alignItems: 'center', display: 'flex', gap: '5px',
                    }}
                    id="basic-button"
                    aria-controls={openPrice ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={openPrice ? 'true' : undefined}
                    onClick={handlePriceClick}
                >
                    <Typography variant="p" fontWeight={700}>
                        Сортировать по цене:
                    </Typography>
                </Grid2>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorPrice}
                    open={openPrice}
                    onClose={handlePriceClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >
                    <MenuItem onClick={() => handlePriceClose('high')}>Price: High</MenuItem>
                    <MenuItem onClick={() => handlePriceClose('low')}>Price: Low</MenuItem>
                </Menu>
            </Grid2>
            <Grid2 display="flex" flexWrap="wrap" container margin={0} spacing={10}>
                <Enumeration />
            </Grid2>
        </Grid2>
    );
}
export default Main;
