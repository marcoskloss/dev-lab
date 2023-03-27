defmodule ExMon.Game do
  use Agent
  alias ExMon.Player

  def start(computer, player) do
    initial_state = %{computer: computer, player: player, turn: :player, status: :started}
    Agent.start_link(fn -> initial_state end, name: __MODULE__)
  end

  def info do
    ## Agent.get(__MODULE__, fn state -> state end)
    Agent.get(__MODULE__, & &1)
  end

  def update(new_state) do
    Agent.update(__MODULE__, fn _prev_state -> update_game_status(new_state) end)
  end

  def update_player_life(player, life) do
    updated_player = player |> fetch_player() |> Map.put(:life, life)
    new_state = info() |> Map.put(player, updated_player)
    update(new_state)
  end

  def player, do: Map.get(info(), :player)
  def computer, do: Map.get(info(), :computer)
  def turn, do: Map.get(info(), :turn)
  def fetch_player(player), do: Map.get(info(), player)

  defp update_game_status(
         %{player: %Player{life: player_life}, computer: %Player{life: computer_life}} = state
       )
      when player_life <= 0 or computer_life <= 0,
      do: Map.put(state, :status, :game_over)

  defp update_game_status(state) do
    state |> Map.put(:status, :continue) |> update_turn()
  end

  defp update_turn(%{turn: :player} = state), do: Map.put(state, :turn, :computer)
  defp update_turn(%{turn: :computer} = state), do: Map.put(state, :turn, :player)
end
