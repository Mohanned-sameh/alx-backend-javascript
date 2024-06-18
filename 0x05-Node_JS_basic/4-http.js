const http = require('http');

const app = http.createServer((req, res) => {
  res.write('Hello World');
  res.end();
});

app.listen(1245);

module.exports = app;
