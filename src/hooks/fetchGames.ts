//contains the main functionality of fetching our games
import { GameQuery } from "../App";
import fetchData from "./fetchData";

export interface Platform{//describes the shape of one platform in the parent_platform array, exporting so PlatformIconList can use, this arrives from the app
  id: number,
  name: string,
  slug: string,
}

export interface Game {//exporting this interface to use in GameCard to beautify its output
    //the shape of a singular game as defined in rawg.io
    id: number; //identification needed for output as list and uniqueness in server
    name: string; //name of the game
    background_image: string;//the background img info each game contains
    parent_platforms: {platform: Platform}[] //the platforms this game is availble on, an arr obj
    metacritic: number,//the score of each game
  }
  
const fetchGames = (gameQuery: GameQuery) => fetchData<Game>('/games', {params: {genres: gameQuery.genre?.id, parent_platforms: gameQuery.platform?.id}}, [gameQuery]);//calling the modular fetchData hook with generic type paramter Game, using both members that users choose in gameQuery, and have it in array of dependecis, meaning, that with everychange in gameQuery (from userchoice) rerender the request

export default fetchGames
