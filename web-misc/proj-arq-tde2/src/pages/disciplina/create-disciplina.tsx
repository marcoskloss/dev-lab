import { useNavigate } from "react-router-dom";

import { Layout } from "../../components/layout";
import { type Disciplina } from ".";
import { DisciplineForm } from "./components/discipline-form";
import { saveDiscipline } from "../../services/disciplina";

const formEmptyState: Disciplina = {
  id: 0,
  nome: "",
  curso_id: NaN,
};

export function CreateDisciplina() {
  const navigate = useNavigate();

  const onSubmit = async (discipline: Disciplina) => {
    await saveDiscipline({
      nome: discipline.nome,
      curso_id: discipline.curso_id,
    });
    window.alert("Disciplina criada com sucesso");
    navigate("/disciplina");
  };

  const onCancel = () => navigate("/disciplina");

  return (
    <div>
      <Layout title="Cadastro de Disciplina">
        <DisciplineForm
          initialState={formEmptyState}
          onCancel={onCancel}
          onSubmit={onSubmit}
        />
      </Layout>
    </div>
  );
}
