import { extendTheme } from "@chakra-ui/react";
import global from "./globalStyle";
import tokens from "./tokens";
import semanticTokens from "./tokens";

const theme = extendTheme({
    config: {
        initialColorMode: "light",
        useSystemColorMode: false
    },

    semanticTokens: tokens

    
});

export default theme;