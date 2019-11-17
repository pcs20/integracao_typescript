import { Request, Response } from 'express';
import Services from '../services/services';

class Ambiente {

    public async nomes(_req: Request, res: Response) {
        try {
            const alma = (2 / 0);
            //alma = 21;
            return res.status(200).send({ resultado: alma });
        } catch (e) {
            console.log('deu algum ruim lol', e)
            return res.sendStatus(500);
        }
    }

    public async nomes2(req: Request, res: Response) {
        try {
            const other: Algo = req.body;

            if (typeof other.nome === 'string') console.log('é uma string')

            return res.status(200).send(other);
        } catch (e) {
            res.sendStatus(500);
            throw new Error(e);
        }
    }

    public async external(req: Request, res: Response) {
        try {
            const services = new Services();

            services.teste(async (err: boolean, res: Response, body: Externals) => {
                if(err) throw new ApplicationError('algo aconteceu!')
                console.log(body)
            })
            
            res.send('ok');
        } catch (e) {
            res.sendStatus(500);
            throw new Error(e);
        }

    }

}

export default new Ambiente();