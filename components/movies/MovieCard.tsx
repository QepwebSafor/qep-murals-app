"use client";
import Link from "next/link";
import Image from "next/image";
import { Movie } from "@/types/Movie.interface";
interface MovieCardProps {
  movie: Movie;
  index: number;
}
function MovieCard({ movie, index }: MovieCardProps) {
  
  return movie !== null ? (
    <div className="bg-zinc-800 text-white h-fit w-full px-1 py-1 rounded-md shadow-md shadow-black">
      <Link href={`/movies/${movie.id}`} key={movie.id}>
        <Image
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          width="320"
          alt={movie.title}
          height="320"
          key={movie.id}
          className="mx-auto rounded-md bg-gray-700"
        />
      </Link>
    </div>
  ) : (
    <div>
      <h6> No existe esa pelicula</h6>
    </div>
  );
}

export default MovieCard;
