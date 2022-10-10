#[derive(Debug)]
struct Rectangle {
    width: u32,
    height: u32,
}

impl Rectangle {
    fn area(&self) -> u32 {
        self.width * self.height
    }
    fn square(size: u32) -> Self {
        Self {
            height: size,
            width: size,
        }
    }
}
  
fn area(rec: &Rectangle) -> u32 {
    rec.width * rec.height
}

struct User {
    name: String,
    email: String,
    active: bool,
    sign_in_count: u64,
}

struct Color(u8, u8, u8); // Tuple Struct

fn main() {
    // structs();
    let square = Rectangle::square(16);
    square.area();

    let rectangle = Rectangle {
        height: 32,
        width: 64,
    };
    // let rec_area = area(&rectangle);
    let rec_area = rectangle.area();
    println!("Rectangle area: {} pixels", rec_area);
    println!("Rectangle: {:?}", rectangle);
}

fn structs() {
    let color = Color(255, 0, 144);
    let user1 = User {
        name: String::from("marcos"),
        email: String::from("marcos@mail.com"),
        active: true,
        sign_in_count: 1,
    };

    let mut user2 = create_user(
        String::from("joao"),
        String::from("joao@mail.com"),
    );
    user2.email = String::from("joao II");

    let user3 = User {
        email: String::from("foo@mail.com"),
        ..user1 // like js spread operator
    }; // user1.name was moved, we can't use it anymore!!

    println!("User1: {}", user1.email);
    // println!("User1.name: {}", user1.name); // won't compile
    println!("User2: {}", user2.email);
    println!("User3: {}", user3.email);
}

fn create_user(name: String, email: String) -> User {
    User {
        name, // name: name,
        email,
        active: true,
        sign_in_count: 1,
    }
}