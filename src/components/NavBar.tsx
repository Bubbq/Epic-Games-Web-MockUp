//the navigation bar in this website
import { HStack, Image } from "@chakra-ui/react";
import epicGames from "../assets/epic-games (2).svg"; //imports the epic games logo from the assets folder
import ColorModeSwitch from "./ColorModeSwitch";
import SearchBar from "./SearchBar";
function NavBar() {
  return (
    <HStack padding={10}>
      {/*lays our compnents horizontally, makes it have space inbetween, with 10px of padding so our switch is not so close to the edge*/}
      <Image  src={epicGames} boxSize="75px" />
      <SearchBar/>
      <ColorModeSwitch/>
    </HStack>
  );
}

export default NavBar;
