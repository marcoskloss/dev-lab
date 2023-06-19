import { FormEvent } from "react";

import { useFormState } from "../hooks/form-state";
import { Layout } from "../components/layout";
import { Button, FormControl, FormLabel, Input, Stack } from "@chakra-ui/react";

const formInitialState = {
  aluno_id: "",
  disciplina_id: "",
  semestre: "",
};

export function Matricula() {
  const { getValue, setValue, getValues } = useFormState({
    initialState: formInitialState,
  });

  const onSubmit = (ev: FormEvent) => {
    ev.preventDefault();
    console.log(getValues());
  };

  return (
    <div>
      <Layout title="Matricular aluno">
        <Stack gap={4} as="form" onSubmit={onSubmit}>
          <FormControl>
            <FormLabel>ID Aluno</FormLabel>
            <Input
              type="number"
              value={getValue("aluno_id")}
              onChange={(ev) => setValue("aluno_id", ev.target.value)}
            />
          </FormControl>

          <FormControl>
            <FormLabel>ID Disciplina</FormLabel>
            <Input
              type="number"
              value={getValue("disciplina_id")}
              onChange={(ev) => setValue("disciplina_id", ev.target.value)}
            />
          </FormControl>

          <FormControl>
            <FormLabel>Semestre</FormLabel>
            <Input
              type="number"
              value={getValue("semestre")}
              onChange={(ev) => setValue("semestre", ev.target.value)}
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
