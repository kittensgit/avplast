import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';

import Header from 'components/header/Header';

import Home from 'pages/Home';

const App: FC = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<div>Not Found Page</div>} />
            </Routes>
        </>
    );
};

export default App;
