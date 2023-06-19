import { Box, Button, useDisclosure } from "@chakra-ui/react";
import { PropsWithChildren } from "react";

import { Menu } from "./menu";
import { Header } from "./header";

type Props = { title: string };

export function Layout({ children, title }: PropsWithChildren<Props>) {
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <Box p={5} as="main">
      <Menu isOpen={isOpen} onClose={onClose} />
      <Header
        title={title}
        left={
          <Button colorScheme="blue" mr={5} onClick={onOpen}>
            ☰
          </Button>
        }
      />
      {children}
    </Box>
  );
}
