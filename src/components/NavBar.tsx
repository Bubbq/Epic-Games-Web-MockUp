//the navigation bar in this website
import { HStack, Image } from "@chakra-ui/react";
import epicGames from "../assets/epic-games (2).svg"; //imports the epic games logo from the assets folder
import ColorModeSwitch from "./ColorModeSwitch";
import SearchBar from "./SearchBar";

interface Props{//since SearchBar is not a direct child of app, we have to pass the prop from app -> navbar -> searchbar
  onSearch: (searchText: string) =>void 
}

function NavBar({onSearch}: Props) {
  return (
    <HStack padding={10}>
      {/*lays our compnents horizontally, makes it have space inbetween, with 10px of padding so our switch is not so close to the edge*/}
      <Image  src={epicGames} boxSize="75px" />
      <SearchBar onSearch ={onSearch}/>
      <ColorModeSwitch/>
    </HStack>
  );
}

export default NavBar;
