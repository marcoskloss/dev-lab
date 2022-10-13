use std::{collections::HashMap, vec};

fn main() {
    let v = vec![5,4,3,2,1,1,1,2];

    let median_value = median(&v);
    println!("median value: {}  ", median_value);

    let mode_value = mode(&v);
    println!("mode: {}", mode_value);

    str_to_pig_latin(&String::from("first"));
    str_to_pig_latin(&String::from("apple"));
}

fn str_to_pig_latin(string: &String) {
    let first_letter = &string[0..1];
    let vogals = ["a", "e", "i", "o", "u"];
    let is_first_letter_vogal = vogals.contains(&first_letter);

    if is_first_letter_vogal {
        println!("{}-{}", string, "hay");
    } else {
        println!("{}-{}{}", &string[1..string.len()], first_letter, "ay");
    }
}   

fn median(vec: &Vec<i32>) -> i32 {
    let mut sorted_vec = vec.clone();
    sorted_vec.sort();
    let median_value = sorted_vec
        .get(vec.len() / 2)
        .unwrap();
    median_value.clone()
}

fn mode(vec: &Vec<i32>) -> i32 {
    let mut value_count_map = HashMap::new();
    for value in vec {
        let entry = value_count_map.entry(*value).or_insert(0);
        *entry += 1;
    }
    let mut value_count = -1;
    let mut mode_value = -1;
    for (key, value) in value_count_map {
        if value > value_count {
            value_count = value;
            mode_value = key;
        }
    }
    mode_value
}