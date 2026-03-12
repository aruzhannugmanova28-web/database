import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from 'mongoose';
import { title } from 'process';
import { ignoreElements } from "rxjs";
import { Astro } from './astrology.model';


@Injectable()
export class AstroService{

    constructor(@InjectModel('Astro') private readonly astroModel: Model<Astro>, @InjectModel('Location') private readonly locationModel: Model<Location>,){}

    async getAllNebulas(){
        const astro = await this.astroModel.find().exec();
        const nebulas = astro.filter((e) => e.sect === "Nebulas");
        return nebulas.map(c => ({id: c.id,
            name: c.name, 
            age: c.age, 
            universe: c.universe, 
            telescope: c.telescope, 
            const: c.const,
        }));
    }
    async getbyName(name: string){
        const astro = await this.astroModel.find().exec();

        const name = astro.filer((e)=> e.name === "Nebulas");

        }))
    }
}
