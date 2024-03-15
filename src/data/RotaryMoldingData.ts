import chertezh1 from 'assets/services/rotaryMolding/chertezh1.png';
import chertezh2 from 'assets/services/rotaryMolding/chertezh2.png';
import modelRotoformy from 'assets/services/rotaryMolding/model-rotoformy.jpg';
import ehskizRotoformy from 'assets/services/rotaryMolding/ehskiz-rotoformy.jpg';
import formaPoilka from 'assets/services/rotaryMolding/rotacionnaya-forma-poilka.jpg';
import formaKonus from 'assets/services/rotaryMolding/rotacionnaya-forma-konus.jpg';
import formaOpryskivatel from 'assets/services/rotaryMolding/rotacionnaya-forma-opryskivatel.jpg';
import probnoeIzdelie from 'assets/services/rotaryMolding/probnoe-izdelie.jpg';
import zaduvkaPenoplastom from 'assets/services/rotaryMolding/zaduvka-penoplastom.jpg';
import izdeliePontony from 'assets/services/rotaryMolding/serijnoe-izdelie-pontony.jpg';
import izdeliePoilki from 'assets/services/rotaryMolding/serijnoe-izdelie-poilki.jpg';
import izdeliePoilkiKrs from 'assets/services/rotaryMolding/serijnoe-izdelie-poilki-krs.jpg';

export const benefitsRotaryMolding = [
    'простота процесса, высокая производительность, относительно невысокая стоимость литьевых форм;',
    'возможность быстрого изготовления и ремонта литьевых форм;',
    'безотходность производства;',
    'возможность получения изделий без внутренних напряжений и без ориентации полимера;',
    'возможность изготовления монолитных изделий сложной формы и любого цвета;',
    'возможность изготовления крупногабаритных изделий ( до 12 м.куб);',
    'возможность многослойного формования и изготовления вспененных изделий и изделий с двойной стенкой;',
    'возможность заформовывания металлических деталей, вставок и целых каркасов;',
    'возможность изготовления одного и того же изделия с различной толщиной стенки без модификации литьевой формы;',
];

export const firstStep = {
    images: [chertezh1, modelRotoformy, ehskizRotoformy, chertezh2],
    lists: [
        'Озвучиваются пожелания, относительно интересующего изделия. Предоставляются, по возможности, фотографии или чертежи.',
        'Совместно формируется тех.задание на изделие.',
        'Выбирается оптимальная технология, подбирается материал для будущего изделия.',
        'Предварительный расчет стоимости изделия и оснастки (формы) для будущего изделия.',
        'Принятие решения о производстве или об отказе от проекта.',
    ],
};

export const secondStep = {
    images: [formaPoilka, formaKonus, formaOpryskivatel, probnoeIzdelie],
    lists: [
        'Утверждается оснастка (форма), ее стоимость и формула стоимости самого изделия. Сроки и этапы финансирования и изготовления формы, срок выпуска экспериментального изделия.',
        'Создается 3D модель будущего изделия (если необходимо) и 3D модель будущей формы, готовиться конструкторская документация.',
        'Изготовление формы (матрицы изделия).',
    ],
};
export const thirdStep = {
    images: [
        zaduvkaPenoplastom,
        izdeliePoilki,
        izdeliePoilkiKrs,
        izdeliePontony,
    ],
    lists: [
        'Выпуск опытных образцов, их презентация и согласование',
        'Запуск продукта в серию',
    ],
};

export const rotaryMoldingSteps = [firstStep, secondStep, thirdStep];
