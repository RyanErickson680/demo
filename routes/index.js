const Router = require("express")

const messageRouter = require("./message.route")

const rootRouter = Router();

rootRouter.use("/message", messageRouter);

module.exports = rootRouter;
