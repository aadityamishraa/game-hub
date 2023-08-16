import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Button, Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";

function App() {
  return (
    // <Grid templateAreas={`"nav nav" "aside main"`}> // passing string format
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav" bg={"red.400"}>
        <NavBar></NavBar>
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" bg={"blue"}>
          Aside
        </GridItem>
      </Show>
      <GridItem area="main" bg={"green"}>
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
