import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from 'mongoose';
import { Location } from './location.model';


@Injectable()
export class LocationService{

    constructor(@InjectModel('Location') private readonly Location: Model<Location>, @InjectModel('Location') private readonly locationModel: Model<Location>,){}

    async getAllUS(){
        const locations = await this.locationModel.find().exec();
        const usa = locations.filter((e) => e.country === "USA");
        return usa.map(c => ({
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
        const astros = await this.locationModel.find().exec();
        const russia = astros.filter((e) => e.country === "Russia");
        return russia.map(c => ({
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

    async getLocationoById(LocationId: string) {
        const location = await(await this.findLocation(LocationId));
        return {name: location.name, 
            country: location.country, 
            latitude: location.latitude, 
            longitude: location.longitude, 
            elevation: location.elevation, 
            established: location.established, 
            type: location.type,
          };
    }

    async updateLocationById(LocationId:string,   name: string, 
    country: string, 
    latitude: number, 
    longitude: number, 
    elevation: number, 
    established: number, 
    type: string){
        const updateLocation = await this.findLocation(LocationId);

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
        updateLocation.save();
        //this.products[index]=update.Product;
    }

    async deleteLocationById(LocationId: string) {
        const result = await this.locationModel.deleteOne({_id: LocationId}).exec();
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

     async getbyName(LocationName: string) {
        const location = await this.findLocationbyName(locationName);
        return {name: astro.name, type: astro.type,
            age: astro.age, 
            universe: astro.universe, 
            telescope: astro.telescope, 
            constellation: astro.constellation,
            image: astro.image, 
            sect: astro.sect,};
    }

    async updateLocationByName(LocationName:string, 
    id:string,
    type: string, 
    age: number, 
    universe: string, 
    telescope: string, 
    constellation: string, 
    sect: string,
    image: string){
        const updateLocationByName = await this.findLocationbyName(locationName);

        if (id) {
            updateLocationByName.id = id;
        }
        if (country) {
            updateLocationByName.country = country;
        }
        if (universe) {
            updateLocationByName.universe = universe;
        }
        if (telescope) {
            updateLocationByName.telescope = telescope;
        }
        if (type) {
            updateLocationByName.type = type;
        }
        if (sect) {
            updateLocationByName.sect = sect;
        }
        if (image) {
            updateLocationByName.image = image;
        }
        updateLocationByName.save();
        //this.products[index]=update.Product;
    }

    async deleteLocationByName(astroName: string) {
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
