import { Module } from '@nestjs/common';
import { WordService } from './word.service';
import { WordResolver } from './word.resolver';

@Module({
  providers: [WordResolver, WordService]
})
export class WordModule {}
