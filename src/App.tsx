import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';

import Header from 'components/header/Header';
import Footer from 'components/footer/Footer';

import Home from 'pages/Home';
import Services from 'pages/Services';
import ReservoirsAndPools from 'pages/ReservoirsAndPools';
import PlasticTanksRepair from 'pages/PlasticTanksRepair';
import RotaryMolding from 'pages/RotaryMolding';
import Production from 'pages/Production';
import PontoonSystems from 'pages/PontoonSystems';
import Agriculture from 'pages/Agriculture';

const App: FC = () => {
    return (
        <div className="app">
            <Header />
            <main className="main_wrapper">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/production" element={<Production />} />
                    <Route
                        path="/services/remont-plastikovykh-bakov"
                        element={<PlasticTanksRepair />}
                    />
                    <Route
                        path="/services/izgotavlenie-rezervuarov-i-basseinov"
                        element={<ReservoirsAndPools />}
                    />
                    <Route
                        path="/services/proizvodstvo-metodom-rotacionnogo-formovaniya"
                        element={<RotaryMolding />}
                    />
                    <Route
                        path="/production/pontonnye-sistemy-moduli-plavuchesti-poplavki"
                        element={<PontoonSystems />}
                    />
                    <Route
                        path="/production/polymer-products-agriculture"
                        element={<Agriculture />}
                    />
                    <Route path="/production/plastikovye-emkosti-baki-bochki" />
                    <Route path="*" element={<div>Not Found Page</div>} />
                </Routes>
            </main>
            <Footer />
        </div>
    );
};

export default App;
