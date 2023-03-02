module TwoFer

// Pattern matching: https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/pattern-matching

let twoFer (input: string option): string = 
    match input with
        | Some name -> $"One for {name}, one for me."
        | None -> "One for you, one for me."

// we don't repeat any string building logic (DRY)

let twoFer_other_aproach_1 (input: string option): string =
    let name = Option.defaultValue "you" input
    $"One for {name}, one for me."

let twoFer_other_aproach_2 (input: string option): string =
    let name = 
        match input with
            | Some name -> name
            | None -> "you"
    $"One for {name}, one for me."
  