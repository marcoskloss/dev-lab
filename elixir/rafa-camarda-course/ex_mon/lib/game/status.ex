defmodule ExMon.Game.Status do
  def print_round_message(%{status: :started}) do
    IO.puts("[INFO] The game is started!")
  end

  def print_round_message(%{status: :continue} = state) do
    %{ computer: computer, player: player, turn: turn } = state
    %{name: current_player} = Map.get(state, turn) 

    IO.puts("[INFO] It's #{current_player} turn")
    IO.puts("Computer")
    IO.puts("    Name: #{computer.name}")
    IO.puts("    Life: #{computer.life}")
    IO.puts("Player")
    IO.puts("    Name: #{player.name}")
    IO.puts("    Life: #{player.life}\n")
  end

  def print_round_message(%{status: :game_over} = state) do
    %{player: player, computer: computer} = state
    winner = if player.life >= 0, do: player.name, else: computer.name
    IO.puts("[INFO] The game is over!") 
    IO.puts("[INFO] #{winner} won!")
    IO.puts("[INFO] Player life: #{player.life}, Computer life: #{computer.life}")
  end

  def print_wrong_move_message(move) do 
    IO.puts("----- Invalid move: #{move} -----")
  end

  def print_move_message(:computer, :heal, heal), 
    do: print_heal_message("Computer", heal)

  def print_move_message(:player, :heal, heal), 
    do: print_heal_message("Player", heal)

  def print_move_message(:computer, :attack, damage), 
    do: print_attack_message("Player", "computer", damage)

  def print_move_message(:player, :attack, damage), 
    do: print_attack_message("Computer", "player", damage)

  defp print_attack_message(source, target, damage) do
    IO.puts("[MOVEMENT] #{source} attacked #{target} dealing #{damage} damage")
  end

  defp print_heal_message(player, heal) do
    IO.puts("[MOVEMENT] #{player} healed his life by #{heal}")
  end
end
