import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Word {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
