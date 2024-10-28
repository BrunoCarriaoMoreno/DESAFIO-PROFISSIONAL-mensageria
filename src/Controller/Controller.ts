import { Request, Response } from "express";
import { myQueue } from '../queues/myqueue';


export const testEndpoint = async(req:Request, res:Response) => {
    res.send('Endpoint de teste funcionando!');
}


export const addJob = async (req:Request, res:Response) => {
    const { jobType, data } = req.body;


    try {
        await myQueue.add(jobType, data);
        res.status(200).json({ message: 'job adicionado à fila!', jobType, data});

    } catch (error) {
    console.error('Falha ao adicionar job à fila', error);
    res.status(500).json({ error: 'Não foi possível adicionar o job à fila!' });

    }

};