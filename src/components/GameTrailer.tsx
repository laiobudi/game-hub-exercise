import useGameTrailers from "../hooks/useGameTrailers";

interface Props {
	gameId: number;
}

const GameTrailer = ({ gameId }: Props) => {
	const { data, isLoading, error } = useGameTrailers(gameId);

	if (isLoading) return null;
	if (error) throw error;

	const first = data?.results[0];

	return first ? (
		<video src={first.data[480]} poster={first.preview} controls />
	) : null;
};

export default GameTrailer;
