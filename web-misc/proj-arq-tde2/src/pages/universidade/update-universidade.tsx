import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { Layout } from "../../components/layout.js";
import { type Universidade } from "./index.js";
import { UniversityForm } from "./components/university-form.js";
import {
  getUniversityById,
  updateUniversity,
} from "../../services/universidade.js";

const emptyFormState: Universidade = {
  id: NaN,
  nome: "",
};

export function UpdateUniversidade() {
  const navigate = useNavigate();
  const { universityId } = useParams();

  const [university, setUniversity] = useState(emptyFormState);

  const onSubmit = async (data: Universidade) => {
    await updateUniversity(data);
    window.alert("Universidade editada com sucesso");
    navigate("/universidade");
  };

  const onCancel = () => navigate("/universidade");

  useEffect(() => {
    getUniversityById(Number(universityId)).then(setUniversity);
  }, [universityId]);

  return (
    <div>
      <Layout title="Atualizar Aluno">
        <UniversityForm
          onSubmit={onSubmit}
          onCancel={onCancel}
          initialState={university}
        />
      </Layout>
    </div>
  );
}
