import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

interface DataArrays {
    arraySeq: number[];
    arrayX: number[];
}

export class ControllerShowGraphDrawdown {
    async showAll(request: Request, response: Response) {

        const { id } = request.params;
        
        const trainigs = await prismaClient.training.findMany({
            where: { id_genoma: Number(id) },
            select: {
                history_trades:{
                    select:{
                        resultado_valor: true
                    }
                }
            },
        })

        // console.log(trainigs)
        
        
        var arraySeq:number[] = [0,]
        var arrayX:number[] = [0,]
        var count_seq = 0;
        var count_x = 0;

        trainigs.map((t) => {
            t.history_trades.map((h)=>{

                count_seq += (h.resultado_valor >=0 ? 1 : -1) 
                count_x += 1

                arraySeq.push(count_seq)
                arrayX.push(count_x)

            })
        })
        
        const dataGraph: DataArrays = {
            arraySeq,
            arrayX
        }

        return response.json(dataGraph);
    }
}