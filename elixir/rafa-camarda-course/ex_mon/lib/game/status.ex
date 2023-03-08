defmodule ExMon.Game.Status do
  alias ExMon.Game

  def print_round_message() do
    %{computer: computer, player: player, turn: turn} = Game.info()
    IO.puts("----- Round status -----")
    IO.puts("Next to move: #{turn}")
    IO.puts("Computer")
    IO.puts("    Name: #{computer.name}")
    IO.puts("    Life: #{computer.life}\n")

    IO.puts("Player")
    IO.puts("    Name: #{player.name}")
    IO.puts("    Life: #{player.life}\n")
  end

  def print_wrong_move_message(move) do 
    IO.puts("----- Invalid move: #{move} -----")
  end
end
