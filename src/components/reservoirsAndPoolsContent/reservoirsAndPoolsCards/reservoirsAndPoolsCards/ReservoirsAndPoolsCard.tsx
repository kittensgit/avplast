import { FC } from 'react';

import styles from './ReservoirsAndPoolsCard.module.css';

interface ReservoirsAndPoolsCardProps {
    title: string;
    images: string[];
    list: string[];
}

const ReservoirsAndPoolsCard: FC<ReservoirsAndPoolsCardProps> = ({
    title,
    images,
    list,
}) => {
    return (
        <div>
            <h2 className={styles.caption}>{title}</h2>
            <div className={styles.images}>
                {images.map((path, index) => (
                    <img key={index} src={path} alt={title} />
                ))}
            </div>
            <ul className={styles.list}>
                {list.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default ReservoirsAndPoolsCard;
