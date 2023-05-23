import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

export class ControllerCreateHistoryTrade {
    async create(request: Request, response: Response){

        const { 
            tipo_trade,
            data_trade_entrada,
            data_trade_saida,
            trade_entrada,
            trade_saida,
            resultado_valor,
            resultado_pontos,
            id_training,
            stop,
            gain
         } = request.body;

        
        const dateEntradaCovert = new Date((data_trade_entrada - 10800) * 1000);
        const dateSaidaCovert = new Date((data_trade_saida - 10800) * 1000);
        const createdHistoryTrade = await prismaClient.historyTrade.create({
            data:{
                tipo_trade,
                data_trade_entrada: dateEntradaCovert,
                data_trade_saida: dateSaidaCovert,
                trade_entrada,
                trade_saida,
                resultado_valor,
                resultado_pontos,
                id_training,
                stop,
                gain
            }
        })

        return response.json(createdHistoryTrade.id);
    }
}
