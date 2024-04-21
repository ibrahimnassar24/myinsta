import { extendTheme } from "@chakra-ui/react";
import global from "./globalStyle";

const theme = extendTheme({
    config: {
        initialColorMode: "light",
        useSystemColorMode: false
    },

    
});

export default theme;