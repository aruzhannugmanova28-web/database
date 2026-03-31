import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from 'mongoose';
import { Astro } from './astronomy.model';


@Injectable()
export class AstroService{

    constructor(@InjectModel('Astro') private readonly astroModel: Model<Astro>, @InjectModel('Location') private readonly locationModel: Model<Location>,){}

    async getAllAstros(){
        const astro = await this.astroModel.find().exec();
        const astros = astro.filter((e) => e.sect === astros);
        return astros.map(c => ({
            id: c.id,
            name: c.name, 
            type: c.type,
            age: c.age, 
            universe: c.universe, 
            telescope: c.telescope, 
            constellation: c.constellation,
            image: c.image
        }));
    }

    async getbyName(name: string){
        const astro = await this.astroModel.find().exec();
        const name = astro.filter((e)=> e.name === name);
        return name.map(c => ({
            id: c.id,
            name: c.name, 
            type: c.type,
            age: c.age, 
            universe: c.universe, 
            telescope: c.telescope, 
            constellation: c.constellation,
            image: c.image
        }));
    }

    async getAllAstros 
}
