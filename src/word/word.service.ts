import { Injectable } from '@nestjs/common';
import { CreateWordInput } from './dto/create-word.input';
import { UpdateWordInput } from './dto/update-word.input';

@Injectable()
export class WordService {
  create(createWordInput: CreateWordInput) {
    return 'This action adds a new word';
  }

  findAll() {
    return `This action returns all word`;
  }

  findOne(id: number) {
    return `This action returns a #${id} word`;
  }

  update(id: number, updateWordInput: UpdateWordInput) {
    return `This action updates a #${id} word`;
  }

  remove(id: number) {
    return `This action removes a #${id} word`;
  }
}
