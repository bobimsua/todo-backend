import { PartialType } from '@nestjs/mapped-types';
import { CreateWordInput } from './create-word.input';
import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class UpdateWordInput extends PartialType(CreateWordInput) {
  @Field(() => Int)
  id: number;
}
