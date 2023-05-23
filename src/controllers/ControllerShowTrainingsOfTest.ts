import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

export class ControllerShowTrainingsOfTest {
    async showAll(request: Request, response: Response) {

        const showTrainings = await prismaClient.trainingOfTest.findMany({
            take: 1,
            orderBy: {
                id: 'desc'
            },
            include: {
                dia: true
            }
        })


        return response.json(showTrainings[0]);
    }
}