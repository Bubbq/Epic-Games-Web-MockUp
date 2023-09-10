//made to print out every availble platform for each game in gameCard

import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa"; //imports for the game platform images
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { HStack, Icon } from "@chakra-ui/react"; //for txt tag
import { Platform } from "../hooks/fetchGames"; //info needed to print availible platforms
import { IconType } from "react-icons";

interface Props {
  //properties needed in function to display the icons of the platforms
  platforms: Platform[];
}

function PlatformIconList({ platforms }: Props) {
  const iconMap: { [key: string]: IconType } = {
    //map the name if each platform to an icon importted in react library, the key string essentially says that the key of every icon is a string (the slug from the platform member in game)
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    ios: MdPhoneIphone,
    andriod: FaAndroid,
    web: BsGlobe,
  };
  return (
    <HStack marginY={"10px"}>
      {/*gives spacing from icon to heading of gameCard */}
      {/*Horizontally printing each icon */}
      {platforms.map((platform) => (
        <Icon key = {platform.id} as={iconMap[platform.slug]} color="gray.500" />
      ))}
      {/*prints out (words only the platforms each game is availible on) */}
    </HStack>
  );
}

export default PlatformIconList;
