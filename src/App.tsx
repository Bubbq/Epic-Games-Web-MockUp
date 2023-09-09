import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";

function App() {
  return (
    <Grid
      templateAreas={{
        //what our main webpage will look like on different devices, how much area each grid will take depending on the device
        base: `"nav" "main"`, //on mobile, hides the side panel
        lg: `"nav nav " "aside main"`, //on larger devices ( > 1024 px)
      }}
      templateColumns={{
        base: '1fr',//on base/mobile, the one column will take all the availible space
        lg: '200px 1fr'// on larger devices, one column will be  200px, and the others will take all avaible space
      }}
    >
      <GridItem area="nav">
        <NavBar />
        {/*displays game icon top left, and dark mode toggling*/}
      </GridItem>
      <Show above="lg">
        {/*The side panel is only shown when the screen is above 'lg' or greater than 1024px*/}
        <GridItem area="aside" paddingX={5}>
          <GenreList />{" "}
          {/*outputting all the availible genres to the side of the website */}
        </GridItem>
        {/*printing the availble genres to the side */}
      </Show>
      <GridItem area="main">
        <GameGrid />
        {/*where the games are fetched from rawg.io and outputted on main panel */}
      </GridItem>
    </Grid>
  );
}

export default App;
