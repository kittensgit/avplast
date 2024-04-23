import { lazy } from 'react';

export const LazyHome = lazy(() => import('pages/Home'));
export const LazyServices = lazy(() => import('pages/Services'));
export const LazyProduction = lazy(() => import('pages/Production'));
export const LazyContacts = lazy(() => import('pages/Contacts'));
export const LazyPlasticTanksRepair = lazy(
    () => import('pages/PlasticTanksRepair')
);
export const LazyReservoirsAndPools = lazy(
    () => import('pages/ReservoirsAndPools')
);
export const LazyRotaryMolding = lazy(() => import('pages/RotaryMolding'));
export const LazyPontoonSystems = lazy(() => import('pages/PontoonSystems'));
export const LazyAgriculture = lazy(() => import('pages/Agriculture'));
export const LazyPlasticContainers = lazy(
    () => import('pages/PlasticContainers')
);
