import useGames from "../hooks/useGames";
import { Text } from "@chakra-ui/react";

function GameGrid() {
  const { games, error } = useGames(); //destructuring the two variables in useGames custom hook to use them

  return (
    <>
      {error && <Text>{error}</Text>}
      {/*conditional rendering, if there's an error (not empty bc we set it if there is one in .catch() then output that error message) */}
      <ul>
        {/*output the name of each game with its ky being id found in rawg*/}
        {games.map((singleGame) => (
          <li key={singleGame.id}>{singleGame.name}</li>
        ))}
      </ul>
    </>
  );
}

export default GameGrid;
