module Acronym

open System.Text.RegularExpressions
open System

let abbreviate (phrase: string) =
    let rx = Regex(@"[^a-z]")
    phrase
        .ToLower()
        .Replace("-", " ")
        .Split(" ", StringSplitOptions.RemoveEmptyEntries)
    |> Array.map(fun word -> rx.Replace(word, ""))
    |> Array.map (fun word -> word.[0].ToString().ToUpper())
    |> String.concat "" 

// this is tricky
// https://exercism.org/tracks/fsharp/exercises/acronym/solutions/ExercismGhost
let abbreviate_other_aproach (phrase:string) =
    phrase.ToLower()
    |> Globalization.CultureInfo.CurrentCulture.TextInfo.ToTitleCase
    |> String.filter Char.IsUpper
    