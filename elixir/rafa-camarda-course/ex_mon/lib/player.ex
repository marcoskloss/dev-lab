defmodule ExMon.Player do
  @required_keys [:life, :name, :moves]
  @max_life 100

  @enforce_keys @required_keys
  defstruct @required_keys

  def new(name, move_rnd, move_avg, move_heal) do
    %ExMon.Player{
      life: @max_life,
      name: name,
      moves: %{
        move_avg: move_avg,
        move_rnd: move_rnd,
        move_heal: move_heal
      }
    }
  end
end
