import { createStyled, createTheme } from '@mui/system';

const defaultTheme = createTheme({
    // menuButton: {
    //    marginRight: theme.spacing(4)
    // },
    logotype: {
        flexGrow: 5,
    },
});

export const style = createStyled({ defaultTheme });
