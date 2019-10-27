console.log(_dirname);

const http = require('http');
const staticServer = require("node-static");
const server = new staticServer.Server(`${_dirname}/`);
http.createServer((req, res)=>{
server.serve(reg, res)
}).listen(3000);