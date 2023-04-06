import { useState } from "react";
import "./App.css";

import ColorModeSwitch from "./components/ColorModeSwitch";
import ListGroup from "./components/ListGroup";
import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";

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
					Main
				</GridItem>
			</Grid>
		</div>
	);
}

export default App;
