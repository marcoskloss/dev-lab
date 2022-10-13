pub fn vectors() {
    let _v: Vec<i32> = Vec::new();
    let _v2 = vec![4,3,2,1];

    let mut v3 = Vec::new();
    v3.push(1);
    v3.push(2);
    v3.push(3);

    let third = &v3[2];
    println!("third element {}", third);
    let third = v3.get(2);
    match third {
        Some(n) => println!("third element {}", n),
        None => println!("")
    }

    let v4 = vec![1,2,3];
    let _does_not_exist = v4.get(10);
    // let does_not_exist = &v4[10]; // will panic!

    let v = vec![100, 32, 57];
    for i in &v {
        println!("i={i}");
    }

    let mut v = vec![100, 32, 57];
    for i in &mut v {
        *i *= 2;
    }
    for i in &v {
        println!("i*2 = {i}");
    }
}

enum Cell {
    Int(i32),
    Float(f64),
    Text(String),
}

pub fn vectors_with_multiple_types() {
    let row = vec![
        Cell::Int(16),
        Cell::Float(55.54),
        Cell::Text("some string".to_string()),
    ];
    for item in &row {
        match item {
            Cell::Int(v) => println!("i32 = {v}"),
            Cell::Float(v) => println!("f64 = {v}"),
            Cell::Text(v) => println!("String = {v}"),
        }
    }
}