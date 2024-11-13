
import Link from "next/link";
import Image from "next/image";
import { getMoviesByCategory, loadGenresPreview  } from "@/actions/movies";
const MoviesByCategories = async ({ params }: any) => {
  const { id } = params;

  const categoryId = +id!;
  const categories = await loadGenresPreview();

  const objetoEncontrado = categories.find(
    (category:any) => category.id === categoryId
  );
  const nombreObjetoEncontrado = objetoEncontrado
    ? objetoEncontrado.name
    : null;

    const movies = await getMoviesByCategory(categoryId);

    if (categoryId === undefined) {
   
  
      return ( <h1>No existe la categoria</h1>)
    } 

  return (
    <div className="container-fluid ">
      <h1>{nombreObjetoEncontrado}</h1>
      <div className="grid md:grid-cols-4 gap-2  sm:grid-cols-3  xs:grid-cols-2 lg:grid-cols-5  ">
        {movies?.map((movie:any , index:any) => (
          <div className="bg-zinc-800 text-white h-fit w-full px-1 py-1 rounded-md shadow-md shadow-black " key={index}>
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
        ))}
      </div>
    </div>
  );
};

export default MoviesByCategories;
