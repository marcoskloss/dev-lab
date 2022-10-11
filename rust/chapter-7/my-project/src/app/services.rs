pub fn service_foo() {
    crate::app::models::config_model_foo(); // absolute path
    println!("calling foo service");
}

pub fn service_bar() {
    super::models::config_model_bar(); // 'super' means the parent module
    println!("calling bar service");
}