module Isogram
open System

let isIsogram (str: string): bool = 
    let chars = str.ToLower() |> Seq.filter Char.IsLetter
    chars
    |> Seq.distinct
    |> Seq.length = Seq.length chars

// https://exercism.org/tracks/fsharp/exercises/isogram/solutions/chrstnbrn
let isIsogram_other_aproach (str: string): bool =
    str |> Seq.filter Char.IsLetter
        |> Seq.countBy Char.ToLower
        |> Seq.forall (fun count -> snd count = 1)
