import axios from "axios";

export const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
  },  params: {
    api_key: "63c9627ea8fee01315d9e40ae17ac1ce",
  },
});
  
 