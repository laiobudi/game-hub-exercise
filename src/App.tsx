import { Box, Flex, Grid, GridItem, Show } from "@chakra-ui/react";
import "./App.css";

import { useState } from "react";
import GameGrid from "./components/GameGrid";
import GameHeading from "./components/GameHeading";
import GenreList from "./components/GenreList";
import NavBar from "./components/NavBar";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";

export interface GameQuery {
	genreId?: number;
	platformId?: number;
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
							onSelectGenre={(genre) =>
								setGameQuery({ ...gameQuery, genreId: genre.id })
							}
							selectedGenreId={gameQuery.genreId}
						/>
					</GridItem>
				</Show>
				<GridItem area="main">
					<Box paddingLeft={2}>
						<GameHeading gameQuery={gameQuery} />
						<Flex marginBottom={3}>
							<Box marginRight={5}>
								<PlatformSelector
									onSelectPlatform={(platform) =>
										setGameQuery({ ...gameQuery, platformId: platform.id })
									}
									selectedPlatformId={gameQuery.platformId}
								/>
							</Box>
							<SortSelector
								onSelectSortOrder={(sortOrder) =>
									setGameQuery({ ...gameQuery, sortOrder })
								}
								sortOrder={gameQuery.sortOrder}
							/>
						</Flex>
					</Box>
					<GameGrid gameQuery={gameQuery} />
				</GridItem>
			</Grid>
		</div>
	);
}

export default App;
