import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { Layout } from "../../components/layout.js";
import { type Aluno } from "./index.js";
import { StudentForm } from "./components/student-form.js";
import { getStudentById, updateStudent } from "../../services/aluno.js";

const emptyFormState: Aluno = {
  id: 0,
  nome: "",
  curso_id: 0,
};

export function UpdateAluno() {
  const navigate = useNavigate();
  const { studentId } = useParams();

  const [student, setStudent] = useState(emptyFormState);

  const onSubmit = async (student: Aluno) => {
    await updateStudent(student);
    window.alert("Aluno editado com sucesso");
    navigate("/aluno");
  };

  const onCancel = () => navigate("/aluno");

  useEffect(() => {
    getStudentById(Number(studentId)).then(setStudent);
  }, [studentId]);

  return (
    <div>
      <Layout title="Atualizar Aluno">
        <StudentForm
          onSubmit={onSubmit}
          onCancel={onCancel}
          initialState={student}
        />
      </Layout>
    </div>
  );
}
