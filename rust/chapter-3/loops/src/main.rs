fn main() {
    //loop {
    //    println!("to infinity and beyond!");
    //}

    {
        let mut counter = 0;
        let result = loop {
            counter += 1;
            if counter == 5 {
                break counter * 2
            }
        };
        println!("Result: {result}");
    }

    {
        let mut count = 0;
        'outer_loop_label: loop { // loop labels must begin with single quote
            println!("count = {count}");
            let mut remaining = 10;

            loop {
                println!("remaining = {remaining}");
                if remaining == 9 {
                    break;
                }
                if count == 2 {
                    break 'outer_loop_label;
                }
                remaining -= 1;
            }

            count += 1;
        }
        println!("End count = {count}");
    }

    {
        let mut counter = 0;
        while counter != 5 {
            counter += 1;
        }
        println!("Counter: {counter}");
    }

    {
        let arr = [10, 20, 30, 40, 50];
        for value in arr {
            println!("value: {value}");
        }
    }

    {
        for number in (1..4).rev() {
            println!("number: {number}");
        }

        for number in (1..=4).rev() {
            println!("number2: {number}");
        }
    }
}
