import { UseGuards } from '@nestjs/common';
import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { WordService } from './word.service';
import { Word } from './entities/word.entity';
import { CreateWordInput } from './dto/create-word.input';
import { UpdateWordInput } from './dto/update-word.input';
import { CurrentUser } from '../auth/auth.decorator';
import { GqlJwtAuthGuard } from '../auth/jwt-auth.guard';
import { User } from '../users/users.service';

@Resolver(() => Word)
export class WordResolver {
  constructor(private readonly wordService: WordService) {}

  @Mutation(() => Word)
  createWord(@Args('createWordInput') createWordInput: CreateWordInput) {
    return this.wordService.create(createWordInput);
  }

  @Query(() => [Word], { name: 'word' })
  @UseGuards(GqlJwtAuthGuard)
  findAll(@CurrentUser() user: User) {
    console.log(user.id);
    return this.wordService.findAll();
  }

  @Query(() => Word, { name: 'word' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.wordService.findOne(id);
  }

  @Mutation(() => Word)
  updateWord(@Args('updateWordInput') updateWordInput: UpdateWordInput) {
    return this.wordService.update(updateWordInput.id, updateWordInput);
  }

  @Mutation(() => Word)
  removeWord(@Args('id', { type: () => Int }) id: number) {
    return this.wordService.remove(id);
  }
}
