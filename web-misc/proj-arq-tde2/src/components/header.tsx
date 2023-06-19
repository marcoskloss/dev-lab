import { Box, Heading } from "@chakra-ui/react";

type Props = {
  title: string;
};

export function Header({ title }: Props) {
  return (
    <Box as="header" p={5} bg="Background">
      <Heading size="md">TDE2 - {title}</Heading>
    </Box>
  );
}
