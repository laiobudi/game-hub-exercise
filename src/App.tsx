import { useState } from "react";
import { Grid, GridItem, Show } from "@chakra-ui/react";
import "./App.css";

import ColorModeSwitch from "./components/ColorModeSwitch";
import ListGroup from "./components/ListGroup";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";

function App() {
	return (
		<div>
			<Grid
				templateAreas={{
					base: `"nav" "main"`,
					lg: `"nav nav" "aside main"`, // > 1024px
				}}
			>
				<GridItem area="nav">
					<NavBar />
				</GridItem>
				<Show above="lg">
					<GridItem area="aside" bg="gold">
						Aside
					</GridItem>
				</Show>
				<GridItem area="main" bg="dodgerblue">
					<GameGrid />
				</GridItem>
			</Grid>
		</div>
	);
}

export default App;
