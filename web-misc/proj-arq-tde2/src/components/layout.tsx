import { Box } from "@chakra-ui/react";
import { PropsWithChildren } from "react";

export function Layout({ children }: PropsWithChildren) {
  return (
    <Box p={5} as="main">
      {children}
    </Box>
  );
}
