mod app;

pub fn execute_lib() {
    app::services::service_bar();
    app::services::service_foo();
}