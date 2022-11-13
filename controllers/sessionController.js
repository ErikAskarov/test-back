const { Session } = require('../models/models');

class SessionController {
  async create(req, res) {
    try {
      const { start_session, end_session } = req.body;
      const session = await Session.create({ start_session, end_session });
      return res.json(session);
    } catch (error) {
      return res.json(error.message);
    }
  };

  async getAll(req, res) {
    const sessions = await Session.findAll();
    return res.json(sessions);
  }
}

module.exports = new SessionController()