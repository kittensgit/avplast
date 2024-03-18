import modulPlavuchestiNosovoj from 'assets/production/pontoonSystems/modul-plavuchesti-nosovoj.jpg';
import modulPlavuchestiNosovojBolshoj from 'assets/production/pontoonSystems/modul-plavuchesti-nosovoj-bolshoj.jpg';
import modulPlavuchestiNesushchij from 'assets/production/pontoonSystems/modul-plavuchesti-nesushchij.jpg';
import modulPlavuchestiNesushchijBolshoj from 'assets/production/pontoonSystems/modul-plavuchesti-nesushchij-bolshoj.jpg';

import chertezhHausbot from 'assets/production/pontoonSystems/chertezh-hausbot.jpg';
import hausbot from 'assets/production/pontoonSystems/hausbot.jpg';
import skhemaPonton from 'assets/production/pontoonSystems/skhema-ponton.jpg';
import plastikovyjPonton from 'assets/production/pontoonSystems/plastikovyj-ponton.jpg';
import prichalT from 'assets/production/pontoonSystems/prichal_t.png';
import plastikovyjPrichal from 'assets/production/pontoonSystems/plastikovyj-prichal.jpg';
import prichalPalec1 from 'assets/production/pontoonSystems/prichal_palec1.png';
import prichalnyjPalec from 'assets/production/pontoonSystems/prichalnyj-palec.jpg';
import skhemaMiniZemsnaryad from 'assets/production/pontoonSystems/skhema-mini-zemsnaryad.jpg';
import miniZemsnaryad from 'assets/production/pontoonSystems/mini-zemsnaryad.jpg';
import schemaPlavacha from 'assets/production/pontoonSystems/schema_plavacha1.png';
import plavdacha from 'assets/production/pontoonSystems/plavdacha.jpg';

import decorMol1 from 'assets/icons/card_mol.png';
import decorMol2 from 'assets/icons/card_mol2.png';
import decorMol3 from 'assets/icons/card_mol3.png';
import decorMol4 from 'assets/icons/card_mol4.png';

import poplavki from 'assets/production/pontoonSystems/plastikovye-poplavki.jpg';
import ploshchadka from 'assets/production/pontoonSystems/ploshchadka-na-poplavkah.jpg';
import bui from 'assets/production/pontoonSystems/plastikovye-bui.jpg';
import poplavkiPonton from 'assets/production/pontoonSystems/poplavki-dlya-pontonov.jpg';
import pontonPoplavki from 'assets/production/pontoonSystems/ponton-na-plastikovyh-poplavkah.jpg';

export const rotaryMoldingBenefits = [
    'возможность получать цельно литые понтоны, без сварных швов, что позволяет выдерживать максимальные нагрузки',
    'возможность подбирать толщину стенки понтона от 4 мм до 20 мм',
    'возможность заформовывать в понтоны закладные элементы для последующего удобного крепления к ним различных конструкций.',
];

export const polyethyleneBenefits = [
    'высокая пластичность и, как следствие, ударопрочность понтонов',
    'морозостойкость до -40С',
    'устойчивость к ультрафиолету (благодаря специальным добавкам)',
    'химическая нейтральность как к соленой воде, так и к большинству агрессивных сред',
    'экологичность (не выделяют вредные вещества в окружающую среду)',
    'долговечность, срок эксплуатации до 50 лет.',
];

export const buoyancyModulesStandart = [
    {
        title: 'Модули плавучести носовой',
        image: modulPlavuchestiNosovoj,
        description: [
            'Высота — 560мм',
            'Длина — 1000мм',
            'Ширина — 600мм',
            'Водоизмещение — 190л',
            'Грузоподьемность — 130кг',
            'Толщина стенки — 6-7мм',
            'Вес — 12кг',
        ],
        decorImg: decorMol1,
    },
    {
        title: 'Модули плавучести несущий',
        image: modulPlavuchestiNesushchij,
        description: [
            'Высота — 560мм',
            'Длина — 1200мм',
            'Ширина — 600мм',
            'Водоизмещение — 250л',
            'Грузоподьемность — 190кг',
            'Толщина стенки — 6-7мм',
            'Вес — 18кг',
        ],
        decorImg: decorMol2,
    },
];

