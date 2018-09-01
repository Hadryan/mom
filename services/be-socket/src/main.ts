import "./lib/configure-env";

import { SocketServer } from './server';
import { RabbitMQService } from './lib/rabbitmq';
import { MQConfig } from 'config/mq';

const service = new RabbitMQService(MQConfig);

const socketServer = SocketServer.getSocket('/user');

service.consume('socket', (content, resolve) => {
  const ownerId = content.owner.id;
  console.log(`Job received, emitting to user #${ownerId}`);

  socketServer.emitToUser(
    ownerId,
    'jobdone',
    content
  );
  
  resolve();
}).then(() => {
  console.log('Consuming socket queue...');
});

let bCount = 0;
const test = () => {
  socketServer.emitToUser(1, 'notification', `🔥 #${++bCount}`);
  setTimeout(test, Math.random() * 20000);
}

test();