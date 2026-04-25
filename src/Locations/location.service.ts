import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from 'mongoose';
import { Location } from './location.model';


@Injectable()
export class LocationService{

    constructor(@InjectModel('Location') private readonly locationModel: Model<Location>,){}

    async getAllUS(){
        const locations = await this.locationModel.find({country: 'USA'}).exec();
        return locations.map(c => ({
            id: c.id,
            name: c.name, 
            country: c.country, 
            latitude: c.latitude, 
            longitude: c.longitude, 
            elevation: c.elevation, 
            established: c.established, 
            type: c.type, 
        }));
    }

    async getAllRussia(){
        const locations = await this.locationModel.find({country: "Russia"}).exec();
        return locations.map(c => ({
            id: c.id,
            name: c.name, 
            country: c.country, 
            latitude: c.latitude, 
            longitude: c.longitude, 
            elevation: c.elevation, 
            established: c.established, 
            type: c.type, 
        }));
    }

    async getAllLocations() {
        const locations = await this.locationModel.find().exec();
        return locations.map(c => ({ 
            id: c.id,
            name: c.name, 
            country: c.country, 
            latitude: c.latitude, 
            longitude: c.longitude, 
            elevation: c.elevation, 
            established: c.established, 
            type: c.type, 
        }));
    }

    async insertLocation(
    name: string, 
    country: string, 
    latitude: number, 
    longitude: number, 
    elevation: number, 
    established: number, 
    type: string,) {

        const newLocation = new this.locationModel({
            name: name, 
            country: country, 
            latitude: latitude, 
            longitude: longitude, 
            elevation: elevation, 
            established: established, 
            type: type, });

        const result = await newLocation.save(); 
        return result.id as string; 
    }

    async getLocationById(locationId: string) {
        const location = await this.findLocation(locationId);
        return {name: location.name, 
            country: location.country, 
            latitude: location.latitude, 
            longitude: location.longitude, 
            elevation: location.elevation, 
            established: location.established, 
            type: location.type,
          };
    }

    async updateLocationById(
    locationId:string,   
    name: string, 
    country: string, 
    latitude: number, 
    longitude: number, 
    elevation: number, 
    established: number, 
    type: string)
    {
        const updateLocation = await this.findLocation(locationId);

        if (name) {
            updateLocation.name = name;
        }
        if (country) {
            updateLocation.country = country;
        }
        if (latitude) {
            updateLocation.latitude = latitude;
        }
        if (longitude) {
            updateLocation.longitude = longitude;
        }
        if (elevation) {
            updateLocation.elevation = elevation;
        }
        if (established) {
            updateLocation.established = established;
        }
        if (type) {
            updateLocation.type = type;
        }
        await updateLocation.save();
        //this.products[index]=update.Product;
    }

    async deleteLocationById(locationId: string) {
        const result = await this.locationModel.deleteOne({_id: locationId}).exec();
        if (result.deletedCount === 0 ){
            throw new NotFoundException('Location does not exist')
        }
    }

    private async findLocation(locationId: string): Promise<Location> {
        let location; 
        try {
            location = await this.locationModel.findById(locationId)
        } catch (error) {
            throw new NotFoundException('Location does not exist');

        }
        if (!location) {
            throw new NotFoundException('Location does not exist')
        }
        return location;
    } 

     async getByName(locationName: string) {
        const location = await this.findLocationbyName(locationName);
        return {name: location.name, 
            country: location.country, 
            latitude: location.latitude, 
            longitude: location.longitude, 
            elevation: location.elevation, 
            established: location.established, 
            type: location.type};
    }

    async updateLocationByName(
    locationName:string, 
    id: string, 
    country: string, 
    latitude: number, 
    longitude: number, 
    elevation: number, 
    established: number, 
    type: string){
        const updateLocationByName = await this.findLocationbyName(locationName);

        if (id) {
            updateLocationByName.id = id;
        }
        if (country) {
            updateLocationByName.country = country;
        }
        if (latitude) {
            updateLocationByName.latitude = latitude;
        }
        if (longitude) {
            updateLocationByName.longitude = longitude;
        }
        if (elevation) {
            updateLocationByName.elevation = elevation;
        }
        if (established) {
            updateLocationByName.established = established;
        }
        if (type) {
            updateLocationByName.type = type;
        }
        await updateLocationByName.save();
        //this.products[index]=update.Product;
    }

    async deleteLocationByName(locationName: string) {
        const result = await this.locationModel.deleteOne({ name: locationName }).exec();
        if (result.deletedCount === 0 ){
            throw new NotFoundException('Location does not exist')
        }
    }

    private async findLocationbyName(locationName: string): Promise<Location> {
        let location; 
        try {
            location = await this.locationModel.findOne({ name: locationName }).exec();
        } catch (error) {
            throw new NotFoundException('Location does not exist');

        }
        if (!location) {
            throw new NotFoundException('Location does not exist')
        }
        return location;
    } 
}
