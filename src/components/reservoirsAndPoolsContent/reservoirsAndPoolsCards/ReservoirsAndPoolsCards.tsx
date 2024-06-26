import { FC } from 'react';
import { motion } from 'framer-motion';

import { reservoirsAndPoolsData } from 'data/ReservoirsPoolsData';

import ReservoirsAndPoolsCard from './reservoirsAndPoolsCard/ReservoirsAndPoolsCard';

const ReservoirsAndPoolsCards: FC = () => {
    const cardsAnimation = {
        hidden: {
            y: 10,
            opacity: 0,
        },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                delay: 1.2,
                duration: 1,
                type: 'tween',
                ease: 'easeInOut',
            },
        },
    };
    return (
        <motion.div variants={cardsAnimation}>
            {reservoirsAndPoolsData.map((item, index) => (
                <ReservoirsAndPoolsCard
                    key={index}
                    title={item.title}
                    images={item.images}
                    list={item.list}
                    index={index}
                />
            ))}
        </motion.div>
    );
};

export default ReservoirsAndPoolsCards;
