const FIVE_MB: u32 = 5 * 1024 * 1024;

fn main() {
    /* ===== VARIABLES =====  */

    let x = 42;
    println!("x = {x}");
    // x = 11; variables are immutable by default
    // println!("x = {x}");

    let mut y = 123;
    println!("y = {y}");
    y = 321;
    println!("y = {y}");

    let k = 5;
    let k = k + 1;
    {
        let k = k * 2;
        println!("The value of k in the inner scope is: {k}");
    } // when the scope is over the inner shadowing ends
    println!("The value of k is: {k}");

    // will work
    let spaces = "   ";
    let spaces = spaces.len();

    // won't work
    // let mut spaces = "   ";
    // spaces = spaces.len();

    /* ===== DATA TYPES =====  */
    // integers: i8 - i128; unsigned: u8 - u128; default: u32
    // floats: f32 and f64; default: f64

    // Compound Types (tuples, arrays)
    // tuples have a fixed length and could group together values with different types
    let tup: (f32, i32, char) = (42.0, 11, 'M');
    let tup2 = (120, 'K', 33.33);

    let (x, y, z) = tup2;
    let second_value = tup2.1;
    println!("x={}, y={}, z={}", x, y, z);
    println!("2nd value = {second_value}");
    
    // arrays
    // every element of an array must have the same type
    // arrays have a fixed length
    let arr = [1,2,3,4,5];
    let arr2 = [2; 4]; // [2, 2, 2, 2]
    let size = 5;
    let arr3 = [7, size];
}
