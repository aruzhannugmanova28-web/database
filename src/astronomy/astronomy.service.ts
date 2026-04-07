import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from 'mongoose';
import { Astro } from './astronomy.model';


@Injectable()
export class AstroService{

    constructor(@InjectModel('Astro') private readonly astroModel: Model<Astro>, @InjectModel('Location') private readonly locationModel: Model<Location>,){}

    async getAllANebulas(){
        const astros = await this.astroModel.find().exec();
        const nebulas = astros.filter((e) => e.sect === "Nebulas");
        return nebulas.map(c => ({
            id: c.id,
            name: c.name, 
            type: c.type,
            age: c.age, 
            sect: c.sect,
            universe: c.universe, 
            telescope: c.telescope, 
            constellation: c.constellation,
            image: c.image
        }));
    }

    async getbyName(name: string){
        const astros = await this.astroModel.find().exec();
        const name_astro = astros.filter((e)=> e.name === name);
        return name_astro.map(c => ({
            id: c.id,
            name: c.name, 
            type: c.type,
            age: c.age, 
            universe: c.universe, 
            telescope: c.telescope, 
            constellation: c.constellation,
            image: c.image, 
            sect: c.sect,
        }));
    }

    async getAllAstros() {
        const astros = await this.astroModel.find().exec();

        return astros.map(c => ({ 
            id: c.id,
            name: c.name, 
            type: c.type,
            age: c.age, 
            universe: c.universe, 
            telescope: c.telescope, 
            constellation: c.constellation,
            image: c.image, 
            sect: c.sect,
        }));
    }

    async insertAstro(
    id: string, 
    name: string, 
    type: string, 
    age: number, 
    universe: string, 
    telescope: string, 
    constellation: string, 
    sect: string,
    image: string,  ) {

        const newAstro = new this.astroModel({name: name, 
            type: type,
            age: age, 
            universe: universe, 
            telescope: telescope, 
            constellation: constellation,
            image: image, 
            sect: sect,});

        const result = await newAstro.save(); 
        return result.id as string; 
    }

    async getAstroById(astroId: string) {
        const astro = await(await this.findAstro(astroId));
        return {name: astro.name, type: astro.type,
            age: astro.age, 
            universe: astro.universe, 
            telescope: astro.telescope, 
            constellation: astro.constellation,
            image: astro.image, 
            sect: astro.sect,};
    }

    async updateAstroById(astroId:string, name: string, 
    type: string, 
    age: number, 
    universe: string, 
    telescope: string, 
    constellation: string, 
    sect: string,
    image: string){
        const updateAstro = await this.findAstro(astroId);

        if (name) {
            updateAstro.name = name;
        }
        if (age) {
            updateAstro.age = age;
        }
        if (universe) {
            updateAstro.universe = universe;
        }
        if (telescope) {
            updateAstro.telescope = telescope;
        }
        if (type) {
            updateAstro.type = type;
        }
        if (sect) {
            updateAstro.sect = sect;
        }
        if (image) {
            updateAstro.image = image;
        }
        if (constellation) {
            updateAstro.constellation = constellation;
        }
        updateAstro.save();
        //this.products[index]=update.Product;
    }

    async deleteAstroById(astroId: string) {
        const result = await this.astroModel.deleteOne({_id: astroId}).exec();
        if (result.deletedCount === 0 ){
            throw new NotFoundException('Astro does not exist')
        }
    }

    private async findAstro(astroId: string): Promise<Astro> {
        let astro; 
        try {
            astro = await this.astroModel.findById(astroId)
        } catch (error) {
            throw new NotFoundException('Astro does not exist');

        }
        if (!astro) {
            throw new NotFoundException('Astro does not exist')
        }
        return astro;
    } 
}
