
import { Movie } from "@/types/Movie.interface";
import MovieCard from "@/components/movies/MovieCard";
import { loadTrendingMoviesPreview} from "@/actions/movies";

async function MoviesPage() {
  

const movies: Movie[] | undefined = await  loadTrendingMoviesPreview();


  return (
    <div className="container-fluid">
    <h1 className="m-1">Trends</h1>
    <div className="grid md:grid-cols-4 gap-2  sm:grid-cols-3  xs:grid-cols-2 lg:grid-cols-5">
      {movies?.map((movie, index) =>  movie && (
        <MovieCard movie={movie} key={movie.id} index={index} />
      ))}
      </div>
      </div> 
  );
}

export default MoviesPage;