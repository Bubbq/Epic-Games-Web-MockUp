//contains the implementation for outputting our games onto the main grid of the screen
import fetchGames from "../hooks/fetchGames";
import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

function GameGrid() {
  const { games, error, isLoading } = fetchGames(); //destructuring the two variables in useGames custom hook to use them
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; //the amount of skeleton cards we want to generate everytime it loads
  return (
    <>
      {error && <Text>{error}</Text>}
      {/*conditional rendering, if there's an error (not empty bc we set it if there is one in .catch() then output that error message) */}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding="10px"
        spacing={10}
      >
        {isLoading &&
          skeletons.map((singleSkelton) => (
            <GameCardSkeleton key={singleSkelton} />
          ))}
        {games.map(
          //this callback function maps out every element of the games array obj to the screen
          (singleGame) => (
            <GameCard key={singleGame.id} game={singleGame} /> //gameCard is comp. with each game img, and heading of game outputted
          )
        )}
      </SimpleGrid>
    </>
  );
}

export default GameGrid;
