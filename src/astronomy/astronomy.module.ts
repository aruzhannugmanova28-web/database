import {Module} from '@nestjs/common';
import { AstroController } from './astronomy.controller';
import { AstroService } from './astronomy.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AstroSchema } from './astronomy.model';
import {LocationSchema} from 'src/Locations/location.modle';

@Module({
    imports: [
        MongooseModule.forFeature([{name: 'Astro', schema: AstroSchema }]), 
        MongooseModule.forFeature([{name: 'Location', schema: LocationSchema}])], 
    controllers: [AstroController], 
    providers: [AstroService]
})
export class AstroModule {}