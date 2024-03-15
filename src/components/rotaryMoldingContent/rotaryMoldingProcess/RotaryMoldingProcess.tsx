import { FC } from 'react';

import { rotaryMoldingSteps } from 'data/RotaryMoldingData';

import styles from './RotaryMoldingProcess.module.css';

const RotaryMoldingProcess: FC = () => {
    return (
        <div>
            <h2 className={styles.caption}>
                Процесс от первого контакта до готового изделия
            </h2>
            {rotaryMoldingSteps.map((step, index) => (
                <div key={index} className={styles.block}>
                    <span className={styles.num}>0{index + 1}</span>
                    <ul className={styles.list}>
                        {step.lists.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                    <div className={styles.honeycomb}>
                        <div className={styles.honeycomb_row}>
                            {step.images.slice(0, 2).map((item, index) => (
                                <div
                                    key={index}
                                    className={styles.honeycomb_cell}
                                >
                                    <img
                                        src={item}
                                        alt="Производство методом ротационного формования"
                                    />
                                </div>
                            ))}
                        </div>
                        <div className={styles.honeycomb_row}>
                            {step.images.slice(2).map((item, index) => (
                                <div
                                    key={index}
                                    className={styles.honeycomb_cell}
                                >
                                    <img
                                        src={item}
                                        alt="Производство методом ротационного формования"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default RotaryMoldingProcess;
