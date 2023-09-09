//implementation for fetching Genre data
import fetchData from "./fetchData";

export interface Genre {//the shape of one genre from the data in this http request
  id: number;//used for the key tag
  name: string;//name of the genre
  image_background: string;//the url of img for each genre

}

const fetchGenres = () => fetchData<Genre>('/genres');//call the fetchData function with the type of data Genre w the endpoint /genres

export default fetchGenres;