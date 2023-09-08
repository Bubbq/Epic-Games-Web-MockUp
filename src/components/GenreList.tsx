//implementation to output the items of the genre array out

import fetchGenres from "../hooks/fetchGenres";

function GenreList() {
  const { data } = fetchGenres();//get data array from fetchGenres, who gets it from fetchData

  return (
    <ul>
      {data.map((singleData) => (//map out all the elements of the genre array to an order list to the aside grid in App.tsx
        <li key={singleData.id}>{singleData.name}</li>
      ))}
    </ul>
  );
}

export default GenreList;
