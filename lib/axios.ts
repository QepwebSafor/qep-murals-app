import axios from "axios";

export const api = axios.create({
    baseURL: 'https://api.thedogapi.com/v1',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
  },
  }
  );
  api.defaults.headers.common['X-API-KEY'] ='live_uzF61PwiJHf3Usts5SwmXw3wNLtwMMmQ83wrNRnv2pbIa2O3bwzQzznzMpXQsxrv';
  export const API_URL_RANDOM =
    'https://api.thedogapi.com/v1/images/search?limit=2';
  export const API_URL_FAVORITES =
    'https://api.thedogapi.com/v1/favourites';
  export const API_URL_FAVORITES_DELETE = (id:any) => {
    `https://api.thedogapi.com/v1/favourites/${id}`;
  };
  export const API_URL_UPLOAD =  'https://api.thedogapi.com/v1/images/upload';
  export const API_URL_BREEDS =
  'https://api.thedogapi.com/v1/breeds/search?limit=2';
  export const API_URL_CATEGORIES =
  'https://api.thedogapi.com/v1/categories';
 