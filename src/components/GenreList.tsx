import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import fetchGenres from "../hooks/fetchGenres";
import getCroppedImageUrl from "../services/img-url";

const GenreList = () => {
  const { data } = fetchGenres();//get the return value 'data' from the hook fetchGenres

  return (
    <List>
      {data.map((genre) => (//map out every element of the genre array with the img
        <ListItem key={genre.id} paddingY = "5px">
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}//using the cropped function, taking a string, and live crops the img url fetched from fetchGenre and fetchData
            />
            <Text fontSize = "lg">{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
