import { FC, Suspense, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import Header from 'components/common/header/Header';
import Footer from 'components/common/footer/Footer';
import ScrollBtn from 'components/common/scrollBtn/ScrollBtn';

import { routes } from 'routes/routes';

const App: FC = () => {
    const [showScrollButton, setShowScrollButton] = useState<boolean>(false);

    useEffect(() => {
        const handleScroll = () => {
            const headerElement = document.getElementsByTagName('header')[0];
            if (headerElement) {
                if (window.scrollY > headerElement.clientHeight) {
                    setShowScrollButton(true);
                } else {
                    setShowScrollButton(false);
                }
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="app">
            <Header />
            <main className="main_wrapper">
                <Suspense fallback={<div>Loading...</div>}>
                    <Routes>
                        {routes.map((route, index) => (
                            <Route
                                key={index}
                                path={route.path}
                                element={<route.component />}
                            />
                        ))}
                        <Route path="*" element={<div>Not Found Page</div>} />
                    </Routes>
                </Suspense>
                <ScrollBtn showScrollButton={showScrollButton} />
            </main>
            <Footer />
        </div>
    );
};

export default App;
