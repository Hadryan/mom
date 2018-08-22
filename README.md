# About
This is a demonstration of how to create an intelligent and scalable service cluster with following technologies to automate job processing.

# Technologies
- [Docker](https://www.docker.com/)
- [Nest](https://nestjs.com/)
- [NodeJS](https://nodejs.org/)
- [PostgreSQL](https://www.postgresql.org/)
- [RabbitMQ](https://www.rabbitmq.com/)
- [Redis](https://redis.io/)
- [TypeScript](https://www.typescriptlang.org/)

# Management Screens
- PostgreSQL: [localhost:7071](http://localhost:7071/)
  - **system:** *PostgreSQL*
  - **server:** *postgresql_server*
  - **username:** *poc_db_user*
  - **password:** *poc_db_pass*
  - **database:** *poc_db_name*
- RabbitMQ: [localhost:7072](http://localhost:7072/)
  - **username:** *poc_rmq_user*
  - **password:** *poc_rmq_pass*
- Redis: [localhost:7073](http://localhost:7073/)

# Tutorials for Better Understanding 
  - RabbitMQ
    - [Official JS Tutorial](https://www.rabbitmq.com/tutorials/tutorial-one-javascript.html)
    - [Official Github Repo of Tutorial](https://github.com/rabbitmq/rabbitmq-tutorials/tree/master/javascript-nodejs)
  - TypeScript
    - [In 5 Minutes](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)
    - [Handbook](https://www.typescriptlang.org/docs/handbook/basic-types.html)

# Sandbox
There is a sandbox to make experiments with things. It consist of mostly little scripts written in plain javascript by following tutorials etc.  
To enter in sandbox;

    $ docker exec -it poc_sandbox /bin/sh

And when you in, simply run scripts as you want;
    
    $ node rabbitmq-tutorial/hello-world/send.js

For example start two bash screen and send from one and receive from other.

# TODO
- Use RabbitMQ with rabbitmq-delayed-message-exchange [plugin](https://hub.docker.com/r/tetsuobe/rabbitmq-delayed-message-exchange/~/dockerfile/).