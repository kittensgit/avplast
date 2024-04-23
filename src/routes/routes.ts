// routes.tsx
import { FC } from 'react';

import {
    LazyHome,
    LazyAgriculture,
    LazyContacts,
    LazyPlasticContainers,
    LazyPlasticTanksRepair,
    LazyPontoonSystems,
    LazyProduction,
    LazyReservoirsAndPools,
    LazyRotaryMolding,
    LazyServices,
} from 'lazy/lazy';

interface Route {
    path: string;
    component: FC;
}

export const routes: Route[] = [
    { path: '/', component: LazyHome },
    { path: '/avplast', component: LazyHome },
    { path: '/services', component: LazyServices },
    { path: '/production', component: LazyProduction },
    { path: '/contacts', component: LazyContacts },
    {
        path: '/services/remont-plastikovykh-bakov',
        component: LazyPlasticTanksRepair,
    },
    {
        path: '/services/izgotavlenie-rezervuarov-i-basseinov',
        component: LazyReservoirsAndPools,
    },
    {
        path: '/services/proizvodstvo-metodom-rotacionnogo-formovaniya',
        component: LazyRotaryMolding,
    },
    {
        path: '/production/pontonnye-sistemy-moduli-plavuchesti-poplavki',
        component: LazyPontoonSystems,
    },
    {
        path: '/production/polymer-products-agriculture',
        component: LazyAgriculture,
    },
    {
        path: '/production/plastikovye-emkosti-baki-bochki',
        component: LazyPlasticContainers,
    },
];
