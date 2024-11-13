"use client";
import Link from "next/link";
import { Genre } from "@/types/Movie.interface";
type Props = {
  genre: Genre;
};
const GenreItem = ({ genre }: Props) => {
  return (
    <>
     
      <Link href={`/categories/${genre.id}`} key={genre.id}>
        <div className="bg-zinc-900  h-fit w-full px-3 py-3 rounded-md shadow-md shadow-black ">
          <h3 id={`id${genre.id}`} className="category-title">
            {" "}
            {genre.name}
          </h3>
        </div>
      </Link>
    </>
  );
};

export default GenreItem;
