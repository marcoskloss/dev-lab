defmodule FizzBuzz do
  def build(file_path) do 
    file_path
    |> File.read()
    |> handle_file()
  end

  defp handle_file({:error, reason}), do: {:error, "could not open file: #{reason}"}

  defp handle_file({:ok, content}) do 
    content
      |> String.split(",")
      |> Enum.map(&convert_and_compute_number/1)
  end

  defp convert_and_compute_number(str_number) do 
    str_number |> String.trim() |> String.to_integer() |> compute_number() 
  end

  defp compute_number(n) when rem(n,5) == 0 and rem(n,3) == 0, do: :fizz_buzz
  defp compute_number(n) when rem(n,3) == 0, do: :fizz
  defp compute_number(n) when rem(n,5) == 0, do: :buzz
  defp compute_number(n), do: n
end
