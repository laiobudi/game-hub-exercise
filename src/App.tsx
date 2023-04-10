import { Box, Flex, Grid, GridItem, Show } from "@chakra-ui/react";
import "./App.css";

import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";
import SortSelector from "./components/SortSelector";

export interface GameQuery {
	genre: Genre | null;
	platform: Platform | null;
	sortOrder: string;
	searchText: string;
}

function App() {
	const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

	// These states are deprecated because of duplication. Replaced by gameQuery
	// const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
	// const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
	// 	null
	// );

	return (
		<div>
			<Grid
				templateAreas={{
					base: `"nav" "main"`,
					lg: `"nav nav" "aside main"`, // > 1024px
				}}
				templateColumns={{
					base: "1fr",
					lg: "200px 1fr",
				}}
			>
				<GridItem area="nav">
					<NavBar
						onSearch={(searchText) =>
							setGameQuery({ ...gameQuery, searchText })
						}
					/>
				</GridItem>
				<Show above="lg">
					<GridItem area="aside" paddingX={5}>
						<GenreList
							onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
							selectedGenre={gameQuery.genre}
						/>
					</GridItem>
				</Show>
				<GridItem area="main">
					<Flex paddingLeft={2} marginBottom={3}>
						<Box marginRight={5}>
							<PlatformSelector
								onSelectPlatform={(platform) =>
									setGameQuery({ ...gameQuery, platform })
								}
								selectedPlatform={gameQuery.platform}
							/>
						</Box>
						<SortSelector
							onSelectSortOrder={(sortOrder) =>
								setGameQuery({ ...gameQuery, sortOrder })
							}
							sortOrder={gameQuery.sortOrder}
						/>
					</Flex>
					<GameGrid gameQuery={gameQuery} />
				</GridItem>
			</Grid>
		</div>
	);
}

export default App;
