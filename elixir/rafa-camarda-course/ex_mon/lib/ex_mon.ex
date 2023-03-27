defmodule ExMon do
  alias ExMon.{Game, Player}
  alias ExMon.Game.{Actions, Status}

  @computer_moves [:move_avg, :move_rnd, :move_heal]
  @computer_name "R2D2"

  def create_player(name, move_rnd, move_avg, move_heal) do
    Player.new(name, move_rnd, move_avg, move_heal)
  end

  def start_game(player) do
    computer = create_player(@computer_name, :kick, :punch, :heal)
    Game.start(computer, player)

    Status.print_round_message(Game.info())
  end

  def make_move(move) do
    Actions.fetch_moves(move) |> do_move()
    computer_move(Game.info())
  end

  defp do_move({:error, move}), do: Status.print_wrong_move_message(move)
  defp do_move({:ok, move}) do 
    case move do 
      :move_heal -> Actions.heal()
      attack_move -> Actions.attack(attack_move)
    end
    Status.print_round_message(Game.info())
  end

  defp computer_move(%{turn: :computer, status: :continue}) do
    move = Enum.random(@computer_moves)
    do_move({:ok, move})
  end

  defp computer_move(_any), do: :ok
end
