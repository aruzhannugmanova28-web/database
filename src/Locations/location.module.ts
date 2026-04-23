import {Module} from '@nestjs/common';
import { LocationController } from './location.controllers';
import {LocationService } from './location.service';
import { MongooseModule } from '@nestjs/mongoose';
import {LocationSchema } from './location.model';
import {LocationSchema} from 'src/Locations/location.model';

@Module({
    imports: [
        MongooseModule.forFeature([{name: 'Astro', schema: AstroSchema }]), 
        MongooseModule.forFeature([{name: 'Location', schema: LocationSchema}])], 
    controllers: [LocationController], 
    providers: [LocationService]
})
export class AstroModule {}