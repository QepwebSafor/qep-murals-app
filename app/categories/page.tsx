
import { Genre} from "@/types/Movie.interface";
import GenreItem from "@/components/movies/GenreItem";
import { loadGenresPreview } from "@/actions/movies";

 const GenresPage = async () => {

  const categories:Genre[] | undefined = await  loadGenresPreview ();

  return (
    <div className="container-fluid">
      <h1 className="m-1">Films by Genres</h1>
      <div className="grid md:grid-cols-4 gap-4  sm:grid-cols-3  xs:grid-cols-2 lg:grid-cols-5 m-4 ">
      {categories?.map((genre) => (
        <GenreItem genre={genre} key={genre.id} />
      ))}
    </div>
    </div>
  )
}

export default GenresPage