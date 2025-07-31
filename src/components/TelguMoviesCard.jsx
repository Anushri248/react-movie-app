import MoviesSeries from "../api/MoviesSeries.json";
import { MovieCard } from "./MovieCard";
import {Footer} from "./Footer";

const MoviesCard = () => {
    const nm="Anushri";
  return (
    <div>

      <ul className="grid grid-three-cols content">
        {MoviesSeries.map((movie) => {
          return (
            <MovieCard movieProp={movie} key={movie.id}/>
          );
        })}
      </ul>
      <hr></hr>
      <Footer name={nm}/>
    </div>
  );
};

export default MoviesCard;
