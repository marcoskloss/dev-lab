import { ReactNode } from "react";
import { Heading, HStack } from "@chakra-ui/react";

type Props = {
  title: string;
  left?: ReactNode;
};

export function Header({ title, left = <></> }: Props) {
  return (
    <HStack as="header" pb={5} bg="Background">
      {left}
      <Heading size="md">TDE2 - {title}</Heading>
    </HStack>
  );
}
