module Anagram
open System

let findAnagrams (sources: string list) (target: string): string list =
    let sort (s: string) = s.ToLower() |> Seq.sort |> String.Concat
    let toLower (str: string): string = str.ToLower()
    let strCompareIgnoreCase (a: string) (b: string): bool = 
        a.ToLower().Equals(b.ToLower())

    let sortedTarget = sort target

    sources
    |> List.distinctBy toLower
    |> List.filter (fun candidate -> not (strCompareIgnoreCase candidate target))
    |> List.filter (fun candidate -> strCompareIgnoreCase sortedTarget (sort candidate))

let findAnagrams_other_aproach (sources: string list) (target: string): string list = 
    let sort (s: string) = s.ToLower() |> Seq.sort |> Seq.toList
    let sortedTarget = sort target
    
    sources
    |> List.filter (fun x -> x.ToLower() <> target.ToLower()) 
    |> List.filter (fun x -> sort x = sortedTarget)

