use std::collections::HashMap;

pub fn hash_maps() {
  let mut scores = HashMap::new();
  scores.insert("blue".to_string(), 22);
  scores.insert("red".to_string(), 12);

  let name = "blue".to_string();
  let score = scores.get(&name).copied().unwrap_or(0);

  println!("Score: {} -> {}", name, score);

  for (key, value) in &scores {
    println!("{}:{}", key, value);
  }

  // overwriting the old value
  scores.insert("blue".to_string(), 23); 
  println!("{:?}", scores);

  // adding a key and value only if a key isn’t present
  scores.entry("blue".to_string()).or_insert(24);
  scores.entry("yellow".to_string()).or_insert(1);
  println!("{:?}", scores);

  let txt = "hello world wonderful world";
  let mut map = HashMap::new();

  for word in txt.split_whitespace() {
    let count = map.entry(word).or_insert(0);
    *count += 1;
  }
  println!("{:?}", map);
}