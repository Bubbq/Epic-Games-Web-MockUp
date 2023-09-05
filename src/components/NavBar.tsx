//the navigation bar in this website
import { HStack, Image, Text } from "@chakra-ui/react";
import epicGames from "../assets/epic-games (2).svg"; //imports the epic games logo from the assets folder
function NavBar() {
  return (
    <HStack>
      {/*lays our compnents horizontally*/}
      <Image src={epicGames} boxSize="60px" />
      {/*displays the epic games logo into, sets as 60px*/}
      <Text>This Is the Navigation Bar</Text>
    </HStack>
  );
}

export default NavBar;
