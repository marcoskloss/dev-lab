import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

import { Home } from "./pages/home";
import { Matricula } from "./pages/matricula";
import { Curso } from "./pages/curso";
import { CreateCurso } from "./pages/curso/create-curso";
import { UpdateCurso } from "./pages/curso/update-curso";
import { Aluno } from "./pages/aluno";
import { Disciplina } from "./pages/disciplina";

import { Teste } from "./pages/teste";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/matricula", element: <Matricula /> },
  { path: "/curso", element: <Curso /> },
  { path: "/curso/novo", element: <CreateCurso /> },
  { path: "/curso/atualizar/:cursoId", element: <UpdateCurso /> },
  { path: "/aluno", element: <Aluno /> },
  { path: "/disciplina", element: <Disciplina /> },
  { path: "/teste", element: <Teste /> },
]);

export function App() {
  return (
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  );
}
