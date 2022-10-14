struct Point<T, U>{
    x: T,
    y: U,
}

impl<T, U> Point<T, U> {
    fn get_x(&self) -> &T {
        &self.x
    }
    fn get_y(&self) -> &U {
        &self.y
    }
}

fn main() {
    let numbers = vec![5,3,2,1,6,88,1,2,6,44,23,78];
    println!("largest i32 = {}", largest(&numbers));

    let numbers = vec![12.2, 33.2, 33.3, 43.1, 59.9, 60.1, 60.0];
    println!("largest f64 = {}", largest(&numbers));

    let chars = vec!['a', 'b', 'c', 'd', 'z'];
    println!("largest char = {}", largest(&chars));

    let point = Point { x: 12.2, y: 0 };
    point.get_x();
    point.get_y();
}

fn largest<T: PartialOrd>(list: &[T]) -> &T {
    let mut largest_value = &list[0];
    for value in list {
        if value > largest_value {
            largest_value = value;
        }
    }
    largest_value
}
