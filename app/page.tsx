
import Image from "next/image";
function HomePage() {
  return (
    <div className="container bg-zinc-900 mt-5  p-6   shadow-md shadow-black -inset-40 block w-full h-full lg:w-2/4 mx-auto">
    <div className="float-right m-5 ">
    <Image
            src="/img/cinema.png"
            alt="cinema"
            width={256}
            height={256}
            className="object-contain mx-auto  mb-4 w-auto "
          />
    </div>
 
      <h2 className="mb-5  tracking-tight  ">
        Millions of movies to explore. The most populars.
      </h2>

      <h2 className="ml-auto mt-5">
        All films most popular with information about:  title , overview, popularity, budget,release, vote counts , original languaje , genre and related movies.
      </h2>

      <h3 className="ml-auto mt-5">
        The app uses the public API called &ldquo;api.themoviedb.org&rdquo; to obtain
        information about each film and their respective poster. From there, you
        can browse the movies and and explore their characteristics.
      </h3>
    </div>
  );
}

export default HomePage;
