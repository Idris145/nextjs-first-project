require('dotenv').config();
const mongoose = require('mongoose');
const logger = require('../lib/log/log');

module.exports = function () {
  const mongoconnectionlink = process.env.MONGODB_URL;

  mongoose.connect(
    mongoconnectionlink,
    { useUnifiedTopology: true },
  );
  mongoose.connection.once('open', () => {
    logger.info(`Connected to MongoDB [CLIENT ENVIRMOMENT]: ${process.env.NODE_ENV}`);
  }).on('error', (error) => {
    logger.error('Connection error:', error);
  });
};
