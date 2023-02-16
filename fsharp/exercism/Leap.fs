module Leap

let leapYear (year: int): bool =
    year % 4 = 0 && (year % 100 <> 0 || year % 400 = 0)

let leapYear_otherCoolSolution (year: int): bool =
    let divisibleBy x = (year % x) = 0
    divisibleBy 4 && (not (divisibleBy 100) || divisibleBy 400)