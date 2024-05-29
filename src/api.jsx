import axios from "axios";

export const getMovieList = async () => {
    const movie = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=7dea1af552352246683082c8b37b767d')
    // console.log(movie)
    return movie.data.results
}

export const searchMovie = async (q) => {
    const search = await axios.get(q)
    return
}