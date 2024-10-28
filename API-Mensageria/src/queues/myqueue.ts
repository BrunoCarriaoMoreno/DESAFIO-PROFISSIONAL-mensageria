import { Queue, Worker } from "bullmq";
import { Redis } from 'ioredis';

const connection = new Redis({
    host: 'redis',
    port: 6379,
    maxRetriesPerRequest: null
});

export const myQueue = new Queue('myQueue', { connection });

const processarPedido = async (data: any) => {
    console.log('Processando pedido:', data);
};

const enviarEmail = async (data: any) => {
    console.log('Enviando email:', data);
};

const gerarRelatorio = async (data: any) => {
    console.log('Gerando relatório', data);
};

new Worker('myQueue', async job => {
    console.log(`Processando job ${job.id} with data:`, job.data);

    switch (job.name) {
        case 'processarPedido':
            await processarPedido(job.data);
            break;
        case 'enviarEmail':
            await enviarEmail(job.data);
            break;
        case 'gerarRelatorio':
            await gerarRelatorio(job.data);
            break;
        default:
            throw new Error('Unknown job type');
    }

}, {connection});




