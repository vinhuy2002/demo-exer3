const http = require("http");
const port = process.env.PORT || 3000;
const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "text/html");
    res.end("<h3>Hello Teacher, we are from group 7</h3>");
})
server.listen(port, ()=>{
    console.log("Server is running");
})