import { Badge } from "@chakra-ui/react";

interface Props {
  score: number; //the rating out of 100
}

function CriticScore({ score }: Props) {
  let color = score >= 90 ? "green" : score >= 75 ? "yellow" : "red"; //ternary operator to see based on the score, what color the number should be
  return (
    <Badge colorScheme={color} fontSize="14px" paddingX={2} borderRadius="4px">
      {score}
    </Badge>
  );
}

export default CriticScore;
