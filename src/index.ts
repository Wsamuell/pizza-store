import 'reflect-metadata';
import { MikroORM } from '@mikro-orm/core';
import { __prod__ } from './constants';
// import { Post } from './entities/Post';
import mikroOrmConfig from './mikro-orm.config';
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql';
import { ToppingResolver } from './resolvers/topping';
import { PizzaResolver } from './resolvers/pizza';

const main = async () => {
  const orm = await MikroORM.init(mikroOrmConfig);
  await orm.getMigrator().up();

  const app = express();

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [ToppingResolver, PizzaResolver],
      validate: false,
    }),
    context: () => ({ em: orm.em }),
  });

  await apolloServer.start();
  apolloServer.applyMiddleware({ app });
  app.get('/', (_, res) => {
    res.send('hello world');
  });
  app.listen(4000, () => {
    console.log('Up and running on 4000');
  });
};

main().catch((err) => {
  console.error(err);
});
