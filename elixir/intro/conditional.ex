## https://elixir-lang.org/getting-started/case-cond-and-if.html

# true, false, nil

if 10 > 5 do
  IO.puts("10 > 5")
end

# or not and
if (false or true) do 
  IO.puts("OR op")
end

# short circuit
## || (or) && (and) ! (not)
if 0 do
  IO.puts("zero is truthy")
else 
  IO.puts("zero is falsy")
end

if_return = if true do
  "foo"
end
IO.puts(if_return)

