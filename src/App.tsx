import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';

import Header from 'components/header/Header';
import Footer from 'components/footer/Footer';

import Home from 'pages/Home';
import Services from 'pages/Services';
import ReservoirsAndPools from 'pages/ReservoirsAndPools';
import PlasticTanksRepair from 'pages/PlasticTanksRepair';
import RotaryMolding from 'pages/RotaryMolding';

const App: FC = () => {
    return (
        <div className="app">
            <Header />
            <main className="main_wrapper">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/services" element={<Services />} />
                    <Route
                        path="/remont-plastikovykh-bakov"
                        element={<PlasticTanksRepair />}
                    />
                    <Route
                        path="/izgotavlenie-rezervuarov-i-basseinov"
                        element={<ReservoirsAndPools />}
                    />
                    <Route
                        path="/proizvodstvo-metodom-rotacionnogo-formovaniya"
                        element={<RotaryMolding />}
                    />
                    <Route path="*" element={<div>Not Found Page</div>} />
                </Routes>
            </main>
            <Footer />
        </div>
    );
};

export default App;
