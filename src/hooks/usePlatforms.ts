import platform from "../data/platform";
import useData from "./useData";

interface Platform {
	id: number;
	name: string;
	slug: string;
}

// const usePlatforms = () => useData<Platform>("/platforms/lists/parents");
// Uncomment above line to replace the below line so that the app actively
// queries the platform data from the api.

const usePlatforms = () => ({ data: platform, error: null });

export default usePlatforms;
