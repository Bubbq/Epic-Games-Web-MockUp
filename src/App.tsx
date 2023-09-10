import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/fetchGenres";
import SelectPlatform from "./components/SelectPlatform";
import { Platform } from "./hooks/fetchGames";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null); //this represents genre selcted by the user from genreList, then is put to gameGrid to output only the related games, tags are to let the state know were carrying a genre obj
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null)//rep the platform selected by user from drop down menu
  return (
    <Grid
      templateAreas={{
        //what our main webpage will look like on different devices, how much area each grid will take depending on the device
        base: `"nav" "main"`, //on mobile, hides the side panel
        lg: `"nav nav " "aside main"`, //on larger devices ( > 1024 px)
      }}
    >
      <GridItem area="nav">
        <NavBar />
        {/*displays game icon top left, and dark mode toggling*/}
      </GridItem>
      <Show above="lg">
        {/*The side panel is only shown when the screen is above 'lg' or greater than 1024px*/}
        <GridItem area="aside" paddingX={5}>
          <GenreList selectedGenre ={selectedGenre} onSelectedGenre={(genre) =>setSelectedGenre(genre)}/>{/*when the genre is selected, set selected genre to that choice */}
          {/*outputting all the availible genres to the side of the website */}
        </GridItem>
        {/*printing the availble genres to the side */}
      </Show>
      <GridItem area="main">
        <SelectPlatform selectedPlatform={selectedPlatform} onSelectPlatform={(passedPlatform) => setSelectedPlatform(passedPlatform)}/>
        <GameGrid selectedPlatform ={selectedPlatform} selectedGenre={selectedGenre}/>
        {/*where the games are fetched from rawg.io and outputted on main panel */}
      </GridItem>
    </Grid>
  );
}

export default App;
