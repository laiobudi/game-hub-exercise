import { SimpleGrid } from "@chakra-ui/react";
import React from "react";
import useGameScreenshots from "../hooks/useGameScreenshots";

interface Props {
	gameId: number;
}

const GameScreenshots = ({ gameId }: Props) => {
	const { data: screenshots, isLoading, error } = useGameScreenshots(gameId);

	if (isLoading) return null;
	if (error) throw error;

	return (
		<SimpleGrid columns={{ base: 1, md: 2 }} spacing={2}>
			{screenshots?.results.map((result) => (
				<img key={result.id} src={result.image} />
			))}
		</SimpleGrid>
	);
};

export default GameScreenshots;
