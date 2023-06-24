import { useEffect, useState } from "react";
import { Button } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

import { Layout } from "../../components/layout";
import { EnrollmentTable } from "./components/enrollment-table";
import { deleteEnrollment, getAllEnrollments } from "../../services/matricula";

export type Matricula = {
  id: number;
  aluno_id: number;
  disciplina_id: number;
  semestre: number;
};

const MatriculaFormActions = () => (
  <Button as={RouterLink} colorScheme="green" ml="auto" to="/matricula/novo">
    Nova Matrícula
  </Button>
);

export function Matricula() {
  const [enrollments, setEnrollments] = useState<Matricula[]>([]);

  const onDelete = async (matricula: Matricula) => {
    const confirmDeletion = window.confirm(
      `Deseja realmente excluir a matrícula: ${matricula.id}?`
    );
    if (!confirmDeletion) return;
    const updatedList = await deleteEnrollment(enrollments, matricula.id);
    setEnrollments(updatedList);
  };

  useEffect(() => {
    getAllEnrollments().then(setEnrollments);
  }, []);

  return (
    <Layout title="Matrículas" headerAction={<MatriculaFormActions />}>
      <EnrollmentTable enrollmentList={enrollments} onDelete={onDelete} />
    </Layout>
  );
}
