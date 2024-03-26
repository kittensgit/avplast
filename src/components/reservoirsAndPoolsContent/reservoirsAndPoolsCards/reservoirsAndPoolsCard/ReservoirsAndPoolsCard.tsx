import { FC } from 'react';
import { motion } from 'framer-motion';

import styles from './ReservoirsAndPoolsCard.module.css';

interface ReservoirsAndPoolsCardProps {
    title: string;
    images: string[];
    list: string[];
    index: number;
}

const ReservoirsAndPoolsCard: FC<ReservoirsAndPoolsCardProps> = ({
    title,
    images,
    list,
    index,
}) => {
    const cardAnimation = {
        hidden: {
            y: 10,
            opacity: 0,
        },
        visible: (custom: number) => ({
            y: 0,
            opacity: 1,
            transition: {
                delay: custom * 0.2,
                duration: 1,
                type: 'tween',
                ease: 'easeInOut',
            },
        }),
    };
    const listAnimation = {
        hidden: {
            y: 10,
            opacity: 0,
        },
        visible: (custom: number) => ({
            y: 0,
            opacity: 1,
            transition: {
                delay: custom * 0.1,
                duration: 1,
                type: 'tween',
                ease: 'easeInOut',
            },
        }),
    };
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
                amount: 0.1,
                once: true,
            }}
            variants={cardAnimation}
            custom={index + 1}
        >
            <h2 className={styles.caption}>{title}</h2>
            <div className={styles.images}>
                {images.map((path, index) => (
                    <img key={index} src={path} alt={title} />
                ))}
            </div>
            <ul className={styles.list}>
                {list.map((item, index) => (
                    <motion.li
                        custom={index + 1}
                        variants={listAnimation}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{
                            once: true,
                        }}
                        key={index}
                    >
                        {item}
                    </motion.li>
                ))}
            </ul>
        </motion.div>
    );
};

export default ReservoirsAndPoolsCard;
