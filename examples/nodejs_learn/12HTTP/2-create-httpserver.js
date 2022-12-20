const http = require("http");

const server = http.createServer((req, res) => {
  res.end("Hello licop!");
});

server.listen(3000, () => {
  console.log("server listen on 3000");
});