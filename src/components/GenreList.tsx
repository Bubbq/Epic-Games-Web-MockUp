//implementation to output the items of the genre array out

import fetchGenres from "../hooks/fetchGenres";

function GenreList() {
  const { genres } = fetchGenres();//denconsturcting  genre from the fetchFunction

  return (
    <ul>
      {genres.map((singleGenre) => (//map out all the elements of the genre array to an order list to the aside grid in App.tsx
        <li key={singleGenre.id}>{singleGenre.name}</li>
      ))}
    </ul>
  );
}

export default GenreList;
