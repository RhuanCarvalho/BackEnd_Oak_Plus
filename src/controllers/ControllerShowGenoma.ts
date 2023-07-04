import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

export class ControllerShowGenoma {
    async showAll(request: Request, response: Response){

        const { id } = request.params;

        const showGenoma = await prismaClient.genoma.findUnique({
            where:{id: Number(id)}
        })

        return response.json(showGenoma);
    }
}