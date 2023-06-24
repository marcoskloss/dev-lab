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
import { type Matricula } from "..";
import { Link } from "react-router-dom";

type Props = {
  enrollmentList: Matricula[];
  onDelete: (matricula: Matricula) => Promise<void>;
};

const tableHead = ["ID Aluno", "ID Disciplina", "Semestre", "Ações"];

export function EnrollmentTable({ enrollmentList, onDelete }: Props) {
  const isEmptyTable = enrollmentList.length === 0;

  return (
    <TableContainer>
      <Table variant="simple">
        <TableCaption>
          {isEmptyTable
            ? "Nenhuma matrícula cadastrada"
            : "Lista de matrículas cadastrados"}
        </TableCaption>

        <Thead>
          <Tr>
            {tableHead.map((thName) => (
              <Th key={thName}>{thName}</Th>
            ))}
          </Tr>
        </Thead>

        <Tbody>
          {enrollmentList.map((enrollment) => (
            <EnrollmentDataRow
              key={enrollment.id}
              enrollment={enrollment}
              onDelete={onDelete}
            />
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}

type EnrollmentDataRowProps = {
  enrollment: Matricula;
  onDelete: (matricula: Matricula) => void;
};

const EnrollmentDataRow = ({
  enrollment,
  onDelete,
}: EnrollmentDataRowProps) => {
  return (
    <Tr>
      <Td>{enrollment.aluno_id}</Td>
      <Td>{enrollment.disciplina_id}</Td>
      <Td>{enrollment.semestre}</Td>
      <Td>
        <HStack>
          <Button
            colorScheme="blue"
            as={Link}
            to={`/matricula/atualizar/${enrollment.id}`}
          >
            Editar
          </Button>
          <Button colorScheme="red" onClick={() => onDelete(enrollment)}>
            Excluir
          </Button>
        </HStack>
      </Td>
    </Tr>
  );
};
