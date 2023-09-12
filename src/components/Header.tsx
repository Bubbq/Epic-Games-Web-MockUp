// the header above the platform and sort selector, changes with user input

import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery; //used for dynamic rendering
}

function Header({ gameQuery }: Props) {
  const heading = `${gameQuery.platform?.name || ''} ${gameQuery.genre?.name || ''} Games`; //what we'll use as the header to dynamically render it, rather than leaving it static
  return <Heading as={"h1"}>{heading}</Heading>;
}

export default Header;
