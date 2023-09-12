//the seach bar in the website
import { Input } from "@chakra-ui/input";
import { InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface Props{
  onSearch: (searchText: string) =>void //a function that app uses to set the user search to update the gameQuery
}

function SearchBar({onSearch}: Props) {
  const ref = useRef<HTMLInputElement>(null)//the value thats stored in the input tag under the property 'ref'
  return (
  <form style={{width: '100%'}} onSubmit={(event) => {{/*when the user presses enter on the search bar, it passes the value to app, who puts it in the gameQuery obj to gameGrid to filter */}
  event.preventDefault()  //  prevents the form from being posted to teh server
  if(ref.current) onSearch(ref.current.value) //if theres search input existing, then keep updating that member in gameQuery 
  }}>
      <InputGroup>
        <InputLeftElement children={BsSearch} />
        <Input
          paddingRight={5}
          borderRadius={20}
          placeholder="Search Games..."
          variant={"filled"}
          ref={ref}
        />
      </InputGroup>
    </form>
  );
}

export default SearchBar;
