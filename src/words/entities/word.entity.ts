import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Word {
  @Field(() => String)
  name: string;
}
