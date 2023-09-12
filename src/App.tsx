import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/fetchGenres";
import SelectPlatform from "./components/SelectPlatform";
import { Platform } from "./hooks/fetchGames";
import SortSelector from "./components/SortSelector";

export interface GameQuery {
  //this obj represents all the user choosing stuff passed from their respective components
  genre: Genre | null; //the genre selected by the user from GenreList
  platform: Platform | null; //the platfrom the user chose in SelectPLatform
  sortOrder: string; // the name returned to SortSelctor to send to gameGrid to rerender
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

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
        <GridItem area="aside" paddingX={3}>
          <GenreList
            onSelectedGenre={(genre) => setGameQuery({ ...gameQuery, genre })} //first update the gameQuery obj with the new genre
            selectedGenre={gameQuery.genre} //then pass that genre back to genreList for txt bolding and the game grid to filter out the new games
          />
        </GridItem>
      </Show>

      <GridItem area="main">
        <HStack spacing={3} paddingLeft={2} marginBottom={5}>
          <SelectPlatform
            onSelectPlatform={(platform) =>setGameQuery({ ...gameQuery, platform })} //first update the gameQuery's platform to the one passed in SelecPlatform
            selectedPlatform={gameQuery.platform} //then pass that obj back to update the drop down menu's name
          />
          <SortSelector
            onSelecSortOrder={(sortOrder) => setGameQuery({ ...gameQuery, sortOrder })}
            sortOrder={gameQuery.sortOrder}//the value being passed back to be used to find the matching label 
          />
          {/*get the value/order member  passed from this comp and update game query, will send to game grid to organize game cards accordingly*/}
        </HStack>
        <GameGrid
          gameQuery={gameQuery} //pass the user chosen genre and platform to game grid to filter the gameCards out
        />
        {/*where the games are fetched from rawg.io and outputted on main panel */}
      </GridItem>
    </Grid>
  );
}

export default App;
