"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
// const http = require("http");
const http = __importStar(require("http"));
const server = http.createServer((req, res) => {
    console.log("Hello World", req.url);
    if (req.url === "/") {
        res.writeHead(200, { "Content-type": "text/html" });
        res.write("<h1>Home</h1>");
    }
    else if (req.url === "/about") {
        res.writeHead(200, { "Content-type": "text/html" });
        res.write("<h1>About</h1>");
    }
    else if (req.url === "/my-account") {
        res.writeHead(403, { "Content-type": "text/plain" });
        res.write("You have no access to this page");
    }
    else {
        res.writeHead(404, { "Content-type": "text/plain" });
        res.write("Page not found");
    }
    res.end();
});
server.listen(3000, () => console.log("Server is running at port 3000"));
