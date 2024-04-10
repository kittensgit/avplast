// routes.tsx
import { FC } from 'react';

import Home from 'pages/Home';
import Services from 'pages/Services';
import Production from 'pages/Production';
import Contacts from 'pages/Contacts';
import PlasticTanksRepair from 'pages/PlasticTanksRepair';
import ReservoirsAndPools from 'pages/ReservoirsAndPools';
import RotaryMolding from 'pages/RotaryMolding';
import PontoonSystems from 'pages/PontoonSystems';
import Agriculture from 'pages/Agriculture';
import PlasticContainers from 'pages/PlasticContainers';

interface Route {
    path: string;
    component: FC;
}

export const routes: Route[] = [
    { path: '/', component: Home },
    { path: '/services', component: Services },
    { path: '/production', component: Production },
    { path: '/contacts', component: Contacts },
    {
        path: '/services/remont-plastikovykh-bakov',
        component: PlasticTanksRepair,
    },
    {
        path: '/services/izgotavlenie-rezervuarov-i-basseinov',
        component: ReservoirsAndPools,
    },
    {
        path: '/services/proizvodstvo-metodom-rotacionnogo-formovaniya',
        component: RotaryMolding,
    },
    {
        path: '/production/pontonnye-sistemy-moduli-plavuchesti-poplavki',
        component: PontoonSystems,
    },
    {
        path: '/production/polymer-products-agriculture',
        component: Agriculture,
    },
    {
        path: '/production/plastikovye-emkosti-baki-bochki',
        component: PlasticContainers,
    },
];
