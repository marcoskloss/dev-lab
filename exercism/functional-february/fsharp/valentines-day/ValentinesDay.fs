module ValentinesDay

type Approval = Yes | No | Maybe

type Cuisine = Korean | Turkish

type Genre = Crime | Horror | Romance | Thriller

type Activity =
    | BoardGame
    | Chill
    | Movie of Genre
    | Restaurant of Cuisine
    | Walk of kilometers: int

let rateActivity (activity: Activity): Approval =
    match activity with
    | BoardGame -> No
    | Chill -> No
    | Movie m  -> 
        match m with
        | Romance -> Yes
        | _ -> No
    | Restaurant r ->
        match r with
        | Korean -> Yes
        | Turkish -> Maybe
    | Walk dist ->
        match dist with
        | dist when dist < 3 -> Yes
        | dist when dist < 5 -> Maybe
        | _ -> No

// https://exercism.org/tracks/fsharp/exercises/valentines-day/solutions/rdeneau 
let rateActivity_other_aproach (activity: Activity): Approval =
    match activity with
    | BoardGame -> No
    | Chill -> No
    | Movie Romance -> No
    | Movie _ -> No
    | Restaurant Korean -> Yes
    | Restaurant Turkish -> Maybe
    | Walk km when km < 3 -> Yes
    | Walk km when km < 5 -> Maybe
    | Walk _ -> No
