const express = require("express");
const helmet = require("helmet");

const UserRouter = require("./users/user-router.js");
const postRouter = require("./posts/posts-router.js");

const server = express();

server.use(helmet());
server.use(express.json());

server.use("/api/users", UserRouter);
server.use("/api/posts", postRouter);

module.exports = server;
