import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateWordInput } from './dto/create-word.input';
import { UpdateWordInput } from './dto/update-word.input';
import { Word, WordDocument } from './schemas/word.schema';

@Injectable()
export class WordsService {
  constructor(@InjectModel(Word.name) private wordModel: Model<WordDocument>) {}

  create(createWordInput: CreateWordInput): Promise<Word> {
    const createdWord = new this.wordModel(createWordInput);
    return createdWord.save();
  }

  findAll(): Promise<Word[]> {
    return this.wordModel.find().exec();
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
