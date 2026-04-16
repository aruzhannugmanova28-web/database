import {Controller, Post, Patch, Delete, Body, Get, Param} from '@nestjs/common';
import {AstroService} from './astronomy.service'

@Controller('astro')
export class AstroController {
    constructor(private readonly astrosService: AstroService){}

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

    @Get('sect/nebulas')
    async getAllNebulas(){
        const astros = await this.astrosService.getAllANebulas();
        return astros;
    }

}