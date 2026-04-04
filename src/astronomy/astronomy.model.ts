import * as mongoose from 'mongoose';

export const AstroSchema = new mongoose.Schema({
    name: {type: String, required: false},
    type: {type: String, required: false},
    age: {type: Number, required: false}, 
    universe: {type: String, required: false},
    telescope: {type: String, required: false},
    constellation: {type: String, required: false},
    sect: {type: String, required: false},
    image: {type: String, required: true},
});

export interface Astro extends mongoose.Document {
    id: string, 
    name: string, 
    type: string, 
    age: number, 
    universe: string, 
    telescope: string, 
    constellation: string, 
    sect: string,
    image: string, 
}