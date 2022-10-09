fn main() {
   hello_world();
   double(4);
   sum(2, 6);

   let y = { // this is an expression
        let x = 3;
        x + 1 // without semicolon
    };
    println!("The value of y is: {y}");

    let x = five();
    let y = five_again();
    println!("x = {x}, y = {y}");
}

fn five() -> i32 {
    5
}

fn five_again() -> i32 {
    return 5;
}

fn hello_world() {
    println!("Hello mundo");
}

fn double(n: i32) {
    println!("n * 2 = {}", n * 2);
}

fn sum(a: i32, b: i32) {
    println!("{a} +{b} = {}", a + b);
}