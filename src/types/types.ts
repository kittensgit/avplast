export interface ICardData {
    image: string;
    title: string;
    description: string;
    link: string;
}

export interface IBuoyancyModules {
    image: string;
    title: string;
    description: string[];
    decorImg: string;
}

export interface IPlasticContainersTableItem {
    name: string;
    volume: number;
    height: number;
    width: number;
    length: number | string;
    diametr: number | string;
    thickness: number;
    weigth: number;
}

export interface ISliderItem {
    image: string;
    description: string;
}
