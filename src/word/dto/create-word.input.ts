import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateWordInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}