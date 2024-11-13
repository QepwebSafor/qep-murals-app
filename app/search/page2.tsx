"use client";
import React, { useState } from "react";
import { Movie } from "@/types/Movie.interface";
import Link from "next/link";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { getMoviesBySearch } from "@/actions/movies";
type Inputs = {
  query: string;
};
const SearchPage = () => {

  const [query, setQuery] = useState("");


  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value)
    setQuery(event.target.value);
    console.log(query)
  };
  const handleSearch =async () => {
    const movies: Movie[] | undefined = await  getMoviesBySearch(query);
    return movies;
  };
  const movies = handleSearch();
  if (!movies) {

    return <h2>Np movies in search</h2>
  }
  return (
    <div className="container-fluid m-2 ">
      <div className=" flex  mx-auto  max-w-xs">
        <Input
          type="text"
          className="form-control mt-3 "
          placeholder="vengadores"
          value={query}
          onChange={handleChange}
        />
        <Button onClick={handleSearch} className="btn btn-primary">
          Search
        </Button>
      </div>
      <div className="grid md:grid-cols-4 gap-2  sm:grid-cols-3  xs:grid-cols-2 lg:grid-cols-5  ">
        {Array.isArray(movies) && movies?.map((movie, index) => (
          <div
            className="bg-zinc-800 text-white h-fit w-full px-1 py-1 rounded-md shadow-md shadow-black "
            key={index}
          >
            <Link href={`/movies/${movie.id}`} key={movie.id}>
              <Image
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                width="320"
                alt={movie.title}
                height="340"
                key={movie.id}
                className="mx-auto rounded-md bg-gray-700"
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
