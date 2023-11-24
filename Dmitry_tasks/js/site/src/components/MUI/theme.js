import { createTheme } from '@mui/material/styles';
import 'typeface-cormorant';

const theme = createTheme({
    components: {
        MuiInput: {
            styleOverrides: {
                fullWidth: {
                    width: '100%',
                },
                root: {
                    width: 280,
                },
            },
        },
        MuiTypography: {
            styleOverrides: {
                body1: {
                    fontWeight: 500,
                    color: 'rgb(33, 43, 54)',
                },
                root: {
                    fontFamily: [
                        'Public Sans',
                        'sans-serif',
                    ],
                },
            },
        },
    },
});
export default theme;
