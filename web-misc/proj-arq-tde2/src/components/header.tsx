import { ReactNode } from "react";
import { Heading, HStack } from "@chakra-ui/react";

type Props = {
  title: string;
  left?: ReactNode;
  right?: ReactNode;
};

export function Header({ title, left = null, right = null }: Props) {
  return (
    <HStack as="header" pb={5}>
      {left}
      <Heading size="md">TDE2 - {title}</Heading>
      {right}
    </HStack>
  );
}
