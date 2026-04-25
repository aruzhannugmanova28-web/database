import {Module} from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LocationController } from './location.controllers';
import {LocationService } from './location.service';
import {LocationSchema } from './location.model';

@Module({
    imports: [
        MongooseModule.forFeature([{name: 'Location', schema: LocationSchema}])], 
    controllers: [LocationController], 
    providers: [LocationService]
})
export class LocationModule {}
