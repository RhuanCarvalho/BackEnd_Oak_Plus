import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

export class ControllerShowGenomas {
    async showAll(request: Request, response: Response){

        const { id } = request.params;

        const showGenomas = await prismaClient.genoma.findMany({
            where:{id_generation: Number(id)},
            orderBy: { fitness: 'desc' }
        })

        return response.json(showGenomas);
    }
}