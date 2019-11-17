import { Router } from 'express';
import Ambiente from '../controllers/ambiente';
import mid from '../middleware/mid';

/**
 * Arquivo de rotas gerais do meu sistema
 */

const routers = Router();

routers.get('/listar/ambientes', mid as any, Ambiente.nomes);
routers.post('/listar/ambientes', mid as any, Ambiente.nomes2);
routers.get('/external', Ambiente.external);

export default routers;