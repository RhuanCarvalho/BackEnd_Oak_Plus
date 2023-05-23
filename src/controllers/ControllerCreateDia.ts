import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

export class ControllerCreateDia {
    async create(request: Request, response: Response){
        
        const { dia } = request.body;
        
        const dateDia = new Date((dia - 10800)*1000);
        const findDia = await prismaClient.dia.findFirst({ where: { dia: dateDia } })
        
        if (findDia == null) {
            const createdDia = await prismaClient.dia.create({
                data: { dia: dateDia }
            })
            return response.json(createdDia.id)
        }else{ 
            // console.log("Esse dia (",dateDia,") Já está criado no Bando de dado")
            return response.json(-1)
        }
    }
}




