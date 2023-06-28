import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import { Game } from "./useGames";

const apiClient = new APIClient<Game>("/games");

const useGame = (slug: string) =>
	useQuery({
		queryKey: ["games", slug], // query is re-sent when slug changes
		queryFn: () => apiClient.get(slug),
	});

export default useGame;
