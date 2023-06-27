import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

import { Matricula } from "./pages/matricula";
import { Curso } from "./pages/curso";
import { CreateCurso } from "./pages/curso/create-curso";
import { UpdateCurso } from "./pages/curso/update-curso";
import { Aluno } from "./pages/aluno";
import { Disciplina } from "./pages/disciplina";
import { CreateAluno } from "./pages/aluno/create-aluno";
import { UpdateAluno } from "./pages/aluno/update-aluno";
import { CreateDisciplina } from "./pages/disciplina/create-disciplina";
import { UpdateDisciplina } from "./pages/disciplina/update-disciplina";
import { CreateMatricula } from "./pages/matricula/create-enrollment";
import { DbContextProvider } from "./hooks/use-db-state";
import { Universidade } from "./pages/universidade";
import { CreateUniversidade } from "./pages/universidade/create-universidade";
import { UpdateUniversidade } from "./pages/universidade/update-universidade";
import { Relatorio } from "./pages/relatorio";

const router = createBrowserRouter([
  { path: "/", element: <Universidade /> },
  { path: "/universidade", element: <Universidade /> },
  { path: "/universidade/novo", element: <CreateUniversidade /> },
  {
    path: "/universidade/atualizar/:universityId",
    element: <UpdateUniversidade />,
  },

  { path: "/matricula", element: <Matricula /> },
  { path: "/matricula/novo", element: <CreateMatricula /> },

  { path: "/curso", element: <Curso /> },
  { path: "/curso/novo", element: <CreateCurso /> },
  { path: "/curso/atualizar/:courseId", element: <UpdateCurso /> },

  { path: "/aluno", element: <Aluno /> },
  { path: "/aluno/novo", element: <CreateAluno /> },
  { path: "/aluno/atualizar/:studentId", element: <UpdateAluno /> },

  { path: "/disciplina", element: <Disciplina /> },
  { path: "/disciplina/novo", element: <CreateDisciplina /> },
  {
    path: "/disciplina/atualizar/:disciplineId",
    element: <UpdateDisciplina />,
  },

  { path: "/relatorio", element: <Relatorio /> },
]);

export function App() {
  return (
    <ChakraProvider>
      <DbContextProvider>
        <RouterProvider router={router} />
      </DbContextProvider>
    </ChakraProvider>
  );
}
