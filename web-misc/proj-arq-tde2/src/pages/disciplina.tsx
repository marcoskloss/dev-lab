import { FormEvent } from "react";

import { useFormState } from "../hooks/form-state";
import { Layout } from "../components/layout";
import { Button, FormControl, FormLabel, Input, Stack } from "@chakra-ui/react";

const formInitialState = {
  nome: "",
  curso_id: "",
};

export function Disciplina() {
  const { getValue, setValue, getValues } = useFormState({
    initialState: formInitialState,
  });

  const onSubmit = (ev: FormEvent) => {
    ev.preventDefault();
    console.log(getValues());
  };

  return (
    <div>
      <Layout title="Cadastro de disciplina">
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
            <FormLabel>ID Curso</FormLabel>
            <Input
              type="number"
              value={getValue("curso_id")}
              onChange={(ev) => setValue("curso_id", ev.target.value)}
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
