import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';

const mongoDbOptions = {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useUnifiedTopology: true,
};

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/nest-test', mongoDbOptions),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
