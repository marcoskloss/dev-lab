import { useEffect, useState } from "react";
import { Button } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

import { Layout } from "../../components/layout";
import { DisciplineTable } from "./components/discipline-table";
import { deleteDiscipline, getAllDisciplines } from "../../services/disciplina";

export type Disciplina = {
  id: number;
  nome: string;
  curso_id: number;
};

const DisciplinaFormActions = () => (
  <Button as={RouterLink} colorScheme="green" ml="auto" to="/disciplina/novo">
    Nova Disciplina
  </Button>
);

export function Disciplina() {
  const [disciplines, setDisciplines] = useState<Disciplina[]>([]);

  const onDelete = async (discipline: Disciplina) => {
    const confirmDeletion = window.confirm(
      `Deseja realmente excluir a disciplina: ${discipline.nome}?`
    );
    if (!confirmDeletion) return;
    const updatedDisciplineList = await deleteDiscipline(
      disciplines,
      discipline.id
    );
    setDisciplines(updatedDisciplineList);
  };

  useEffect(() => {
    getAllDisciplines().then(setDisciplines);
  }, []);

  return (
    <Layout title="Alunos" headerAction={<DisciplinaFormActions />}>
      <DisciplineTable disciplineList={disciplines} onDelete={onDelete} />
    </Layout>
  );
}
