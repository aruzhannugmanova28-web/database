import {Controller, Post, Patch, Delete, Body, Get, Param} from '@nestjs/common';
import {LocationService} from './location.service'

@Controller('location')
export class LocationController {
    constructor(private readonly astrosService: LocationService){}

    @Get()
    async getAllAstros() {
        const astros = await this.astrosService.getAllAstros();
        return astros;
    }

    @Post()
    async addAstro(
        @Body('name') astroName: string, 
        @Body('age') astroAge: number, 
        @Body('type') astroType: string, 
        @Body('constellation') astroConstellation: string, 
        @Body('image') astroImage: string, 
        @Body('telescope') astroTelescope: string, 
        @Body('universe') astroUniverse: string, 
        @Body('sect') astroSect: string,
    ) {

        const generatedId= await this.astrosService.insertAstro(astroName, astroType, astroAge, astroUniverse, astroTelescope, astroConstellation, astroSect, astroImage);
        return {id: generatedId};
    }

    @Get('sect/nebulas')
    async getAllNebulas(){
        const astros = await this.astrosService.getAllNebulas();
        return astros;
    }

    @Get('sect/galaxies')
    async getAllGalaxies(){
        const astros = await this.astrosService.getAllGalaxies();
        return astros;
    }

    @Get('name/:name')
    async getbyName(@Param('name') astroName: string,) {
        const astro = await this.astrosService.getbyName(astroName);
        return astro;
    }

    @Patch('name/:name')
    async updateAstroByName(
        @Param('name') astroName: string, 
        @Body('id') astroId: string, 
        @Body('age') astroAge: number, 
        @Body('type') astroType: string, 
        @Body('constellation') astroConstellation: string, 
        @Body('image') astroImage: string, 
        @Body('telescope') astroTelescope: string, 
        @Body('universe') astroUniverse: string, 
        @Body('sect') astroSect: string,
    ) {
        await this.astrosService.updateAstroByName(astroId, astroName, astroType, astroAge, astroConstellation, astroImage, astroSect, astroTelescope, astroUniverse);
        return null;
    }

    @Delete('name/:name')
    async deleteAstroByName(@Param('id') astroName: string,) {
        await this.astrosService.deleteAstroByName(astroName);
        return null;
    }

    @Get(':id')
    async getAstroById(@Param('id') astroId: string,) {
        const astro = await this.astrosService.getAstroById(astroId);
        return astro;
    }

    @Patch(':id')
    async updateAstroById(
        @Param('id') astroId: string, 
        @Body('name') astroName: string, 
        @Body('age') astroAge: number, 
        @Body('type') astroType: string, 
        @Body('constellation') astroConstellation: string, 
        @Body('image') astroImage: string, 
        @Body('telescope') astroTelescope: string, 
        @Body('universe') astroUniverse: string, 
        @Body('sect') astroSect: string,
    ) {
        await this.astrosService.updateAstroById(astroId, astroName, astroType, astroAge, astroConstellation, astroImage, astroSect, astroTelescope, astroUniverse);
        return null;
    }

    @Delete(':id')
    async deleteAstroById(@Param('id') astroId: string,) {
        await this.astrosService.deleteAstroById(astroId);
        return null;
    }


}