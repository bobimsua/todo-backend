import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { AppController } from './app.controller';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { WordsModule } from './words/words.module';

@Module({
  controllers: [AppController],
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://thanhvd:nUuzzhfvQm7FbOvh@freecluster.xgfne.mongodb.net/todo?retryWrites=true&w=majority',
    ),
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
      context: ({ req }) => ({ req }),
    }),
    AuthModule,
    UsersModule,
    WordsModule,
  ],
})
export class AppModule {}
