import genres from "../data/genres";
import { FetchResponse } from "../services/api-client";

import apiClient from "../services/api-client";
import { useQuery } from "@tanstack/react-query";

////////////////////
/// Custome hook ///
/// for fetching ///
/// Genres.       ///
////////////////////

export interface Genre {
	id: number;
	name: string;
	image_background: string;
}

// const useGenres = () => useData<Genre>("/genres");
// This is commented so that the app does not query game data every time it loads.
// In the case that data on the backend doesn't change as often, the app will load quicker.
// To change this back, comment the following line and uncomment the top line.

const useGenres = () =>
	useQuery({
		queryKey: ["genres"],
		queryFn: () =>
			apiClient.get<FetchResponse<Genre>>("/genres").then((res) => res.data),
		staleTime: 24 * 60 * 60 * 1000, // 24hrs
		initialData: { count: genres.length, results: genres },
	});

// const useGenres = () => ({ data: genre, isLoading: false, error: null });

export default useGenres;
