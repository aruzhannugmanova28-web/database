import {Controller, Post, Patch, Delete, Body, Get, Param} from '@nestjs/common';
import {AstroService} from './astronomy.service'

@Controller('astros')
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
        
    )
}