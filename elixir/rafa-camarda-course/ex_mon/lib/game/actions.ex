defmodule ExMon.Game.Actions do
  alias ExMon.Game

  def fetch_moves(move) do
    Game.player()
    |> Map.get(:moves)
    |> find_move(move)
  end

  defp find_move(moves, move) do
    moves
    |> Enum.find_value(
      {:error, move},
      fn {k, v} -> if v == move, do: {:ok, k} end
    )
  end
end
