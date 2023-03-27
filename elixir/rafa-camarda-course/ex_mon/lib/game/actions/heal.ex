defmodule ExMon.Game.Actions.Heal do
  alias ExMon.Game
  alias ExMon.Game.Status

  @heal_power 18..25

  def heal_life(player) do
    heal = calculate_heal()
    life = player
      |> Game.fetch_player()
      |> Map.get(:life)
      |> calculate_total_life(heal)
    Game.update_player_life(player, life)
    Status.print_move_message(player, :heal, heal)
  end

  defp calculate_heal(), do: Enum.random(@heal_power)

  defp calculate_total_life(life, heal) do
    updated_life = life + heal
    min(updated_life, 100)
  end
end
