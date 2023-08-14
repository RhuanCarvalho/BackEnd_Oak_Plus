import { Request, Response } from 'express';
import { prismaClient } from '../database/prismaClient';
import { convertDate } from '../utils/ultils';

interface Train {
    ativo: string,
    timeframe: number,
    data_train: string,
    // trades_train: Trade[]
}

interface Trade {
    key_train: number,
    data_trade: string,
    trade_certo: number,
    trade_previsto: number,
    // possiveis_trades: PossiveisTrade[],
}

interface PossiveisTrade {
    id_type_trade: number,
    key_trade: number,
    nome: string,
    time_abertura: string,
    time_saida: string,
    preco_abertura: number,
    preco_saida: number,
    preco_alvo: number,
    preco_stop: number,
    risco_max_pts: number,
    risco_max_valor: number,
    retorno_max_pts: number,
    retorno_max_valor: number,
    resultado_pts: number,
    resultado_valor: number,
    tempo_operacao: string,
    resultado: string,
    alvo_atingido: boolean,
    stop_atingido: boolean,
}



export class ControllerData {

    async createTrain(req: Request, res: Response) {

        const train: Train = req.body;

        // console.log(train)

        const excluidoAll = await prismaClient.train.deleteMany()

        console.log('Excuildo', excluidoAll)

        const dateTrainConverted = convertDate(train.data_train)

        const createdTrain = await prismaClient.train.create({
            data: {
                ativo: train.ativo,
                data_train: dateTrainConverted,
                timeframe: train.timeframe,
            }
        })
        return res.json(createdTrain.id)
    }
    async createTrade(req: Request, res: Response) {

        const trade: Trade = req.body;

        const dateTradeConverted = convertDate(trade.data_trade)
        const createdTrade = await prismaClient.trade.create({
            data: {
                key_train: trade.key_train,
                data_trade: dateTradeConverted,
                trade_certo: trade.trade_certo,
                trade_previsto: trade.trade_previsto,
            }
        })
        return res.json(createdTrade.id)
    }
    async createPossiveisTrade(req: Request, res: Response) {
        const possiveis: PossiveisTrade = req.body;

        const time_aberturaConverted = convertDate(possiveis.time_abertura);
        const time_saidaConverted = convertDate(possiveis.time_saida);

        await prismaClient.possiveisTrade.create({
            data: {
                key_trades_train: possiveis.key_trade,
                id_type_trade: possiveis.id_type_trade,
                nome: possiveis.nome,
                time_abertura: time_aberturaConverted,
                time_saida: time_saidaConverted,
                preco_abertura: possiveis.preco_abertura,
                preco_saida: possiveis.preco_saida,
                preco_alvo: possiveis.preco_alvo,
                preco_stop: possiveis.preco_stop,
                risco_max_pts: possiveis.risco_max_pts,
                risco_max_valor: possiveis.risco_max_valor,
                retorno_max_pts: possiveis.retorno_max_pts,
                retorno_max_valor: possiveis.retorno_max_valor,
                resultado_pts: possiveis.resultado_pts,
                resultado_valor: possiveis.resultado_valor,
                tempo_operacao: possiveis.tempo_operacao,
                resultado: possiveis.resultado,
                alvo_atingido: possiveis.alvo_atingido,
                stop_atingido: possiveis.stop_atingido,
            }
        })
        return res.json()
    }
}