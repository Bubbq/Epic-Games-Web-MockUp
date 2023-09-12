//drop down menu of ordering by relavence, date added, popularity, etc

import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  //the stuff coming from app
  onSelecSortOrder: (sortOption: string) => void; // a function that will take in the sortOption value and send to gamegrid to sort the gameCards
  sortOrder: string//the selected value returned back from app to be matched with its pared label
}

function SortSelector({ onSelecSortOrder, sortOrder }: Props) {
  const sortOptions = [
    //the array of options that will be mapped out, the value is what is passed to backend (the labels are the data members of teh obj ordering, and obj in Game) and label
    { value: "", label: "Relavence" },
    { value: "-added", label: "Date Added" }, //hypen bc we want to show things in reverse (decending) order
    { value: "name", label: "Name" },
    { value: "-released", label: "Realease Date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Rating" },
  ];


  const currentSortOrder = sortOptions.find(order => order.value === sortOrder)//use the callback function to find the sortOrder element with the matching value 
  
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by: {currentSortOrder?.label || 'Relevance'}
      </MenuButton>
      <MenuList>
        {sortOptions.map((sortOption) => (
          <MenuItem
            onClick={() => onSelecSortOrder(sortOption.value)}
            key={sortOption.value}
          >
            {sortOption.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}

export default SortSelector;
