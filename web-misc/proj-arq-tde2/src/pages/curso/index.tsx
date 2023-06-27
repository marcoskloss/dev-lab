import { useEffect, useState } from "react";
import { Button } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

import { Layout } from "../../components/layout";
import { deleteCourse, getAllCourses } from "../../services/curso";
import { CourseTable } from "./components/course-table";

export type Curso = {
  id: number;
  nome: string;
  universidade_id: number;
};

const CursoFormActions = () => (
  <Button as={RouterLink} colorScheme="green" ml="auto" to="/curso/novo">
    Novo Curso
  </Button>
);

export function Curso() {
  const [courses, setCourses] = useState<Curso[]>([]);

  const onDelete = async (curso: Curso) => {
    const confirmDeletion = window.confirm(
      `Deseja realmente excluir o curso: ${curso.nome}?`
    );
    if (!confirmDeletion) return;
    const updatedCourseList = await deleteCourse(courses, curso.id);
    setCourses(updatedCourseList);
  };

  useEffect(() => {
    getAllCourses().then(setCourses);
  }, []);

  return (
    <Layout title="Cursos" headerAction={<CursoFormActions />}>
      <CourseTable courseList={courses} onDelete={onDelete} />
    </Layout>
  );
}
