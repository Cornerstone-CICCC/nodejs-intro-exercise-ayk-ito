// const http = require("http");
import * as http from "http";

const server = http.createServer((req, res) => {
  console.log("Hello World", req.url);
  if (req.url === "/") {
    res.writeHead(200, { "Content-type": "text/html" });
    res.write("<h1>Home</h1>");
  } else if (req.url === "/about") {
    res.writeHead(200, { "Content-type": "text/html" });
    res.write("<h1>About</h1>");
  } else if (req.url === "/my-account") {
    res.writeHead(403, { "Content-type": "text/plain" });
    res.write("You have no access to this page");
  } else {
    res.writeHead(404, { "Content-type": "text/plain" });
    res.write("Page not found");
  }

  res.end();
});

server.listen(3000, () => console.log("Server is running at port 3000"));
