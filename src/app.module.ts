import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AstroModule } from './astronomy/astronomy.module';
import { LocationModule } from './Locations/location.module';


require('dotenv').config();

@Module({
  imports: [
  MongooseModule.forRoot('mongodb+srv://user02:user02@cluster1.hgnwhot.mongodb.net/astronomy'),
   AstroModule, 
  LocationModule,
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
