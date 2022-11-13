const { Message } = require('../models/models');

class MessageController {
  async create(req, res) {
    try {
      const { message_time, text, client_id, sessionId } = req.body;
      const message = await Message.create({ message_time, text, client_id, sessionId });
      return res.json(message);
    } catch (error) {
      return res.json(error.message);
    }
  };

  async getAll(req, res) {
    const messages = await Message.findAll();
    return res.json(messages);
  }
}

module.exports = new MessageController()