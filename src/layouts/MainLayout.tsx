import React from 'react';
import { Header } from './partials/Header';
import { Footer } from './partials/Footer';

const MainLayout: React.FC = React.memo(({ children }) => (
    <div>
        <Header />
        {children}
        <Footer />
    </div>
));

export default MainLayout;
