//the drop down menu for choosing which platform you want the games to make availible

import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import fetchPlatforms from "../hooks/fetchPlatforms";
import { Platform } from "../hooks/fetchGames";

interface Props {
  onSelectPlatform: (platform: Platform) => void; //a function passed from app tsx that will take a parameter and will return void
  selectedPlatform: Platform | null; //the platform that will show on the drop down menu so you know which platform you've selected
}
function SelectPlatform({ onSelectPlatform, selectedPlatform }: Props) {
  const { data, error } = fetchPlatforms(); //getting all the data and any possible error from the fetchPlatform function
  if (error) return null; //dont output a drop-down if there's any error fetching the data

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform ? selectedPlatform.name : "Platform"}
        {/* set the name to the platform the user pressed, and if they haven't yet, just output 'Platform' */}
      </MenuButton>
      <MenuList>
        {data.map((singlePlatform) => (
          <MenuItem
            onClick={() => onSelectPlatform(singlePlatform)}
            key={singlePlatform.id}
          >
            {singlePlatform.name}
          </MenuItem>
        ))}
        {/*maps out all platforms fetched to a menuitem, when this is pressed, a function from app tsx will take teh platform chosen, and return null */}
      </MenuList>
    </Menu>
  );
}

export default SelectPlatform;
