import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Button, Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenresList from "./components/GenresList";
import { Genre } from "./hooks/useGenres";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  return (
    // <Grid templateAreas={`"nav nav" "aside main"`}> // passing string format
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar></NavBar>
      </GridItem>

      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenresList onSelectGenre={(genre)=>setSelectedGenre(genre)}/>
        </GridItem>
      </Show>
      <GridItem area="main">
        <GameGrid selectedGenre={selectedGenre}/>
      </GridItem>
    </Grid>
  );
}

export default App;
