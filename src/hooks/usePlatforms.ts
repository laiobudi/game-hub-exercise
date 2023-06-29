import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import APIClient from "../services/api-client";
import ms from "ms";
import { Platform } from "../entities/Platform";

const apiClient = new APIClient<Platform>("/platforms/lists/parents");

// const usePlatforms = () => useData<Platform>("/platforms/lists/parents");
// Uncomment above line to replace the below line so that the app actively
// queries the platform data from the api.

// const usePlatform = () => ({ data: platform, error: null });

const usePlatforms = () =>
	useQuery({
		queryKey: ["platforms"],
		queryFn: apiClient.getAll,
		staleTime: ms("24h"),
		initialData: platforms,
	});

export default usePlatforms;
