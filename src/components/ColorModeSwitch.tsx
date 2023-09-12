//the switch that will toggle the light/dark mode of the website

import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

function ColorModeSwitch() {
  const { toggleColorMode, colorMode } = useColorMode(); //colormode represents the current mode
  return (
    <HStack>
      {/*horizontal switch bc we want the switch and then the label next to it*/}

      <Switch
        colorScheme="blue"
        isChecked={colorMode == "dark"}
        onChange={toggleColorMode}
      />
      {/*on change of option, toggle colorMode to light/dark, colorScheme is the color when its activated*/}
      <Text whiteSpace={'nowrap'}>Change Theme</Text>
    </HStack>
  );
}

export default ColorModeSwitch;
