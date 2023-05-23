import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

export class ControllerCreateGenoma {
    async create(request: Request, response: Response){

        const { 
            id_generation,
            fitness,
            resultado_total_valor,
            total_trades_gain,
            total_trades_loss,
            total_trades,
            media_porcent_desejada,
            media_porcent_atingida,
            total_dias_training
            
         } = request.body;
        
        const createdGenoma = await prismaClient.genoma.create({
            data:{
                id_generation,
                fitness,
                resultado_total_valor,
                total_trades_gain,
                total_trades_loss,
                total_trades,
                media_porcent_desejada,
                media_porcent_atingida,
                total_dias_training
            }
        })

        return response.json(createdGenoma.id);
    }
}