export const buoyancyModulesHigh = [
    {
        title: 'Модули плавучести носовой',
        image: modulPlavuchestiNosovojBolshoj,
        description: [
            'Высота — 900мм',
            'Длина — 1200мм',
            'Ширина — 1200мм',
            'Водоизмещение — 800л',
            'Грузоподьемность — 400кг',
            'Толщина стенки — 9-10мм',
            'Вес — 46кг',
        ],
        decorImg: decorMol3,
    },
    {
        title: 'Модули плавучести несущий',
        image: modulPlavuchestiNesushchijBolshoj,
        description: [
            'Высота — 900мм',
            'Длина — 600мм',
            'Ширина — 1200мм',
            'Водоизмещение — 650л',
            'Грузоподьемность — 400кг',
            'Толщина стенки — 9-10мм',
            'Вес — 36кг',
        ],
        decorImg: decorMol4,
    },
];

export const pontoonSystemsExamples = [
    {
        title: 'Площадка под хаусбот',
        images: [chertezhHausbot, hausbot],
        description: [
            'Кол-во модулей — 42 шт',
            'Водоизмещение модулей — 24000 л',
            'Рекомендуемая нагрузка — 17000 кг',
            'Ширина — 7 м',
            'Длина — 16 м',
            'Площадь — 112 м/кв',
            'Осадка — до 0.3 м',
        ],
    },
    {
        title: 'Понтон',
        images: [skhemaPonton, plastikovyjPonton],
        description: [
            'Кол-во модулей — 6 шт',
            'Водоизмещение модулей — 1600 л',
            'Рекомендуемая нагрузка — 1100 кг',
            'Ширина — 3 м',
            'Длина — 6.5 м',
            'Площадь — 19.5 м/кв ',
            'Осадка — до 0.3 м',
        ],
    },
    {
        title: 'Причал T-образный',
        images: [prichalT, plastikovyjPrichal],
        description: [
            'Кол-во модулей — 8 шт',
            'Водоизмещение модулей — 2100 л',
            'Рекомендуемая нагрузка — 1500 кг',
            'Ширина — 1.5 м',
            'Длина — 10 м',
            'Площадь — 16 м/кв ',
            'Осадка — до 0.3 м',
        ],
    },
    {
        title: 'Причальный палец',
        images: [prichalPalec1, prichalnyjPalec],
        description: [
            'Кол-во модулей — 5 шт',
            'Водоизмещение модулей — 1325 л',
            'Рекомендуемая нагрузка — 900 кг',
            'Ширина — 1.5 м',
            'Длина — 8 м',
            'Площадь — 12 м/кв',
            'Осадка — до 0.3 м',
        ],
    },
    {
        title: 'Мини земснаряд',
        images: [skhemaMiniZemsnaryad, miniZemsnaryad],
        description: [
            'Кол-во модулей — 4 шт',
            'Водоизмещение модулей — 1060 л',
            'Рекомендуемая нагрузка — 720 кг',
            'Ширина — 1.9 м',
            'Длина — 3 м',
            'Площадь — 5.5 м/кв',
            'Осадка — до 0.2 м',
        ],
    },
    {
        title: 'Плавдача',
        images: [schemaPlavacha, plavdacha],
        description: [
            'Кол-во модулей — 50 шт',
            'Водоизмещение модулей — 12500 л',
            'Рекомендуемая нагрузка — 9000 кг',
            'Ширина — 7 м',
            'Длина — 16 м',
            'Площадь — 91 м/кв',
            'Осадка — до 0.2 м',
        ],
    },
];

export const floatsImage = [
    poplavki,
    ploshchadka,
    bui,
    poplavkiPonton,
    pontonPoplavki,
];
