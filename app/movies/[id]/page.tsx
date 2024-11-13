import { api } from "@/lib/axios";
import MovieSwiper from "@/components/movies/MovieSwiper";
import Image from "next/image";
import { getMovieById, getRelatedMoviesId } from "@/actions/movies";


async function MovieDetailsPage({ params }: any) {
  const { id } = params;

  const movie = await getMovieById(id);
  if (!movie) {
    return (
      <div>
        <h2> No existe esa pelicula</h2>
      </div>
    );
  }

  const relatedMovies = await getRelatedMoviesId(id);
 

  const namesCat = movie?.genres?.map((genre: any) => (
    <li key={genre.id}>
      <h6 id={`id${genre.id}`} className="category-title">
        {genre.name}
      </h6>
    </li>
  ));

  return (
    <div className="">
      {movie && (
        <div className="row">
          <div className="flex w-full md:my-6 md:max-w-2xl md:px-2 lg:max-w-4xl">
            <div className="relative flex w-full items-center overflow-hidden rounded-md bg-white px-4 pt-5  shadow-2xl sm:px-4  md:p-6 lg:p-8">
              <div className="flex min-h-full items-stretch justify-center  text-center md:items-center md:px-2 lg:px-4">
                <div className="grid w-full grid-cols-1 items-start gap-y-8 gap-x-6 sm:grid-cols-12 lg:gap-x-8">
                  <div className="aspect-w-2 aspect-h-3 overflow-hidden rounded-lg sm:col-span-4 lg:col-span-5 mx-auto border-gray-900 shadow-md shadow-black">
                    <Image
                      src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                      width="320"
                      alt={movie.title}
                      height="320"
                      key={movie.id}
                      className="object-cover object-center "
                    />
                  </div>
                  <div className="sm:col-span-8 lg:col-span-7 ">
                    <div className="flex">
                      <h3 className="text-2xl font-bold text-sky-600 sm:pr-12">
                        {movie.original_title}
                      </h3>
                      <span className="movieDetail-score">
                        {" "}
                        {movie.vote_average}
                      </span>
                    </div>
                    <h5 className="font-bold text-gray-900 sm:pr-12">
                      {movie.overview}
                    </h5>
                    <br />
                    <h6>
                      <span>Popularity: </span>
                      {movie.popularity}
                    </h6>
                    <h6>
                      <span>Budget: </span>
                      {movie.budget}
                    </h6>
                    <h6>
                      <span>Release: </span>
                      {movie.status}
                    </h6>
                    <h6>{movie.adult}</h6>

                    <h6>
                      <span>Vote counts: </span>
                      {movie.vote_count}
                    </h6>
                    <h6>
                      <span>Original languaje: </span>
                      {movie.original_language}
                    </h6>
                    <h6>
                      {" "}
                      <span>Genre: </span>
                    </h6>
                    {namesCat && <ul className="lista1">{...namesCat}</ul>}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {relatedMovies?.length === 0 ? (
            <div></div>
          ) : (
            <>
              <h1>Related Movies</h1>
              <MovieSwiper relatedMovies={relatedMovies} />
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default MovieDetailsPage;
