require('../../lib/configure-env');

const {
  MQ_HOSTNAME: host,
  MQ_PORT: port,
  MQ_USERNAME: user,
  MQ_PASSWORD: pass,
} = process.env;

const amqp = require('amqplib/callback_api');

module.exports.connect = fn =>
  amqp.connect(`amqp://${user}:${pass}@${host}:${port}`, fn);