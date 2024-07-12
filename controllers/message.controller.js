const Message = require('../models/messageModel');
const to = require('await-to-js').default;

const createMessage = async (req, res) => {
    const {
        firstName,
        lastName,
        email,
        company,
        phone,
        messageBody
    } = req.body;

    const messageData = req.body;

    const [error, message] = await to(Message.create(messageData));
    if (message) {
        await message.save();
    }
    console.log(message);
    if (error) return res.status(500).send({ error });
    return res.json({ message });
};

module.exports = {
    createMessage,
};
