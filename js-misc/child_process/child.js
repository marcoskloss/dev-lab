const http = require('http');
const fibonacci = require('fibonacci');
const { fork } = require('child_process');

const server = http.createServer((req, res) => {
  if (req.url === '/stress-sync') {
    const result = fibonacci.iterate(10000);
    return res.end(result.ms.toString());
  }

  if (req.url === '/stress-child') {
    const child = fork('./stress.js'); 

    child.on('message', (message) => {
      return res.end(message.toString());
    });
  }

  if (req.url === '/block') {
    return res.end('i was blocked :/');
  }

  if (req.url === '/') {
    return res.end('hi o/');
  }
});

server.listen(3001, () => console.log('ITS ALIVE'));
