//modular implementation for fetching games and genres from rawg.io

import { CanceledError } from "axios";
import { useEffect, useState } from "react";
import apiClient from "../services/api-client";



interface FetchResponse<T>{//the shape of the response data, add genaric type 
  count: number;
  results: T[];//the key data from response in http request
}

function fetchData<T>(endpoint: string){//generic type parameter, this data type wil be passed, the endpoint is passed aswell
  const [data, setData] = useState<T[]>([]);//state hook for an array of data, wether it be games or genres
  const [error, setError] = useState("");//setting an empty string for any err msg that might pop up
  const [isLoading, setLoading] = useState(false);//set loading for conditionally rendering any skeletons

  useEffect(() => {
    const controller = new AbortController();//setting this variable just in case theres any issue on the data's end

    setLoading(true);//set loading, were starting the http rewuest
    apiClient
      .get<FetchResponse<T>>(endpoint, { signal: controller.signal })// the 'geting' of data, the tags let react know what type of respone data we're going to get
      .then((res) => {//map every response data into the array of genres
        setData(res.data.results);
        setLoading(false);//stop loading, we've got all the data
      })
      .catch((err) => {//method to get any possible errors (try-catch method in java)
        if (err instanceof CanceledError) return;//if theres any issue on the data's end, just quit
        setError(err.message)//set the error msg to what react got
        setLoading(false);//stop loading, we have a problem
      });

    return () => controller.abort();//cleanup function
  }, []);

  return { data, error, isLoading };//return these varirables to genreList and gameGrind to print out the values
};

export default fetchData;