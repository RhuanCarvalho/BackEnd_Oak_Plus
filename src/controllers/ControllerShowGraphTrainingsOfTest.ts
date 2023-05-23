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

export class ControllerShowGraphTrainingsOfTest {
    async showAll(request: Request, response: Response) {

        const { id } = request.params;

        const trainigs = await prismaClient.trainingOfTest.findUnique({
            where: { id: Number(id) },
            include: {
                dia: true,
                history_trades: true
            }
        })

        const candles = await prismaClient.candle.findMany({
            where: { id_dia: trainigs?.dia.id }
        })

        var candlesOBJ: IData[] = []

        candles.map((c) => {

            var hour = Number(new Date(c.date).getUTCHours())
            var verifyHour: boolean =  hour <= 14 ? true : false;
            
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


        const gain = (h: HistoryTrade) => {
            var result: number = h.trade_entrada - h.trade_saida;
            if (h.tipo_trade == "BUY") {
                if (result <= 0) {
                    return true
                } else {
                    return false
                }
            }
            if (h.tipo_trade == "SELL") {
                if (result >= 0) {
                    return true
                } else {
                    return false
                }
            }
        }
        var verde: string = '#fff' //'#551bb3' //'#149c68'
        var vermelho: string = '#ffff00' //'#9e0004'

        // trainigs?.history_trades   
        trainigs?.history_trades.map((h) => {
            var trade: IData[] = []

            trade.push(
                {
                    x: new Date(h.data_trade_entrada),
                    y: h.trade_entrada
                }, {
                x: new Date(h.data_trade_saida),
                y: h.trade_saida
            })

            _data.push({
                data: trade,
                name: `${h.tipo_trade} result: ${h.resultado_pontos}pts | R$ ${h.resultado_valor} `,
                type: 'line',
                color: gain(h) ? verde : vermelho
            })


        })


        return response.json(_data);
    }
}