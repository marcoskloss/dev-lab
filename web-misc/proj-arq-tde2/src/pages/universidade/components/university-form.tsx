import {
  Button,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Stack,
} from "@chakra-ui/react";
import { useFormState } from "../../../hooks/form-state";
import { type Universidade } from "..";

type Props = {
  onSubmit: (data: Universidade) => Promise<void>;
  onCancel: () => void;
  initialState: Universidade;
};

export function UniversityForm({ onSubmit, onCancel, initialState }: Props) {
  const { getValue, setValue, submitHandler, isLoading } = useFormState({
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

      <HStack>
        <Button type="button" colorScheme="gray" onClick={onCancel}>
          Cancelar
        </Button>
        <Button type="submit" colorScheme="blue">
          {isLoading ? "Enviando..." : "Salvar"}
        </Button>
      </HStack>
    </Stack>
  );
}
