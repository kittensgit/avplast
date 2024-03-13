import { FC } from 'react';

import benefitsData from 'data/BenefitsData';

import styles from './Benefits.module.css';

const Benefits: FC = () => {
    return (
        <div className={styles.benefits}>
            <div className={styles.benefits_content}>
                {benefitsData.slice(0, 2).map((benefitsItem, index) => (
                    <div className={styles.benefits_item} key={index}>
                        <img
                            src={benefitsItem.image}
                            alt={benefitsItem.title}
                        />
                        <div className={styles.benefits_item_info}>
                            <h3>{benefitsItem.title}</h3>
                            <p>{benefitsItem.description}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className={styles.benefits_content}>
                {benefitsData.slice(2).map((benefitsItem, index) => (
                    <div className={styles.benefits_item} key={index}>
                        <img
                            src={benefitsItem.image}
                            alt={benefitsItem.title}
                        />
                        <div className={styles.benefits_item_info}>
                            <h3>{benefitsItem.title}</h3>
                            <p>{benefitsItem.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Benefits;
