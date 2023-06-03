import { Request, Response } from 'express';

import { Product } from '../models/Product';

export const home = (req: Request, res: Response) => {
    let age: number = 15;
    let showOld: boolean = false;

    if (age > 20) {
        showOld = true;
    }

    let list = Product.getAll();
    let expensiveList = Product.getFromPriceAfter(12);

    res.render('pages/home', {
        user: { name: 'Raphael', lastname: 'Barros', age: '21' },
        showWelcome: true,
        showOld,
        products: list,
        expensives: expensiveList,
        frases: []
    });
};