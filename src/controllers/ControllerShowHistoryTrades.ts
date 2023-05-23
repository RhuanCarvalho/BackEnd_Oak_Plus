import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

export class ControllerShowHistoryTrades {
    async showAll(request: Request, response: Response){

        const { id } = request.params;

        const showHistoryTrades = await prismaClient.historyTrade.findMany({
            where:{id_training: Number(id)},
            orderBy: {
                data_trade_entrada: 'asc'
            },
        })
        
        return response.json(showHistoryTrades);
    }
}