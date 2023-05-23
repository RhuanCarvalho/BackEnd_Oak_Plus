import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

export class ControllerShowGenerations {
    async showAll(request: Request, response: Response){

        const showGenerations = await prismaClient.generation.findMany({
            orderBy: { id: 'desc' },
            take: 30
        })

        return response.json(showGenerations);
    }
}