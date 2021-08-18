const fibonacci = require('fibonacci');

const result = fibonacci.iterate(10000);

process.send(result.ms);
process.exit();
