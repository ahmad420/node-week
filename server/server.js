const router = require("./router");
const http = require("http");
const port = process.env.PORT || 4000;
const hostname = process.env.HOSTNAME || "localhost";

http.createServer(router).listen(port, () => {
    console.log(`server running at port http://${hostname}:${port}`)
});
