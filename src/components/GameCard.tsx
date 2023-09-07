// will output the games as cards/boxes, rather than bulletpoints b4
import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import { Game } from "../hooks/fetchGames";

interface Props {
  game: Game; //from fetchGames (actually getting the game data
}

function GameCard({ game }: Props) {
  //deconstructing the game component of the interface Prop
  return (
    <Card borderRadius={10} overflow={"hidden"}>
      {/*the div of one card, bordeRadius makes courners more round, overflow hidden make it where the img is not larger than its container*/}
      <Image src={game.background_image} />
      {/*the src of the pic is the background img string of each game fetched */}
      <CardBody>
        <Heading fontSize ='xl'>{game.name}</Heading>
        {/*outputting the name of each game*/}
      </CardBody>
    </Card>
  );
}

export default GameCard;
