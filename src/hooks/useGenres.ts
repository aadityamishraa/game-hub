import genres from '../data/genres'

export interface Genre {
    id: number;
    name: string;
    image_background: string;
}

// const useGenres = () => useData<Genre>('/genres'); // for fetching list of genres from endpoint

// using static data
const useGenres = () => ({data: genres, isLoading: false, error: null})

export default useGenres;
