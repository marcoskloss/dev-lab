import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

import { Home } from "./pages/home";
import { Universidade } from "./pages/universidade";
import { Curso } from "./pages/curso";
import { Aluno } from "./pages/aluno";
import { Disciplina } from "./pages/disciplina";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/universidade", element: <Universidade /> },
  { path: "/curso", element: <Curso /> },
  { path: "/aluno", element: <Aluno /> },
  { path: "/disciplina", element: <Disciplina /> },
]);

export function App() {
  return (
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  );
}
