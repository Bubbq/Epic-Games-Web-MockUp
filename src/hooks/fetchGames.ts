//contains the main functionality of fetching our games
import fetchData from "./fetchData";
import { Genre } from "./fetchGenres";

export interface Platform{//describes the shape of one platform in the parent_platform array, raw.io did a terrible job here..., exporting so PLatformIconList can use
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
  
const fetchGames = (selectedGenre: Genre | null) => fetchData<Game>('/games', {params: {genres: selectedGenre?.id}}, [selectedGenre?.id]);//calling the modular fetchData hook with generic type paramter Game, the params just lets axios know to to look for when rendering, the selected Genre.id tells the useEffect hook in fetchData how many times your rendering the games (only 1 bc the genres are in the http reqest or null, meaing the array of dependencies will only render once)

export default fetchGames
