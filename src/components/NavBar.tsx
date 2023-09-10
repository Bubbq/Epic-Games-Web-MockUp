//the navigation bar in this website
import { HStack, Image } from "@chakra-ui/react";
import epicGames from "../assets/epic-games (2).svg"; //imports the epic games logo from the assets folder
import ColorModeSwitch from "./ColorModeSwitch";
function NavBar() {
  return (
    <HStack justifyContent={"space-between"} padding={10}>
      {/*lays our compnents horizontally, makes it have space inbetween, with 10px of padding so our switch is not so close to the edge*/}
      <Image src={epicGames} boxSize="75px" />
      {/*displays the epic games logo into, sets as 60px*/}
      <ColorModeSwitch />
    </HStack>
  );
}

export default NavBar;
