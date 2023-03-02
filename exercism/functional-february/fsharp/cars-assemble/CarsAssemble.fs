module CarsAssemble

let successRate (speed: int): float =
    match speed with
        | 0 -> 0.0
        | x when x >= 1 && x <= 4 -> 1.0
        | x when x >= 5 && x <= 8 -> 0.9
        | 9 -> 0.8
        | _ -> 0.77

let carsBySpeed (speed: int): int = 221 * speed

let productionRatePerHour (speed: int): float = 
    float (carsBySpeed speed) * successRate speed

let workingItemsPerMinute (speed: int): int =
    int (productionRatePerHour (speed) / 60.0)
