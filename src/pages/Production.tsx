import { FC } from 'react';

import Cards from 'components/common/cards/Cards';

import cardsData from 'data/CardsData';

const Production: FC = () => {
    return (
        <div className="container">
            <div className="wrapper">
                <Cards cardsData={cardsData.slice(3)} />
            </div>
        </div>
    );
};

export default Production;
