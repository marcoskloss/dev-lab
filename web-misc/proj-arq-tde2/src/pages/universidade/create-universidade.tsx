import { useNavigate } from "react-router-dom";

import { Layout } from "../../components/layout";
import { type Universidade } from ".";
import { UniversityForm } from "./components/university-form";
import { saveUniversity } from "../../services/universidade";

const formEmptyState: Universidade = {
  id: NaN,
  nome: "",
};

export function CreateUniversidade() {
  const navigate = useNavigate();

  const onSubmit = async (data: Universidade) => {
    await saveUniversity({ nome: data.nome });
    window.alert("Universidade criada com sucesso");
    navigate("/universidade");
  };

  const onCancel = () => navigate("/universidade");

  return (
    <div>
      <Layout title="Cadastro de Universidade">
        <UniversityForm
          initialState={formEmptyState}
          onCancel={onCancel}
          onSubmit={onSubmit}
        />
      </Layout>
    </div>
  );
}
