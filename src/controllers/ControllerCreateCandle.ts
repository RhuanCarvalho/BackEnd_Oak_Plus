import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

export class ControllerCreateCandle {
    async create(request: Request, response: Response){

        const { 
            open,
            high,
            low,
            close,
            date,
            id_dia,
         } = request.body;

        const datecandle = new Date((date - 10800) * 1000);

        const createdCandle = await prismaClient.candle.create({
            data:{
                open,
                high,
                low,
                close,
                date: datecandle,
                id_dia, 
            }
        })

        return response.json(createdCandle.id);
    }
}
