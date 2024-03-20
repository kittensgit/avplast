import { FC } from 'react';

import Cards from 'components/common/cards/Cards';

import cardsData from 'data/CardsData';

const Services: FC = () => {
    return (
        <div className="container">
            <Cards cardsData={cardsData.slice(0, 3)} />
        </div>
    );
};

export default Services;
