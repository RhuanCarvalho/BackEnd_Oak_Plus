import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

export class ControllerShowTrainings {
    async showAll(request: Request, response: Response){

        const { id } = request.params;

        const showTrainings = await prismaClient.training.findMany({
            where:{id_genoma: Number(id)},
            orderBy: { dia: {
                dia:'desc'
            } },
            include: {
                dia: true
            } 
        })

        
        return response.json(showTrainings);
    }
}