module KindergartenGarden

type Plant = Grass |  Clover | Radishes | Violets

let studentPosition (student: string) =
    let n = student.ToLower().ToCharArray() |> Seq.head |> int
    (n - 97) * 2

let plants (diagram: string) (student: string) =
    let idx = studentPosition student
    let rows = diagram.Split('\n')
    let fstRow = rows.[0].Substring(idx, 2)
    let sndRow = rows.[1].Substring(idx, 2)

    let studentPlants = fstRow + sndRow
    studentPlants.ToCharArray()
    |> Array.map (fun c ->
        match c with
            | 'R' -> Radishes
            | 'C' -> Clover
            | 'G' -> Grass
            | _   -> Violets 
    )
    |> List.ofArray

let plants_otherAproach (diagram: string) (student: string) = 
    let studentIdx = (int student.[0] - int 'A') * 2
    diagram.Split('\n')
        |> List.ofSeq
        |> List.map(fun row -> row.Substring(studentIdx, 2))
        |> List.reduce (+)
        |> List.ofSeq
        |> List.map(fun c -> 
            match c with
                | 'R' -> Radishes
                | 'C' -> Clover
                | 'G' -> Grass
                | _   -> Violets 
        )