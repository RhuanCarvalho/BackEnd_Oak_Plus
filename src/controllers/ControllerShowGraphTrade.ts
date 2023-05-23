import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";
import { HistoryTrade, PrismaClient } from '@prisma/client';


interface IData {
    x: Date;
    y: number[] | number;
}

interface IDataResponse {
    name: string;
    type: string;
    color?: string;
    data: IData[];
}

export class ControllerShowGraphTrade {
    async showAll(request: Request, response: Response) {

        const { id } = request.params;

        const history = await prismaClient.historyTrade.findUnique({
            where: { id: Number(id) },
        })

        const IdCandles = await prismaClient.candle.findFirst({
            where: {
                date: history ? history.data_trade_entrada : '',
            }
        })
        
        const candles = await prismaClient.candle.findMany({
            where: {
                id: {
                    gte: Number(IdCandles?.id) - 15,
                    lte: Number(IdCandles?.id) + 15,
                }
            }
        })

        var candlesOBJ: IData[] = []

        candles.map((c) => {

            var hour = Number(new Date(c.date).getUTCHours())
            var verifyHour: boolean = hour <= 14 ? true : false;

            if (verifyHour) {

                var y: number[] = []
                var x = new Date(c.date)
                y.push(c.open, c.high, c.low, c.close)

                candlesOBJ.push({
                    x,
                    y
                })
            }

        })


        var _data: IDataResponse[] = [{
            name: 'candles',
            type: 'candlestick',
            data: candlesOBJ
        }]


        _data.push({
            data: [
                {
                    x: new Date(history?.data_trade_entrada || 0),
                    y: history?.trade_entrada || 0
                }, {
                    x: new Date(history?.data_trade_saida || 0),
                    y: history?.trade_saida || 0
            }
            ],
            name: ``,
            type: 'line',
            color: '#ffff00'
        })

        _data.push({
            data: [
                {
                    x: new Date(history?.data_trade_entrada || 0),
                    y: history?.gain || 0
                }, {
                    x: new Date(history?.data_trade_saida || 0),
                    y: history?.gain || 0
            }
            ],
            name: ``,
            type: 'line',
            color: '#149c68'
        })

        _data.push({
            data: [
                {
                    x: new Date(history?.data_trade_entrada || 0),
                    y: history?.stop || 0
                }, {
                    x: new Date(history?.data_trade_saida || 0),
                    y: history?.stop || 0
            }
            ],
            name: ``,
            type: 'line',
            color: '#9e0004'
        })

        _data.push({
            data: [
                {
                    x: new Date(history?.data_trade_entrada || 0),
                    y: history?.trade_entrada || 0
                }, {
                    x: new Date(history?.data_trade_saida || 0),
                    y: history?.trade_entrada || 0
            }
            ],
            name: ``,
            type: 'line',
            color: '#fff'
        })


        return response.json(_data);
    }
}