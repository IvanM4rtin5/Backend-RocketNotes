const { Router } = require("express");

const routes = Router();

const userRoutes = require("./users.routes")
const noteRoutes = require("./notes.routes")
const tagsRoutes = require("./tags.routes")
const sessionsRouter = require("./sessions.routes");

routes.use("/users",userRoutes);
routes.use("/notes",noteRoutes);
routes.use("/tags",tagsRoutes);
routes.use("/sessions",sessionsRouter);

module.exports = routes;