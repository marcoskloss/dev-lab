import { ChangeEvent, ReactNode } from "react";
import { Heading, HStack, Select } from "@chakra-ui/react";
import { useDbState } from "../hooks/use-db-state";

type Props = {
  title: string;
  left?: ReactNode;
  right?: ReactNode;
};

export function Header({ title, left = null, right = null }: Props) {
  const { changeDB, database } = useDbState();

  const onChangeDB = (ev: ChangeEvent<HTMLSelectElement>) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const newValue: any = ev.target.value;
    changeDB(newValue);
  };

  return (
    <HStack as="header" pb={5}>
      {left}
      <Heading size="md">TDE2 - {title}</Heading>
      <HStack>
        <label htmlFor="select">Selecione o banco</label>
        <Select id="select" w={150} value={database} onChange={onChangeDB}>
          <option value="postgresql">PostgreSLQ</option>
          <option value="mysql">MySQL</option>
        </Select>
      </HStack>
      {right}
    </HStack>
  );
}
