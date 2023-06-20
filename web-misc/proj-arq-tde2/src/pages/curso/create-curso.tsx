import { FormEvent } from "react";
import { Button, FormControl, FormLabel, Input, Stack } from "@chakra-ui/react";

import { Layout } from "../../components/layout";
import { useFormState } from "../../hooks/form-state";

const formInitialState = {
  nome: "",
  universidade_id: "",
};

export function CreateCurso() {
  const { getValue, setValue, getValues } = useFormState({
    initialState: formInitialState,
  });

  const onSubmit = (ev: FormEvent) => {
    ev.preventDefault();
    console.log(getValues());
  };

  return (
    <div>
      <Layout title="Cadastro de Curso">
        <Stack gap={4} as="form" onSubmit={onSubmit}>
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
              onChange={(ev) => setValue("universidade_id", ev.target.value)}
            />
          </FormControl>
          <Button type="submit" colorScheme="blue" w={100}>
            Salvar
          </Button>
        </Stack>
      </Layout>
    </div>
  );
}

