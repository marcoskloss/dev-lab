defmodule FizzBuzzTest do
  use ExUnit.Case

  describe "build/1" do 
    test "given a valid file, returns the converted list" do 
      expected = [1,2,:fizz,4,:buzz,:fizz,:fizz_buzz,17,:fizz,:buzz,:fizz_buzz,:fizz_buzz,:fizz,:fizz,71]
      assert FizzBuzz.build("input.txt") == expected
    end
  end
end
