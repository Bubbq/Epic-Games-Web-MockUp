import { useState, useEffect } from "react";
import apiClient from "../services/api-client"; //the axios instance we created
import { Text } from "@chakra-ui/react";

interface Game {
  //the shape of a singular game as defined in rawg.io
  id: number; //identification needed for output as list and uniqueness in server
  name: string; //name of the game
}

interface FetchGamesResponse {
  //the shape of the 'response' in the .then callback function
  count: number;
  results: Game[];
}

function GameGrid() {
  const [games, setGames] = useState<Game[]>([]); //initilizes an empty array to hold the game objects that are being fetched from the server
  const [error, setError] = useState(""); //possible errors that may arise from fetching, this is the messaging that would return

  useEffect(() => {
    //where we set up the axios http requests
    apiClient
      .get<FetchGamesResponse>("/games") //the <> is used so the get knows the shape of the response data
      .then((responseData) => setGames(responseData.data.results)) //if  fetch is sucessfull, get response data to modify the game object arr
      .catch((possibleError) => setError(possibleError.message)); //if there's any error, get the error message caught and set it to our empty string
  });

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
