import { FC } from 'react';

import { pontoonSystemsExamples } from 'data/PontoonSystemsData';

import styles from './Examples.module.css';

const Examples: FC = () => {
    return (
        <div className={styles.examples}>
            {pontoonSystemsExamples.map((example, exampleIndex) => (
                <div key={exampleIndex} className={styles.example}>
                    <img src={example.images[0]} alt={example.title} />
                    <div className={styles.info}>
                        <h3>{example.title}</h3>
                        <ul>
                            {example.description.map((itemList, indexList) => (
                                <li key={indexList}>{itemList}</li>
                            ))}
                        </ul>
                    </div>
                    <img src={example.images[1]} alt={example.title} />
                </div>
            ))}
        </div>
    );
};

export default Examples;
