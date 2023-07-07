import {createTheme} from "@mui/material";

const theme = createTheme({
    palette: {
        primary: {
            main: '#FFFFFF'
        },
        secondary:{
            main: '#000000'
        },
        grey: '#444950',
    },
    typography: {
        fontFamily : 'Quicksand',
        fontWeightLight: 400,
        fontWeightRegular: 500,
        fontWeightMedium: 600,
        fontWeightBold: 700,
    },
    listItem:{
        fontFamily : 'Quicksand',
    },
    listItemText:{
        fontFamily : 'Quicksand',
    },
    button: {
        fontFamily : 'Quicksand',
        borderRadius: 8,
    },
    Card: {
        fontFamily : 'Quicksand',
    },

})

export default theme;