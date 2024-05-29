import "../index.css";
import { getMovieList } from "../api";
import { useEffect, useState } from "react";

function HomePages() {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    getMovieList().then((hasil) => {
      setMovieList(hasil);
    });
  }, []);

  const search = (e) => {
    console.log({ e });
  };

  console.log({ movieList });

  const MovieData = () => {
    return movieList.map((movie, i) => {
      let baseUrlImage = "https://image.tmdb.org/t/p/w500";
      let posterPath = movie.poster_path;

      let imageUrl = baseUrlImage + posterPath;
      return (
        <div className="movie-wrapper w-[400px] bg-white text-black" key={i}>
          <div className="movie-title">{movie.title}</div>
          <img src={imageUrl} className="" />
          <div className="movie-date">{movie.release_date}</div>
          <div className="movie-rate">{movie.vote_average}</div>
        </div>
      );
    });
  };

  return (
    <div className="App ">
      <header className="App-header h-full">
        <div className="Header p-3 w-1/2 mb-10">
          <h1>LANG</h1>
          <input type="text" className="my-8 text-black p-3 w-1/2 rounded-xl" placeholder="Cari film" onChange={({ target }) => search(target.value)} />
        </div>
        <div className="movie-container container  flex justify-center items-center gap-4 flex-wrap">
          <MovieData />
        </div>
      </header>
    </div>
  );
}

export default HomePages;
