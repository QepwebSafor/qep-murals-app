
import {api} from '@/lib/axios';


export const loadTrendingMoviesPreview = async () => {
  try {
    const { data } = await api.get<any>("trending/movie/day");
    const movies = data.results;
   
    return movies;
  } catch (error) {
    console.log(error);
  }
};

export const loadGenresPreview = async () => {
  try {
    const { data } = await api.get<any>("genre/movie/list");
    const categories = data.genres;
    return categories;
  } catch (error) {
    console.log(error);
  }
};

export const getMovieById = async (id: number) => {
  try {
    const {data } = await api.get(`movie/${id}`);

    return data;

  } catch (error) {
    console.log(error);
  }
};

export const getMoviesByCategory = async (id: number) => {
  const { data } = await api.get("discover/movie", {
    params: {
      with_genres: id,
    },
  });

  const movies = data.results;
  return movies;
};

export const getMoviesBySearch = async (query:string) => {
  const { data } = await api.get("search/movie", {
    params: {
      query,
    },
  });

  const movies = data.results;
  return movies;
};

export const getRelatedMoviesId = async (id: number) => {
  const { data } = await api.get(`movie/${id}/recommendations`);

  const relatedMovies = data.results;

  return relatedMovies;
};




