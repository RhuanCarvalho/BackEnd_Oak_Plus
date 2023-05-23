import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

export class ControllerCreateTraining {
    async create(request: Request, response: Response){

        const { 
            resultado_diario_valor,
            total_trades_gain,
            total_trades_loss,
            total_trades,
            porcent_trades_gain,
            porcent_trades_loss,
            date,
            id_genoma,
            
         } = request.body;

        const dateCovert = new Date((date - 10800) * 1000);
        const dias = (await prismaClient.dia.findFirst({ where: { dia: dateCovert } }))
        const id_dia = dias?.id !== undefined ? dias?.id : 0

        
        const createdTraining = await prismaClient.training.create({
            data:{
                resultado_diario_valor,
                total_trades_gain,
                total_trades_loss,
                total_trades,
                porcent_trades_gain,
                porcent_trades_loss,
                id_dia,
                id_genoma,
            }
        })

        return response.json(createdTraining.id);
    }
}