import { useNavigate } from "react-router-dom";

import { Layout } from "../../components/layout";
import { type Aluno } from ".";
import { StudentForm } from "./components/student-form";
import { saveStudent } from "../../services/aluno";

const formEmptyState: Aluno = {
  id: NaN,
  nome: "",
  curso_id: NaN,
};

export function CreateAluno() {
  const navigate = useNavigate();

  const onSubmit = async (student: Aluno) => {
    await saveStudent({
      nome: student.nome,
      curso_id: student.curso_id,
    });
    window.alert("Aluno criado com sucesso");
    navigate("/aluno");
  };

  const onCancel = () => navigate("/aluno");

  return (
    <div>
      <Layout title="Cadastro de Aluno">
        <StudentForm
          initialState={formEmptyState}
          onCancel={onCancel}
          onSubmit={onSubmit}
        />
      </Layout>
    </div>
  );
}
