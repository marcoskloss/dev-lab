import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { Layout } from "../../components/layout.js";
import { type Disciplina } from "./index.js";
import { DisciplineForm } from "./components/discipline-form.js";
import {
  getDisciplineById,
  updateDiscipline,
} from "../../services/disciplina.js";

const emptyFormState: Disciplina = {
  id: 0,
  nome: "",
  curso_id: 0,
};

export function UpdateDisciplina() {
  const navigate = useNavigate();
  const { disciplineId } = useParams();

  const [discipline, setDiscipline] = useState(emptyFormState);

  const onSubmit = async (discipline: Disciplina) => {
    await updateDiscipline(discipline);
    window.alert("Disciplina editada com sucesso");
    navigate("/disciplina");
  };

  const onCancel = () => navigate("/disciplina");

  useEffect(() => {
    getDisciplineById(Number(disciplineId)).then(setDiscipline);
  }, [disciplineId]);

  return (
    <div>
      <Layout title="Atualizar Disciplina">
        <DisciplineForm
          onSubmit={onSubmit}
          onCancel={onCancel}
          initialState={discipline}
        />
      </Layout>
    </div>
  );
}
