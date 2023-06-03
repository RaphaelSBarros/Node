import { Request, Response } from 'express';

export const home = (req: Request, res: Response) => {
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
        frases: []
    });
};