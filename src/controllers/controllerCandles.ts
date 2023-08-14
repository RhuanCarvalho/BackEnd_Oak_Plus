import { Request, Response } from 'express';
import { prismaClient } from '../database/prismaClient';
import { convertDate } from '../utils/ultils';

interface Candle {
    timeframe: number,
    ativo: string,
    date: string,
    open: number,
    high: number,
    low: number,
    close: number,
    media9E: number,
    media20A: number,
    media200A: number,
    vwap: number,
    stochd: number,
    stochk: number,
}


export class ControllerCandles {

    async create(req: Request, res: Response) {

        const candle: Candle = req.body;

        let dataCurrentCandle = convertDate(candle.date)

        const existesCandle = await prismaClient.candle.findFirst({
            where: {
                ativo: candle.ativo,
                timeframe: candle.timeframe,
                date: dataCurrentCandle
            }
        })
        // if (existesCandle){
        //     console.log('existe')
        // }

        if (!existesCandle) {
            await prismaClient.candle.create({
                data: {
                    timeframe: candle.timeframe,
                    ativo: candle.ativo,
                    date: dataCurrentCandle,
                    open: candle.open,
                    high: candle.high,
                    low: candle.low,
                    close: candle.close,
                    media9E: candle.media9E,
                    media20A: candle.media20A,
                    media200A: candle.media200A,
                    vwap: candle.vwap,
                    stochd: candle.stochd,
                    stochk: candle.stochk,
                }
            })

        }
        return res.json()
    }

}
