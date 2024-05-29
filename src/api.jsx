import axios from "axios";

export const getMovieList = async () => {
    const movie = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=')
    // console.log(movie)
    return movie.data.results
}

export const searchMovie = async (q) => {
    const search = await axios.get(q)
    return
}