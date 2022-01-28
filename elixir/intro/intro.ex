IO.puts("Hello world!")

x = 10 # number
x = x / 2 
IO.puts(x)

y = 10
y_div  = div y , 2 # or div(y, 2) = y / 2
IO.puts(y_div)

IO.puts(rem(31, 2)) # remainder op

## atoms (named constants)

:atom
IO.puts(:atom)

:"atom with space"
IO.puts(:"atom with space")

AModule # declare a module
IO.puts(AModule)
IO.puts(AModule == Elixir.AModule)

IO.puts(IO)
alias IO, as: InputOutput #rename a module
InputOutput.puts "Aloha"



