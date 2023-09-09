//makes the skeleton that you see when reloading/loading up the page

import {
  Card,
  CardBody,
  HStack,
  Skeleton,
  SkeletonText,
} from "@chakra-ui/react";

function GameCardSkeleton() {
  return (
    //copying the same anatomy as GameCard, but with skeleton text and shape
    <HStack>
      <Card width="350px" borderRadius={10} overflow={"hidden"}>
        {/*have the same attruibutes as the GameCard so they look similar when loading */}
        <Skeleton height="200px" />
        <CardBody>
          <SkeletonText />
        </CardBody>
      </Card>
    </HStack>
  );
}

export default GameCardSkeleton;
