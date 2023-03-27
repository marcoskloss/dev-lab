defmodule ExMon.Game.Actions do
  alias ExMon.Game
  alias ExMon.Game.Actions.{Attack, Heal}

  def attack(move) do
    case Game.turn() do
      :player -> Attack.attack_oponent(:computer, move) 
      :computer -> Attack.attack_oponent(:player, move) 
    end

    status = Game.info() |> Map.get(:status)
    verify_end_game(status)
  end

  def heal() do
    Heal.heal_life(Game.turn())
  end

  def fetch_moves(move) do
    Game.player()
    |> Map.get(:moves)
    |> find_move(move)
  end

  defp find_move(moves, move) do
    moves
    |> Enum.find_value({:error, move}, fn {key, value} -> 
      if value == move, do: {:ok, key} 
    end)
  end

  defp verify_end_game(:end_game), do: System.stop(0)
  defp verify_end_game(_any), do: :ok
end
