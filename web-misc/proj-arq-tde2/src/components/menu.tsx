import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Stack,
  Link,
} from "@chakra-ui/react";
import { Link as RouterLink, useLocation } from "react-router-dom";

const menuLinks = [
  { path: "/universidade", name: "Universidade" },
  { path: "/matricula", name: "Matrícula" },
  { path: "/curso", name: "Curso" },
  { path: "/aluno", name: "Aluno" },
  { path: "/disciplina", name: "Disciplina" },
  { path: "/relatorio", name: "Relatório" },
];

type Props = { isOpen: boolean; onClose: () => void };

export function Menu({ isOpen, onClose }: Props) {
  const { pathname } = useLocation();

  const isLinkToCurrentPage = (linkName: string) => linkName === pathname;

  return (
    <nav>
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>

          <DrawerBody>
            <Stack>
              {menuLinks.map((menu) => (
                <Link
                  as={RouterLink}
                  to={menu.path}
                  key={menu.path}
                  color={isLinkToCurrentPage(menu.path) ? "blue.600" : "black"}
                >
                  {menu.name}
                </Link>
              ))}
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </nav>
  );
}
