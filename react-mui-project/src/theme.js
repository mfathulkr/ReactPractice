import { createTheme } from "@mui/material";

export const theme = createTheme({
    palette: {
        primary: {
            main: "#f44336",
            light: "#e57373",
        },
        secondary: {
            main: "#3f51b5",
            light: "#7986cb",  
        },
        success: {
            main: "#4caf50",
            light: "#81c784",
        },
        error: {
            main: "#f44336",
            light: "#e57373",
        },
        warning: {
            main: "#ff9800",
            light: "#ffb74d",
        },
        info: {
            main: "#2196f3",
            light: "#64b5f6",
        },
        background: {
            default: "#fff",
            light: "#f5f5f5",

        },
    },
})