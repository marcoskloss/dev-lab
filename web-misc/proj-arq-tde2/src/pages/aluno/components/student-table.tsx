import {
  Button,
  HStack,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { type Aluno } from "..";
import { Link } from "react-router-dom";

type Props = {
  studentList: Aluno[];
  onDelete: (student: Aluno) => Promise<void>;
};

const tableHead = ["Nome", "ID Curso", "Ações"];

export function StudentTable({ studentList, onDelete }: Props) {
  const isEmptyTable = studentList.length === 0;

  return (
    <TableContainer>
      <Table variant="simple">
        <TableCaption>
          {isEmptyTable
            ? "Nenhum aluno cadastrado"
            : "Lista de alunos cadastrados"}
        </TableCaption>

        <Thead>
          <Tr>
            {tableHead.map((thName) => (
              <Th key={thName}>{thName}</Th>
            ))}
          </Tr>
        </Thead>

        <Tbody>
          {studentList.map((student) => (
            <StudentDataRow
              key={student.id}
              student={student}
              onDelete={onDelete}
            />
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}

type StudentDataRowProps = {
  student: Aluno;
  onDelete: (aluno: Aluno) => void;
};
export const StudentDataRow = ({ student, onDelete }: StudentDataRowProps) => {
  return (
    <Tr>
      <Td>{student.nome}</Td>
      <Td>{student.curso_id}</Td>
      <Td>
        <HStack>
          <Button
            colorScheme="blue"
            as={Link}
            to={`/aluno/atualizar/${student.id}`}
          >
            Editar
          </Button>
          <Button colorScheme="red" onClick={() => onDelete(student)}>
            Excluir
          </Button>
        </HStack>
      </Td>
    </Tr>
  );
};
