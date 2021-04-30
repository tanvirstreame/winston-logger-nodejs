const { transports, format, createLogger } = require('winston');
const path = require('path');
const moment = require("moment");
appRoot = path.join(__dirname, '../');

const logger = createLogger({
  transports: [
    new transports.Console(),
    new transports.File({
      name: 'error',
      level: 'error',
      format: format.combine(format.timestamp(), format.json()),
      filename: `${appRoot}/logs/error/${moment().format('YYYY-MM-DD')}.log`,
    }),
    new transports.File({
      name: 'warn',
      level: 'warn',
      format: format.combine(format.timestamp(), format.json()),
      filename: `${appRoot}/logs/warn/${moment().format('YYYY-MM-DD')}.log`,
    }),
    new transports.File({
      name: 'info',
      level: 'info',
      format: format.combine(format.timestamp(), format.json()),
      filename: `${appRoot}/logs/info/${moment().format('YYYY-MM-DD')}.log`,
    }),
    new transports.File({
      name: 'debug',
      level: 'debug',
      format: format.combine(format.timestamp(), format.json()),
      filename: `${appRoot}/logs/debug/${moment().format('YYYY-MM-DD')}.log`,
    }),
    new transports.File({
      name: 'silly',
      level: 'silly',
      format: format.combine(format.timestamp(), format.json()),
      filename: `${appRoot}/logs/silly/${moment().format('YYYY-MM-DD')}.log`,
    }),

  ]
});


module.exports = logger;