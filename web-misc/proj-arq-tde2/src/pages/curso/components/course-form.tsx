import {
  Button,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Stack,
} from "@chakra-ui/react";
import { useFormState } from "../../../hooks/form-state";
import { type Curso } from "..";

type Props = {
  onSubmit: (data: Curso) => Promise<void>;
  onCancel: () => void;
  initialState: Curso;
};

export function CourseForm({ onSubmit, onCancel, initialState }: Props) {
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
        <FormLabel>ID Universidade</FormLabel>
        <Input
          type="number"
          value={getValue("universidade_id")}
          onChange={(ev) =>
            setValue("universidade_id", ev.target.valueAsNumber)
          }
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
