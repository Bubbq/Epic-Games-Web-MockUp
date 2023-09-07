//contains the main functionality of fetching our games
import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Game {//exporting this interface to use in GameCard to beautify its output
    //the shape of a singular game as defined in rawg.io
    id: number; //identification needed for output as list and uniqueness in server
    name: string; //name of the game
    background_image: string;//the background img info each game contains
  }
  
interface FetchGamesResponse {
    //the shape of the 'response' in the .then callback function
    count: number;
    results: Game[];
  }
  
function useGames(){
    const [games, setGames] = useState<Game[]>([]); //initilizes an empty array to hold the game objects that are being fetched from the server
    const [error, setError] = useState(""); //possible errors that may arise from fetching, this is the messaging that would return
  
    useEffect(() => {
        const controller = new AbortController();
      apiClient//where we set up the axios http requests
        .get<FetchGamesResponse>("/games", {signal: controller.signal}) //the <> is used so the get knows the shape of the response data, the signal: is for cancelling ongoing fetch requets
        
        .then((responseData) => setGames(responseData.data.results)) //if  fetch is sucessfull, get response data to modify the game object arr
        
        .catch((possibleError) => {//if there's any error, get the error message caught and set it to our empty string
            
          if(possibleError instanceof CanceledError)  return;//checking for canceled req.
            setError(possibleError.message)
        
          }); 
        return () => controller.abort;//cleanup function, prevents memory leaks and removes unwanted behaviours
    }, []);    //empty arr (arr of dependencies) is stop constantly sending requests for out backend  

    return {games, error};//returning this and using it gameGrid to use in that compoennt
}

export default useGames
