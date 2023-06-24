import {
  Button,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Stack,
} from "@chakra-ui/react";
import { useFormState } from "../../../hooks/form-state";
import { type Aluno } from "..";

type Props = {
  onSubmit: (data: Aluno) => Promise<void>;
  onCancel: () => void;
  initialState: Aluno;
};

export function StudentForm({ onSubmit, onCancel, initialState }: Props) {
  const { getValue, setValue, submitHandler } = useFormState({
    initialState,
    onSubmit,
  });

  return (
    <Stack gap={4} as="form" onSubmit={submitHandler}>
      <FormControl>
        <FormLabel>Nome</FormLabel>
        <Input
          type="text"
          value={getValue("nome")}
          onChange={(ev) => setValue("nome", ev.target.value)}
        />
      </FormControl>

      <FormControl>
        <FormLabel>ID Curso</FormLabel>
        <Input
          type="number"
          value={getValue("curso_id")}
          onChange={(ev) => setValue("curso_id", ev.target.valueAsNumber)}
        />
      </FormControl>

      <HStack>
        <Button type="button" colorScheme="gray" onClick={onCancel}>
          Cancelar
        </Button>
        <Button type="submit" colorScheme="blue">
          Salvar
        </Button>
      </HStack>
    </Stack>
  );
}
