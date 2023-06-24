import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { Layout } from "../../components/layout";
import { type Matricula } from ".";
import { EnrollmentForm } from "./components/enrollment-form";
import { getEnrollmentById, updateEnrollment } from "../../services/matricula";

const emptyFormState: Matricula = {
  id: 0,
  aluno_id: NaN,
  disciplina_id: NaN,
  semestre: NaN,
};

export function UpdateMatricula() {
  const navigate = useNavigate();
  const { enrollmentId } = useParams();

  const [enrollment, setEnrollment] = useState(emptyFormState);

  const onSubmit = async (enrollment: Matricula) => {
    await updateEnrollment(enrollment);
    window.alert("Matrícula editada com sucesso");
    navigate("/matricula");
  };

  const onCancel = () => navigate("/matricula");

  useEffect(() => {
    getEnrollmentById(Number(enrollmentId)).then(setEnrollment);
  }, [enrollmentId]);

  return (
    <div>
      <Layout title="Atualizar Curso">
        <EnrollmentForm
          onSubmit={onSubmit}
          onCancel={onCancel}
          initialState={enrollment}
        />
      </Layout>
    </div>
  );
}
