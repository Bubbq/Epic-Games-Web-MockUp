import { extendTheme, ThemeConfig} from "@chakra-ui/react";

const config: ThemeConfig = {
initialColorMode: 'dark',//the initial color the webpage will take
}

const theme = extendTheme({config});//passes obj with config property

export default theme;