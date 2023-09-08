import { CanceledError } from "axios";
import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

interface Genre {//the shape of one genre from the data in this http request
  id: number;
  name: string;
}

interface FetchGenresResponse {//the shape of the response data
  count: number;
  results: Genre[];
}

function fetchGenres(){
  const [genres, setGenres] = useState<Genre[]>([]);//state hook for the array of genre obj
  const [error, setError] = useState("");//setting an empty string for any err msg that might pop up
  const [isLoading, setLoading] = useState(false);//set loading for conditionally rendering any skeletons

  useEffect(() => {
    const controller = new AbortController();//setting this variable just in case theres any issue on the data's end

    setLoading(true);//set loading, were starting the http rewuest
    apiClient
      .get<FetchGenresResponse>("/genres", { signal: controller.signal })// the 'geting' of data, the tags let react know what type of respone data we're going to get
      .then((res) => {//map every response data into the array of genres
        setGenres(res.data.results);
        setLoading(false);//stop loading, we've got all the data
      })
      .catch((err) => {//method to get any possible errors (try-catch method in java)
        if (err instanceof CanceledError) return;//if theres any issue on the data's end, just quit
        setError(err.message)//set the error msg to what react got
        setLoading(false);//stop loading, we have a problem
      });

    return () => controller.abort();//cleanup function
  }, []);

  return { genres, error, isLoading };//return these varirables to genreList and gameGrind to print out the values
};

export default fetchGenres;