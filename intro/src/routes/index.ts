import { Router, Request, Response } from "express";

const router = Router();

router.get('/', (req: Request, res: Response) => {
    let age: number = 15;
    let showOld: boolean = false;

    if (age > 20) {
        showOld = true;
    }

    res.render('pages/home', {
        user: { name: 'Raphael', lastname: 'Barros', age: '21' },
        showWelcome: true,
        showOld,
        products: [
            { title: 'Produto X', price: 10 },
            { title: 'Produto Y', price: 15 },
            { title: 'Produto W', price: 20 }
        ],
        frases: [

        ]
    });
});

router.get('/contato', (req: Request, res: Response) => {
    res.render('pages/contato');
});

router.get('/sobre', (req: Request, res: Response) => {
    res.render('pages/sobre');
});

router.get('/nome', (req: Request, res: Response) => {
    console.log("query string", req.query);

    let nome: string = req.query.nome as string;
    let idade: string = req.query.idade as string;

    res.render('pages/nome', {
        nome,
        idade
    });
})
router.get('/idade', (req: Request, res: Response) => {
    let mostrarIdade: boolean = false;
    let idade: number = 0;

    if(req.query.ano){
        let anoNascimento: number = parseInt(req.query.ano as string);
        let anoAtual: number = new Date().getFullYear();
        idade = anoAtual - anoNascimento;
        mostrarIdade = true;
    }
    res.render('pages/idade', {
        idade,
        mostrarIdade
    })
});

export default router;