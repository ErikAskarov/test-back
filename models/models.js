const sequelize = require('../db');
const { DataTypes } = require('sequelize');

const Message = sequelize.define('message', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, unique: true },
  message_time: { type: DataTypes.DATE },
  text: { type: DataTypes.STRING },
  client_id: { type: DataTypes.INTEGER},
});

const Session = sequelize.define('session', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true, unique: true },
  start_session: { type: DataTypes.DATE },
  end_session: { type: DataTypes.DATE },
});

Session.hasMany(Message);
Message.belongsTo(Session);

module.exports = {
  Message,
  Session
}