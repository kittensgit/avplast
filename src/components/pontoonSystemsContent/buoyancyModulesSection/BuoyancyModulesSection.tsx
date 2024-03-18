import { FC } from 'react';

import {
    buoyancyModulesHigh,
    buoyancyModulesStandart,
} from 'data/PontoonSystemsData';

import PontoonSystemsCards from './pontoonSystemsCards/PontoonSystemsCards';

import styles from './BuoyancyModulesSection.module.css';

const BuoyancyModulesSection: FC = () => {
    return (
        <div>
            <h2 className={styles.caption}>Модули плавучести</h2>
            <PontoonSystemsCards buoyancyModules={buoyancyModulesStandart} />
            <h2 className={styles.caption}>
                Модули плавучести повышенной грузоподъемности
            </h2>
            <PontoonSystemsCards buoyancyModules={buoyancyModulesHigh} />
        </div>
    );
};

export default BuoyancyModulesSection;
