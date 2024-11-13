"use client";
import React, { useState } from "react";
import { Movie } from "@/types/Movie.interface";
import Link from "next/link";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { getMoviesBySearch } from "@/actions/movies";

const SearchPage = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleSearch = async () => {
    if (query.trim() === "") return; // Evita búsquedas vacías
    setLoading(true);
    try {
      const fetchedMovies = await getMoviesBySearch(query);
      setMovies(fetchedMovies || []); // Actualiza el estado con las películas obtenidas
    } catch (error) {
      console.error("Error fetching movies:", error);
      setMovies([]); // En caso de error, muestra una lista vacía
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container ">
        
      <div className="flex  max-w-xs justify-around items-center">
      <label className="text-sm block font-semibold mr-5 ">
      Search: {'  '}
          </label>
        <Input
          type="text"
          placeholder="vengadores"
          value={query}
          onChange={handleChange}
        />
        <Button onClick={handleSearch}>
          Search
        </Button>
      </div>
      {loading ? (
        <h2>Loading...</h2>
      ) : movies.length === 0 ? (
        <div></div>
      ) : (
        <div className="grid md:grid-cols-4 gap-2 sm:grid-cols-3 xs:grid-cols-2 lg:grid-cols-5">
          {movies.map((movie) => (
            <div
              className="bg-zinc-800 text-white h-fit w-full px-1 py-1 rounded-md shadow-md shadow-black"
              key={movie.id}
            >
              <Link href={`/movies/${movie.id}`} key={movie.id}>
                <Image
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  width="300"
                  alt={movie.title}
                  height="300"
                  className="mx-auto rounded-md bg-gray-700 w-auto"
                />
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchPage;
