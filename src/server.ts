import express from "express";

const server = express();

// comment

server.get("/", (_, res) => {
    res.send("Hello ts-node!");
});

export default server;