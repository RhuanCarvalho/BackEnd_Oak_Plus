import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

export class ControllerCreateGeneration {
    async create(request: Request, response: Response){

        const { 
            id_generation,
            total_dias_treinados,
            total_populacao
         } = request.body;
        
        const createdGeneration = await prismaClient.generation.create({
            data:{
                id_generation,
                total_dias_treinados,
                total_populacao
            }
        })

        return response.json(createdGeneration.id);
    }
}
