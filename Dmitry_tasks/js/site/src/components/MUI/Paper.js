import styled from '@emotion/styled';
import { Paper } from '@mui/material';

const Item = styled(Paper)(() => ({
    display: 'flex',
    flexDirection: 'column',
    width: 800,
    padding: '20px 0',
    borderRadius: 20,
    backgroundColor: '#FFFFFFB5',
    margin: '20px auto',
}));
export default Item;
