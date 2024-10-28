import  express  from 'express';
import Router from './routes';

const app = express();

app.use(express.json());

const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use('/', Router)

app.listen(PORT, () => {
    console.log('Servidor rodando!');
});