import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { Acasa } from './components/acasa/acasa';
import { DespreNoi } from './components/despre-noi/despre-noi';
import { Ateliere } from './components/ateliere/ateliere';
import { Evenimente } from './components/evenimente/evenimente';
import { Galerie } from './components/galerie/galerie';
import { Blog } from './components/blog/blog';
import { Inscrieri } from './components/inscrieri/inscrieri';

export const routes: Routes = [
    {
        path: "",
        redirectTo: "/acasa",
        pathMatch: "full"
    },
    {
        path:"acasa",
        component:Acasa
    },
    {
        path:"despre-noi",
        component:DespreNoi
    },
    {
        path:"ateliere",
        component:Ateliere
    },
    {
        path:"evenimente",
        component:Evenimente
    },
    {
        path:"galerie",
        component:Galerie
    },
    {
        path:"blog",
        component:Blog
    },
    {
        path:"inscrieri",
        component:Inscrieri
    },

];
