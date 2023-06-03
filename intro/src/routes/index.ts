import { Router, Request, Response } from "express";

const router = Router();

router.get('/', (req: Request, res: Response)=>{
    let age: number = 15;
    let showOld: boolean = false;

    if(age > 20){
        showOld = true;
    }

    res.render('home', {
        user: { name: 'Raphael', lastname: 'Barros', age: '21'},
        showWelcome: true,
        showOld,
        products:[
            {title: 'Produto X', price: 10},
            {title: 'Produto Y', price: 15},
            {title: 'Produto W', price: 20}
        ],
        frases: [
            
        ]
    });
});

router.get('/contato', (req: Request, res: Response)=>{
    res.send('Formulário de contato');
});

router.get('/sobre', (req: Request, res: Response)=>{
    res.send('Página institucional sobre a empresa');
});

export default router;