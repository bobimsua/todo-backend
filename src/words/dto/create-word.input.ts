import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateWordInput {
  @Field(() => String, { description: 'Example field (placeholder)' })
  name: string;
}
