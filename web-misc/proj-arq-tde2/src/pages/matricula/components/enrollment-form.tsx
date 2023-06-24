import {
  Button,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Stack,
} from "@chakra-ui/react";
import { useFormState } from "../../../hooks/form-state";
import { type Matricula } from "..";

type Props = {
  onSubmit: (data: Matricula) => Promise<void>;
  onCancel: () => void;
  initialState: Matricula;
};

export function EnrollmentForm({ onSubmit, onCancel, initialState }: Props) {
  const { getValue, setValue, submitHandler } = useFormState({
    initialState,
    onSubmit,
  });

  return (
    <Stack gap={4} as="form" onSubmit={submitHandler}>
      <FormControl>
        <FormLabel>ID Aluno</FormLabel>
        <Input
          type="number"
          value={getValue("aluno_id")}
          onChange={(ev) => setValue("aluno_id", ev.target.valueAsNumber)}
        />
      </FormControl>

      <FormControl>
        <FormLabel>ID Disciplina</FormLabel>
        <Input
          type="number"
          value={getValue("disciplina_id")}
          onChange={(ev) => setValue("disciplina_id", ev.target.valueAsNumber)}
        />
      </FormControl>

      <FormControl>
        <FormLabel>Semestre</FormLabel>
        <Input
          type="number"
          value={getValue("semestre")}
          onChange={(ev) => setValue("semestre", ev.target.valueAsNumber)}
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
