//contains the implementation for outputting our games onto the main grid of the screen
import useGames from "../hooks/fetchGames";
import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";

function GameGrid() {
  const { games, error } = useGames(); //destructuring the two variables in useGames custom hook to use them

  return (
    <>
      {error && <Text>{error}</Text>}
      {/*conditional rendering, if there's an error (not empty bc we set it if there is one in .catch() then output that error message) */}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding="10px"
        spacing={10}
      >
        {/*obj in columns makes it where depending on screen size, x amount of cards will render */}
        {games.map(
          //this callback function maps out every element of the games array obj to the screen
          (singleGame) => (
            <GameCard key={singleGame.id} game={singleGame}></GameCard> //gameCard is comp. with each game img, and heading of game outputted
          )
        )}
      </SimpleGrid>
    </>
  );
}

export default GameGrid;
