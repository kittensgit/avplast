import { FC } from 'react';
import { motion } from 'framer-motion';

import styles from './ImagesCollection.module.css';

interface ImagesCollectionProps {
    images: string[];
    title: string;
}

const ImagesCollection: FC<ImagesCollectionProps> = ({ images, title }) => {
    const cardsAnimation = {
        hidden: {
            y: -10,
            opacity: 0,
        },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 1,
                type: 'tween',
                ease: 'easeInOut',
            },
        },
    };
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
                amount: 0.1,
                once: true,
            }}
            variants={cardsAnimation}
            className={styles.images}
        >
            {images.map((img, indexImg) => (
                <img key={indexImg} src={img} alt={title} />
            ))}
        </motion.div>
    );
};

export default ImagesCollection;
