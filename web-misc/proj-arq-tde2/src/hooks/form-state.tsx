import { useState } from "react";

type Props<T> = {
  initialState: T;
};

export function useFormState<T>({ initialState }: Props<T>) {
  const [state, setState] = useState<T>(initialState);

  const getValues = () => state;

  const setValue = (field: keyof T, value: T[keyof T]) =>
    setState({ ...state, [field]: value });

  const getValue = (field: keyof T) => state[field];

  return {
    getValues,
    getValue,
    setValue,
  };
}
