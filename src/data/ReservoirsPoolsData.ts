import plastikovyjBassejn from 'assets/services/reservoirsPools/Plastikovyj-bassejn.jpg';
import bassejnPeregorodkami from 'assets/services/reservoirsPools/Bassejn-s-peregorodkami.jpg';
import plastikovayaVanna from 'assets/services/reservoirsPools/plastikovaya-vanna.jpg';
import okrytyjRezervuar from 'assets/services/reservoirsPools/Okrytyj-plastikovyj-rezervuar.jpg';
import bakFiltraciiVody from 'assets/services/reservoirsPools/Bak-dlya-sistemy-filtracii-vody.jpg';
import pishchevojPromyshlennosti from 'assets/services/reservoirsPools/Emkosti-dlya-pishchevoj-promyshlennosti.jpg';
import bakVodopodgotovki from 'assets/services/reservoirsPools/Bak-dlya-vodopodgotovki.jpg';
import bakSypuchihVeshchestv from 'assets/services/reservoirsPools/Bak-dlya-sypuchih-veshchestv.jpg';
import podzemnogoMontazha from 'assets/services/reservoirsPools/Rezervuar-dlya-podzemnogo-montazha.jpg';
import sistemyOchistki from 'assets/services/reservoirsPools/Sistemy-ochistki-stochnyh-vod.jpg';
import plastikovyeSeptiki from 'assets/services/reservoirsPools/Plastikovye-septiki.jpg';
import plastikovyePogreba from 'assets/services/reservoirsPools/Plastikovye_pogreba.jpg';
import listovogoPlastika from 'assets/services/reservoirsPools/Izdeliya-iz-listovogo-plastika.jpg';
import listovogoPolipropilena from 'assets/services/reservoirsPools/Izdeliya-iz-listovogo-polipropilena.jpg';
import plastikovyjYashchik from 'assets/services/reservoirsPools/Plastikovyj-yashchik.jpg';
import plastikovyjKorob from 'assets/services/reservoirsPools/Plastikovyj-korob.jpg';
import futerovkaTruboprovodov from 'assets/services/reservoirsPools/Futerovka-truboprovodov.jpg';
import futerovkaStalnyh from 'assets/services/reservoirsPools/Futerovka-stalnyh-rezervuarov.jpg';
import futerovkaPolimerami from 'assets/services/reservoirsPools/Futerovka-polimerami.jpg';
import obshivkaBassejnov from 'assets/services/reservoirsPools/Obshivka-bassejnov-plastikom.jpg';

export const reservoirsAndPoolsProperty = [
    'устойчивость к большинству агрессивных сред',
    'широкий температурный диапазон от -40С до +90С',
    'устойчивость к ультрафиолету',
    'прочность и пластичность',
    'малый вес',
];

export const reservoirsAndPoolsData = [
    {
        title: 'Резервуары открытого типа, бассейны, ванны',
        images: [
            plastikovyjBassejn,
            bassejnPeregorodkami,
            plastikovayaVanna,
            okrytyjRezervuar,
        ],
        list: [
            'бассейны для купания и досуга',
            'бассейны для для разведения рыбы',
            'емкости для сбора дождевой воды',
            'гальванические ванны',
            'сепараторы и жироулавливатели',
        ],
    },
    {
        title: 'Надземные резервуары больших объемов',
        images: [
            bakFiltraciiVody,
            pishchevojPromyshlennosti,
            bakVodopodgotovki,
            bakSypuchihVeshchestv,
        ],
        list: [
            'баки для систем фильтрации и водоподготовки',
            'емкости для пищевой промышленности',
            'емкости для сыпучих веществ с конусным дном',
            'баки для систем пожаротушения',
        ],
    },
    {
        title: 'Резервуары для подземного монтажа',
        images: [
            podzemnogoMontazha,
            sistemyOchistki,
            plastikovyeSeptiki,
            plastikovyePogreba,
        ],
        list: [
            'резервуары для хранения больших объемов воды',
            'системы очистки бытовых и промышленных сточных вод',
            'септики',
            'пластиковые погреба',
        ],
    },
    {
        title: 'Изделия из листового пластика',
        images: [
            listovogoPlastika,
            listovogoPolipropilena,
            plastikovyjYashchik,
            plastikovyjKorob,
        ],
        list: [
            'пластиковые вентиляционные короба',
            'пластиковые элементы декора',
            'пластиковые ящики, коробки, вазы',
        ],
    },
    {
        title: 'Защита металлов полимерами, футеровка',
        images: [
            obshivkaBassejnov,
            futerovkaPolimerami,
            futerovkaStalnyh,
            futerovkaTruboprovodov,
        ],
        list: [
            'обшивка металлических или бетонных бассейнов',
            'обшивка стальных резервуаров',
            'футеровка трубопроводов больших диаметров',
            'обшивка кузовов самосвалов',
            'футеровка промышленных воронок',
        ],
    },
];
