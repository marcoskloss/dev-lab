import { Button, HStack, Td, Tr } from "@chakra-ui/react";
import { Curso } from "..";

type CursoDataRowProps = {
  curso: Curso;
  onDelete: (curso: Curso) => void;
  onUpdate: (curso: Curso) => void;
};
export const CursoDataRow = ({
  curso,
  onDelete,
  onUpdate,
}: CursoDataRowProps) => {
  const handleDelete = (curso: Curso) => () => onDelete(curso);
  const handleUpdate = (curso: Curso) => () => onUpdate(curso);

  return (
    <Tr>
      <Td>{curso.nome}</Td>
      <Td>{curso.universidade_id}</Td>
      <Td>
        <HStack>
          <Button colorScheme="blue" onClick={handleUpdate(curso)}>
            Editar
          </Button>
          <Button colorScheme="red" onClick={handleDelete(curso)}>
            Excluir
          </Button>
        </HStack>
      </Td>
    </Tr>
  );
};
