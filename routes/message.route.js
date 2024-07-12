const Router = require("express")
const { createMessage } = require("../controllers/message.controller")


const messageRouter = Router()

messageRouter.post('/create', createMessage)

module.exports = messageRouter