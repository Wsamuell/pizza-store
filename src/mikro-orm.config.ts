import { __prod__ } from './constants';
import { Post } from './entities/Post';
import { MikroORM } from '@mikro-orm/core';
import path from 'path';

export default {
  migrations: {
    path: path.join(__dirname, './migrations'),
    pathTs: undefined,
    glob: '!(*.d).{js,ts}',
  },
  entities: [Post],
  entitiesTs: ['./src/entities'],
  debug: !__prod__,
  dbName: 'pizza_manager',
  type: 'postgresql',
} as Parameters<typeof MikroORM.init>[0];
