import { useEffect, useState } from "react";
import { Button } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

import { Layout } from "../../components/layout";
import { StudentTable } from "./components/student-table";
import { deleteStudent, getAllStudents } from "../../services/aluno";

export type Aluno = {
  id: number;
  nome: string;
  curso_id: number;
};

const AlunoFormActions = () => (
  <Button as={RouterLink} colorScheme="green" ml="auto" to="/aluno/novo">
    Novo Aluno
  </Button>
);

export function Aluno() {
  const [students, setStudents] = useState<Aluno[]>([]);

  const onDelete = async (student: Aluno) => {
    const confirmDeletion = window.confirm(
      `Deseja realmente excluir o aluno: ${student.nome}?`
    );
    if (!confirmDeletion) return;
    const updatedStudentList = await deleteStudent(students, student.id);
    setStudents(updatedStudentList);
  };

  useEffect(() => {
    getAllStudents().then(setStudents);
  }, []);

  return (
    <Layout title="Alunos" headerAction={<AlunoFormActions />}>
      <StudentTable studentList={students} onDelete={onDelete} />
    </Layout>
  );
}
