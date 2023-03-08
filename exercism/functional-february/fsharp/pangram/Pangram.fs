module Pangram
open System.Text.RegularExpressions
open System

let isPangram (input: string): bool = 
    let text = Regex.Replace(input.ToLower(), "[^a-z]",  "")
    text.ToCharArray() 
    |> Set.ofArray
    |> Set.count = 26

let isPangram_other_aproach (input: string): bool =
    input.ToLower()
    |> Seq.filter Char.IsLetter
    |> Seq.distinct
    |> Seq.length = 26

let isPangram_other_aproach2 (input: string): bool =
    input.ToLower()
    |> Set
    |> Set.isSubset (Set ['a'..'z'])

// https://exercism.org/tracks/fsharp/exercises/pangram/solutions/mellson
let isPangram_mellson_aproach (input: string): bool =
    set ['a'..'z'] - set (input.ToLower()) |> Set.isEmpty

// set ['a'...'z'] = Set.ofList ['a'..'z']
// setA - setB = Set.difference setA setB