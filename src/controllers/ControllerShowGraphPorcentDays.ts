import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

interface DataArrays {
    arrayPorcents: number[];
    arrayDays: Date[];
}

export class ControllerShowGraphProcentDays {
    async showAll(request: Request, response: Response) {

        const { id } = request.params;
        
        const trainigs = await prismaClient.training.findMany({
            where: { id_genoma: Number(id) },
            include: {
                dia: true
            },
            orderBy: {
                dia: {
                    dia: 'desc'
                }
            }
        })
        
        
        var arrayPorcents:number[] = []
        var arrayDays:Date[] = []
        
        trainigs.map((t) => {
            arrayPorcents.push(t.porcent_trades_gain);
            arrayDays.push(t.dia.dia);
        })
        
        const dataGraph: DataArrays = {
            arrayDays,
            arrayPorcents
        }

        return response.json(dataGraph);
    }
}