import { FormEvent, useEffect, useState } from "react";

type Props<T> = {
  initialState: T;
  onSubmit: (data: T) => Promise<void>;
};

export function useFormState<T>({ initialState, onSubmit }: Props<T>) {
  const [state, setState] = useState<T>(initialState);
  const [isLoading, setIsLoading] = useState(false);

  const getValues = () => state;

  const setValue = (field: keyof T, value: T[keyof T]) =>
    setState({ ...state, [field]: value });

  const getValue = (field: keyof T) => state[field];

  const submitHandler = async (ev: FormEvent) => {
    setIsLoading(true);
    ev.preventDefault();
    onSubmit(getValues()).finally(() => setIsLoading(false));
  };

  useEffect(() => {
    setState(initialState);
  }, [initialState]);

  return {
    getValues,
    getValue,
    setValue,
    submitHandler,
    isLoading,
  };
}
