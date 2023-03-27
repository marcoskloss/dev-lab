defmodule ExMon.GameTest do
  use ExUnit.Case

  alias ExMon.{Game, Player}

  describe "start/2" do
    test "starts the game state" do
      player = Player.new("John Doe", :chute, :soco, :cura)
      computer = Player.new("R2D2", :chute, :soco, :cura)

      assert { :ok, _ } = Game.start(computer, player)
    end
  end

  describe "info/0" do
    test "returns the current game state" do
      player = Player.new("John Doe", :chute, :soco, :cura)
      computer = Player.new("R2D2", :chute, :soco, :cura)
      Game.start(computer, player)

      expected_response = %{
        computer: computer,
        player: player,
        turn: :player,
        status: :started,
      }

      assert expected_response == Game.info()
    end
  end

  describe "update/1" do
    test "returns the updated game state" do
      player = Player.new("John Doe", :chute, :soco, :cura)
      computer = Player.new("R2D2", :chute, :soco, :cura)
      Game.start(computer, player)

      state = %{
        computer: computer,
        player: player,
        turn: :player,
        status: :started,
      }

      assert state == Game.info()

      updated_player = Map.put(player, :life, 80)
      new_state = state
        |> Map.put(:player, updated_player)

      Game.update(new_state)

      expected_response = new_state
        |> Map.put(:turn, :computer)
        |> Map.put(:status, :continue)

      assert expected_response == Game.info()
    end
  end

  describe "player/0" do
    test "returns the player" do
      player = Player.new("John Doe", :chute, :soco, :cura)
      computer = Player.new("R2D2", :chute, :soco, :cura)
      Game.start(computer, player)

      assert player == Game.player()
    end
  end

  describe "computer/0" do
    test "returns the computer" do
      player = Player.new("John Doe", :chute, :soco, :cura)
      computer = Player.new("R2D2", :chute, :soco, :cura)
      Game.start(computer, player)

      assert computer == Game.computer()
    end
  end

  describe "turn/0" do
    test "returns the player turn" do
      player = Player.new("John Doe", :chute, :soco, :cura)
      computer = Player.new("R2D2", :chute, :soco, :cura)
      Game.start(computer, player)

      assert :player == Game.turn()
    end
  end

  describe "fetch_player/1" do
    test "returns the :computer" do
      player = Player.new("John Doe", :chute, :soco, :cura)
      computer = Player.new("R2D2", :chute, :soco, :cura)
      Game.start(computer, player)

      assert computer == Game.fetch_player(:computer)
    end

    test "returns the :player" do
      player = Player.new("John Doe", :chute, :soco, :cura)
      computer = Player.new("R2D2", :chute, :soco, :cura)
      Game.start(computer, player)

      assert player == Game.fetch_player(:player)
    end
  end
end
