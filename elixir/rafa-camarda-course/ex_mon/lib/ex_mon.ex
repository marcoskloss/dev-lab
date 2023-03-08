defmodule ExMon do
  alias ExMon.{Player, Game}
  alias ExMon.Game.{Status, Actions}

  @computer_name "R2D2"

  def create_player(name, move_rnd, move_avg, move_heal) do
    Player.new(name, move_rnd, move_avg, move_heal)
  end

  def start_game(player) do
    computer = create_player(@computer_name, :kick, :punch, :heal)
    Game.start(computer, player)

    Status.print_round_message()
  end

  def make_move(move) do
    Actions.fetch_moves(move)
    |> do_move()
  end

  defp do_move({:error, move}), do: Status.print_wrong_move_message(move)

  defp do_move({:ok, move}) do 
    case move do 
      :move_heal -> "do_heal_move()"
      move -> "do_attack_move()"
    end
  end
end
