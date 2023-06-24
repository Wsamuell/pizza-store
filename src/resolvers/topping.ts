import { MyContext } from 'src/types';
import { Post } from '../entities/Post';
import { Resolver, Query, Ctx, Arg, Int } from 'type-graphql';

@Resolver()
export class ToppingResolver {
  @Query(() => [Post])
  toppings(@Ctx() { em }: MyContext): Promise<Post[]> {
    return em.find(Post, {});
  }
  @Query(() => Post, { nullable: true })
  topping(
    @Arg('id', () => Int) id: number,
    createdAt: Date,
    updatedAt: Date,
    title: string,
    @Ctx()
    { em }: MyContext
  ): Promise<Post | null> {
    return em.find(Post, { id, createdAt, updatedAt, title });
  }
}
