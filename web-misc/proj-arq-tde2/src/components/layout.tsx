import { Box, Button, useDisclosure } from "@chakra-ui/react";
import { PropsWithChildren, ReactNode } from "react";

import { Menu } from "./menu";
import { Header } from "./header";

type Props = { title: string, headerAction?: ReactNode };

export function Layout({ children, title, headerAction = null }: PropsWithChildren<Props>) {
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
        right={headerAction}
      />
      {children}
    </Box>
  );
}
