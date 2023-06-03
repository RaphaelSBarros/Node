import { Router, Request, Response } from "express";

const router = Router();

router.get('/', (req: Request, res: Response)=>{
    res.render('home', {
        user: { name: 'Raphael', lastname: 'Barros'}
    });
});

router.get('/contato', (req: Request, res: Response)=>{
    res.send('Formulário de contato');
});

router.get('/sobre', (req: Request, res: Response)=>{
    res.send('Página institucional sobre a empresa');
});

export default router;