//the seach bar in the website
import { Input } from "@chakra-ui/input";
import { InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

function SearchBar() {
  return (
    <InputGroup>
      <InputLeftElement children={BsSearch} />
      <Input
        paddingRight={5}
        borderRadius={20}
        placeholder="Search Games..."
        variant={"filled"}
      />
    </InputGroup>
  );
}

export default SearchBar;
