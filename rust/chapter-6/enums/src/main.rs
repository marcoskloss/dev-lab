enum IpAddrKind {
    V4,
    V6,
}

enum IpAddr {
    V4(u8, u8, u8, u8),
    V6(String),
}

enum Message {
    Quit,
    Move { x: i32, y: i32 },
    Write(String),
    ChangeColor(i32, i32, i32),
}

enum Coin {
    Penny,
    Nickel,
    Dime,
    Quarter,
}
impl Coin {
    fn value_in_cents(&self) -> u32 {
        match self {
            Coin::Penny => 1,
            Coin::Nickel => 5,
            Coin::Dime => 10,
            Coin::Quarter => 15,
        }
    }
}

fn plus_one(x: Option<i32>) -> Option<i32> {
    match x {
        None => None,
        Some(number) => Some(number + 1),
    }
}

fn main() {
    let _ipv4 = IpAddr::V4(127, 0, 0, 1);
    let _ipv6 = IpAddr::V6(String::from("::1"));

    let number = Some(16); // Option::Some
    let absent_number: Option<i32> = None; // Option::None

    println!("number: {number:?}");
    println!("absent_number: {absent_number:?}");

    let coin = Coin::Dime;
    let value = coin.value_in_cents();

    let seven = Some(7);
    let eight = plus_one(seven);
}
