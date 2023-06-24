import { useNavigate } from "react-router-dom";

import { Layout } from "../../components/layout";
import { type Matricula } from ".";
import { EnrollmentForm } from "./components/enrollment-form";
import { saveEnrollment } from "../../services/matricula";

const formEmptyState: Matricula = {
  id: 0,
  aluno_id: NaN,
  disciplina_id: NaN,
  semestre: NaN,
};

export function CreateMatricula() {
  const navigate = useNavigate();

  const onSubmit = async (enrollment: Matricula) => {
    await saveEnrollment({
      aluno_id: enrollment.aluno_id,
      disciplina_id: enrollment.disciplina_id,
      semestre: enrollment.semestre,
    });
    window.alert("Matrícula criada com sucesso");
    navigate("/matricula");
  };

  const onCancel = () => navigate("/matricula");

  return (
    <div>
      <Layout title="Cadastro de Matrícula">
        <EnrollmentForm
          initialState={formEmptyState}
          onCancel={onCancel}
          onSubmit={onSubmit}
        />
      </Layout>
    </div>
  );
}
