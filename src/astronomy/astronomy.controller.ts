import {Controller, Post, Patch, Delete, Body, Get, Param} from '@nestjs/common';
import {AstroService} from './astronomy.service'

@Controller('nebulas')
export class AstroController {
    constructor(private readonly astrosService: AstroService){}
}