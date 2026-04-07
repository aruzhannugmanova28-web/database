import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AstroModule } from './astronomy/astronomy.module';
import { MongooseModule } from '@nestjs/mongoose';
import { LocationSchema } from './Locations/location.modle';

require('dotenv').config();

@Module({
  imports: [
    MongooseModule.forFeature([{name: 'Astro', schema: AstroSchema}]),
    MongooseModule.forFeature([{name: 'Location', schema: LocationSchema}])
    MongooseModule.forRoot('mongodb+srv://user02:user02@cluster1.hgnwhot.mongodb.net/astronomy')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
