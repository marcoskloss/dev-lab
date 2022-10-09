fn main() {
    // <, >, <=, >=, !=, ==
    if true {
        println!("True!");
    } else if false {
        println!("False");
    } else {
        println!("wut");
    }

    let condition = true;
    let n = if condition { 21 } else { 42 };
    println!("n = {n}");

    let another_condition = false;
    let n2 = if another_condition {
        // doing some stuff
        'k'
    } else {
        'j'
    };
}
