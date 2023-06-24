import { MikroORM } from '@mikro-orm/core';
import { __prod__ } from './constants';
import { Post } from './entities/Post';
import mikroOrmConfig from './mikro-orm.config';
const date = new Date();

const main = async () => {
  const orm = await MikroORM.init(mikroOrmConfig);
  await orm.getMigrator().up();
  const post = orm.em.create(Post, {
    title: 'Cheese Pizza',
    createdAt: date,
    updatedAt: date,
  });
  await orm.em.persistAndFlush(post);
};

main().catch((err) => {
  console.error(err);
});
