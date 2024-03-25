import { FC } from 'react';

import Cards from 'components/common/cards/Cards';

import cardsData from 'data/CardsData';

const Services: FC = () => {
    return (
        <div className="container">
            <div className="wrapper">
                <Cards cardsData={cardsData.slice(0, 3)} />
            </div>
        </div>
    );
};

export default Services;
