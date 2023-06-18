import { FormEvent, useState } from "react";
import { Button, FormControl, FormLabel, Input, Stack } from "@chakra-ui/react";

import { Header } from "../components/header";
import { Layout } from "../components/layout";

export function Curso() {
  const [nome, setNome] = useState("");
  const [universidade, setUniversidade] = useState("");

  const onSubmit = (ev: FormEvent) => {
    ev.preventDefault();
    console.log({ nome, universidade });
  };

  return (
    <div>
      <Header title="Cadastro de Curso" />
      <Layout>
        <Stack gap={4} as="form" onSubmit={onSubmit}>
          <FormControl>
            <FormLabel>Nome</FormLabel>
            <Input
              type="text"
              value={nome}
              onChange={(ev) => setNome(ev.target.value)}
            />
          </FormControl>
          <FormControl>
            <FormLabel>ID Universidade</FormLabel>
            <Input
              type="number"
              value={universidade}
              onChange={(ev) => setUniversidade(ev.target.value)}
            />
          </FormControl>
          <Button type="submit" colorScheme="linkedin" w={100}>
            Salvar
          </Button>
        </Stack>
      </Layout>
    </div>
  );
}
