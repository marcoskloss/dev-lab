import { Button, FormControl, FormLabel, Input, Stack } from "@chakra-ui/react";
import { Header } from "../components/header";
import { Layout } from "../components/layout";
import { FormEvent, useState } from "react";

export function Universidade() {
  const [nome, setNome] = useState("");

  const onSubmit = (ev: FormEvent) => {
    ev.preventDefault();
    alert(nome);
  };

  return (
    <div>
      <Header title="Cadastro de Universidade" />
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
          <Button type="submit" colorScheme="linkedin" w={100}>
            Salvar
          </Button>
        </Stack>
      </Layout>
    </div>
  );
}
