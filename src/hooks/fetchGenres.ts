//implementation for fetching Genre data
import fetchData from "./fetchData";

export interface Genre {//the shape of one genre from the data in this http request
  id: number;
  name: string;
}

const fetchGenres = () => fetchData<Genre>('/genres');//call the fetchData function with the type of data Genre w the endpoint /genres

export default fetchGenres;