fn main() {
    {
        let name = "Marcos Kloss";
        let idx = first_word(&name);
        let first_name = String::from(&name[..idx]);
        println!("Name: {name}, First name: {first_name}");
    }

    {
        let str = String::from("hello world");
        let length = calculate_length(str);
        println!("str Length: {length}");
        // println!("Str: {str}"); // We can't use str anymore because it was moved to calculate_length!!

        let str2 = String::from("Ref");
        let length = calculate_length_with_reference(&str2);
        println!("str 2 Length: {length}");
        println!("Str2 (using references): {str2}");
    }

    { // s is not valid here, it’s not yet declared
        let _s = "hello"; // s is valid from this point forward

        // do stuff with s
    } // this scope is now over, and s is no longer valid

    {
        let s1 = String::from("hello");
        let _s2 = s1; // this will move the s1 variable to s2 (we can't access s1 anymore)
                             // this happens to prevent errors like double free error because both s1 and s2 are pointing to the same heap place [1]
        // println!("{}, world!", s1); // won't compile
    }

    {
        let s1 = String::from("hello");
        let s2 = s1.clone(); // copying both heap and stack data
        println!("s1 = {}, s2 = {}", s1, s2);
    }

    {
        let s = String::from("hello lads");
        takes_ownership(s);
        // println!("string = {}", s); // won't compile!
    }
}

fn first_word(s: &str) -> usize {
    let chars = s.chars();
    for (index, c) in chars.enumerate() {
        if c == ' ' {
            return index;
        }
    }
    s.len()
}

fn takes_ownership(some_string: String) { // some_string comes into scope
    println!("{}", some_string);
}

fn calculate_length(s: String) -> usize {
    s.len()
}

fn calculate_length_with_reference(s: &String) -> usize {
    s.len()
}

// [1] https://doc.rust-lang.org/book/ch04-01-what-is-ownership.html#ways-variables-and-data-interact-move