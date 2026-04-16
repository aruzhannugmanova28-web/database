import * as mongoose from 'mongoose';
import { Astro, AstroSchema } from 'src/astronomy/astronomy.model';

export const LocationSchema = new mongoose.Schema({
    sect: {type:String, required: true}, 
    astros: {type: [AstroSchema], required: false},
    description: {type: String, required: false},
    image: {type: String, required:true},
});

export interface Location extends mongoose.Document {
    id: string, 
    sect: string, 
    astros: Array<Astro>,
    description: string, 
    image: string,
}