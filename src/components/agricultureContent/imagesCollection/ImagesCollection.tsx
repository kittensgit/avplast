import { FC } from 'react';

import styles from './ImagesCollection.module.css';

interface ImagesCollectionProps {
    images: string[];
    title: string;
}

const ImagesCollection: FC<ImagesCollectionProps> = ({ images, title }) => {
    return (
        <div className={styles.images}>
            {images.map((img, indexImg) => (
                <img key={indexImg} src={img} alt={title} />
            ))}
        </div>
    );
};

export default ImagesCollection;
