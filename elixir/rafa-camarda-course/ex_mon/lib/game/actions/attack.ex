defmodule ExMon.Game.Actions.Attack do
  alias ExMon.Game
  alias ExMon.Game.Status

  @move_avg_power 18..25
  @move_rnd_power 10..35

  def attack_oponent(opponent, move) do
    damage = calculate_power(move)
    life = opponent
      |> Game.fetch_player()
      |> Map.get(:life)
      |> calculate_total_life(damage)
    Game.update_player_life(opponent, life)
    Status.print_move_message(opponent, :attack, damage)
  end

  defp calculate_power(:move_avg), do: Enum.random(@move_avg_power)
  defp calculate_power(:move_rnd), do: Enum.random(@move_rnd_power)

  defp calculate_total_life(life, damage) when life - damage < 0, do: 0
  defp calculate_total_life(life, damage), do: life - damage
end
