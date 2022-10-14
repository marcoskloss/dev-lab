trait Summary {
    fn summarize(&self) -> String;
    fn do_another_thing(&self) {
        println!("do_another_thing default implementation");
    }
}

struct Tweet {
    text: String,
    foo: String,
}
impl Summary for Tweet {
    fn summarize(&self) -> String {
        format!("Text: {}; Foo: {}", self.text, self.foo)
    }
}

struct NewsArticle {
    text: String,
    bar: String,
}
impl Summary for NewsArticle {
    fn summarize(&self) -> String {
        format!("Text: {}; Bar: {}", self.text, self.bar)
    }
}

fn main() {
    let tweet = Tweet { 
        text: String::from("Some tweet here..."),
        foo: String::from("lorem impsum"),
    };

    let news_article = NewsArticle { 
        text: String::from("Some cool text..."), 
        bar: String::from("yadadada"),
    };

    call_summarize(&tweet);
    call_summarize_syntax_sugar(&news_article);

    tweet.do_another_thing();
}

fn call_summarize_syntax_sugar(text: &impl Summary) {
    println!("{}", text.summarize());
}
fn call_summarize<T: Summary>(text: &T) {
    println!("{}", text.summarize());
}