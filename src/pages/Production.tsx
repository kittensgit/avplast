import { FC } from 'react';

import Cards from 'components/cards/Cards';

import cardsData from 'data/CardsData';

const Production: FC = () => {
    return (
        <div className="container">
            <Cards cardsData={cardsData.slice(3)} />
        </div>
    );
};

export default Production;
