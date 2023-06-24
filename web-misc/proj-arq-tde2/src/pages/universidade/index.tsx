import { useEffect, useState } from "react";
import { Button } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

import { Layout } from "../../components/layout";
import {
  deleteUniversity,
  getAllUniversities,
} from "../../services/universidade";
import { UniversityTable } from "./components/university-table";

export type Universidade = {
  id: number;
  nome: string;
};

const UniversidadeFormActions = () => (
  <Button as={RouterLink} colorScheme="green" ml="auto" to="/universidade/novo">
    Nova Universidade
  </Button>
);

export function Universidade() {
  const [universities, setUniversities] = useState<Universidade[]>([]);

  const onDelete = async (university: Universidade) => {
    const confirmDeletion = window.confirm(
      `Deseja realmente excluir a universidade: ${university.nome}?`
    );
    if (!confirmDeletion) return;
    const updatedList = await deleteUniversity(universities, university.id);
    setUniversities(updatedList);
  };

  useEffect(() => {
    getAllUniversities().then(setUniversities);
  }, []);

  return (
    <Layout title="Universidades" headerAction={<UniversidadeFormActions />}>
      <UniversityTable universityList={universities} onDelete={onDelete} />
    </Layout>
  );
}
