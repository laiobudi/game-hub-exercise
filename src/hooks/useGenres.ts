import useData from "./useData";

////////////////////
/// Custome hook ///
/// for fetching ///
/// Genres.       ///
////////////////////

export interface Genre {
	id: number;
	name: string;
}

const useGenres = () => useData<Genre>("/genres");

export default useGenres;
