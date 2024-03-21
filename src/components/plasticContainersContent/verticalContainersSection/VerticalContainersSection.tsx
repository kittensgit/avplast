import { FC } from 'react';

import {
    verticalContainersSliderData,
    verticalContainersTableData,
} from 'data/PlasticContainers';

import Slider from '../slider/Slider';
import Table from '../table/Table';

import styles from './VerticalContainersSection.module.css';

const VerticalContainersSection: FC = () => {
    return (
        <div>
            <h2 className={styles.title}>Емкости вертикальные</h2>
            <p className={styles.text}>
                <strong>Вертикальные емкости, баки, бочки</strong> предназначены
                преимущественно для стационарного хранения как пищевых
                продуктов, так и различных химических и агрессивных веществ.
                Емкости можно устанавливать как внутри помещений, так и на
                открытой поверхности, а также закапывать в грунт, соблюдая
                определенные технические условия. Комплектуются крышкой
                смотрового люка и резьбовыми отверстиями различных диаметров, в
                зависимости от конфигурации.
            </p>
            <Table tableData={verticalContainersTableData} />
            <Slider sliderData={verticalContainersSliderData} slidesCount={4} />
        </div>
    );
};

export default VerticalContainersSection;
