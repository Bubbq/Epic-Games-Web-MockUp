// will output the games as cards/boxes, rather than bulletpoints b4, the anatomy of a single card of the game
import { Card, CardBody, Heading, Image, Text } from "@chakra-ui/react";
import useGames, { Game } from "../hooks/fetchGames";
import PlatformIconList from "./PlatformIconList";

interface Props {
  game: Game; //from fetchGames (actually getting the game data
}

function GameCard({ game }: Props) {
  //deconstructing the game component of the interface Prop, used to show the img and heading of each game that will be mapped out in gameGrid
  return (
    <Card borderRadius={10} overflow={"hidden"}>
      {/*the div of one card, bordeRadius makes courners more round, overflow hidden make it where the img is not larger than its container*/}
      <Image src={game.background_image} />
      {/*the src of the pic is the background img string of each game fetched */}
      <CardBody>
        <Heading fontSize="xl">{game.name}</Heading>
        {/*outputting the name of each game*/}
        <PlatformIconList
          platforms={game.parent_platforms.map(
            (platforms) => platforms.platform
            )}
            />{/*this constructs an array of platform obj to pass to the prop in PlatforIconList */}
      </CardBody>
    </Card>
  );
}

export default GameCard;
