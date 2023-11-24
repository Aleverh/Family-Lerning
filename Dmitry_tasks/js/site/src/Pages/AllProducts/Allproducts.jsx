import Grid2 from '@mui/material/Unstable_Grid2';
import Main from './components/main';
import Header from './components/header';

function AllProducts() {
    return (
        <Grid2 padding="20px" width="1000px" flexDirection="column" margin="0 auto" backgroundColor="white" borderRadius="20px" container>
            <Header />
            <Main />
        </Grid2>
    );
}
export default AllProducts;
