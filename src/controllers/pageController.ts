import { Request, Response } from 'express';
import { createObjectMenu } from '../helpers/createMenuObjects';
import { Pet } from '../models/pet';


export const home = (req: Request, res: Response) => {
    let list = Pet.getAll();

    res.render('pages/page', {
        menu: createObjectMenu('all'),
        banner: {
            title: 'Todos os animais',
            backgroud: 'allanimals.jpg'
        },
        list
    });
};

export const dogs = (req: Request, res: Response) => {
    let list = Pet.getFromType('dog')

    res.render('pages/page', {
        menu: createObjectMenu('dog'),
        banner: {
            title: 'Cachorros',
            backgroud: 'banner_dog.jpg'
        },
        list
    });
};

export const cats = (req: Request, res: Response) => {
    let list = Pet.getFromType('cat')

    res.render('pages/page', {
        menu: createObjectMenu('cat'),
        banner: {
            title: 'Gatos',
            backgroud: 'banner_cat.jpg'
        },
        list
    });
};

export const fishes = (req: Request, res: Response) => {
    let list = Pet.getFromType('fish')

    res.render('pages/page', {
        menu: createObjectMenu('fish'),
        banner: {
            title: 'Peixes',
            backgroud: 'banner_fish.jpg'
        },
        list
    });
};