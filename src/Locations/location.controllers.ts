import {Controller, Post, Patch, Delete, Body, Get, Param} from '@nestjs/common';
import {LocationService} from './location.service'

@Controller('location')
export class LocationController {
    constructor(private readonly locationsService: LocationService){}

    @Get()
    async getAllLocations() {
        return this.locationsService.getAllLocations();
    }

    @Post()
    async addLocation(
        @Body('name') locationName: string, 
        @Body('country') locationCountry: string, 
        @Body('latitude') locationLatitude: number, 
        @Body('longitude') locationLongitude: number, 
        @Body('elevation') locationElevation: number, 
        @Body('established') locationEstablished: number, 
        @Body('type') locationType: string, 
    ) {

        const generatedId= await this.locationsService.insertLocation(locationName, locationCountry, locationLatitude, locationLongitude,
            locationElevation, locationEstablished, locationType,);
        return {id: generatedId};
    }

    @Get('country/US')
    async getAllUS(){
        const locations = await this.locationsService.getAllUS();
        return locations;
    }

    @Get('country/Russia')
    async getAllRussia(){
        const locations = await this.locationsService.getAllRussia();
        return locations;
    }

    @Get('name/:name')
    async getByName(@Param('name') locationName: string,) {
        const location = await this.locationsService.getByName(locationName);
        return location;
    }

    @Patch('name/:name')
    async updateLocationByName(
        @Param('name') locationName: string, 
        @Body('id') locationId: string, 
        @Body('country') locationCountry: string, 
        @Body('latitude') locationLatitude: number, 
        @Body('longitude') locationLongitude: number, 
        @Body('elevation') locationElevation: number, 
        @Body('established') locationEstablished: number, 
        @Body('type') locationType: string, 
    ) {
        await this.locationsService.updateLocationByName(locationName, locationId, locationCountry, locationLatitude, locationLongitude,
            locationElevation, locationEstablished, locationType,);
        return null;
    }

    @Delete('name/:name')
    async deleteLocationByName(@Param('name') locationName: string,) {
        await this.locationsService.deleteLocationByName(locationName);
        return null;
    }

    @Get(':id')
    async getLocationById(@Param('id') locationId: string) {
        return this.locationsService.getLocationById(locationId);
    }

    @Patch(':id')
    async updateLocationById(
        @Param('id') locationId: string, 
        @Body('name') locationName: string, 
        @Body('country') locationCountry: string, 
        @Body('latitude') locationLatitude: number, 
        @Body('longitude') locationLongitude: number, 
        @Body('elevation') locationElevation: number, 
        @Body('established') locationEstablished: number, 
        @Body('type') locationType: string, 
    ) {
        await this.locationsService.updateLocationById(locationId, locationName, locationCountry, locationLatitude,
            locationLongitude, locationElevation, locationEstablished, locationType,);
        return null;
    }

    @Delete(':id')
    async deleteLocationById(@Param('id') locationId: string,) {
        await this.locationsService.deleteLocationById(locationId);
        return null;
    }


}