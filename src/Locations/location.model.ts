import * as mongoose from 'mongoose';

export const LocationSchema = new mongoose.Schema({
    name: {type: String, required: false},
    country: {type: String, required: false},
    latitude: {type: Number, required: false}, 
    longitude: {type: Number, required: false},
    elevation: {type: Number, required: false},
    established: {type: Number, required: false},
    type: {type: String, required: false},

});

export interface Location extends mongoose.Document {
    id: string, 
    name: string, 
    country: string, 
    latitude: number, 
    longitude: number, 
    elevation: number, 
    established: number, 
    type: string, 
}