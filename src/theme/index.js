import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { green, red } from '@mui/material/colors';

let theme = createTheme({
    palette: {
        primary: {
            main: '#5E4536',
            secondary:'#8d806f',
            background: "#e1cec2",
        },
        secondary: {
            main: '#CDAC89',
            secondary: '#cf8f2e',
        },
        green: {
            main: green[500],
        },
        red: {
            main: red[500],
        },
        gray: {
            main: '#848484',
            secondary: '#b5b5b5',
            ltext: '#b7b7b7',
            dtext:'#606060',
            light:'#eaeaea',
            tableHeader:'#dbdbdb',
            tableHeaderText:'#606060',
        },
        indicator: {
            green:'#47ba80',
            red:'#f46464',
            yellow:'#f4c04e',
            disable:'#eaeaea',
        },
        button:{
            main: '#5E4536',
            borderMain:'2px solid #5E4536',
            darkRed:'#cd4949',
            yellow:'#ffcb58',
            green:'#47ba80'
        }
    },
});

theme = responsiveFontSizes(theme);

export default theme;