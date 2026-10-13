import React, { useState } from 'react';
import { HomePage } from './pages/Home';
import { WarehousePage } from './pages/Warehouse';
import { LogisticsPage } from './pages/Logistics';
import { LoginPage } from './pages/Login';

export default function App() {
    const [currentPage, setCurrentPage] = useState('home');

    const renderPage = () => {
        switch (currentPage) {
            case 'home':
                return <HomePage onNavigate={setCurrentPage} />;
            case 'warehouse':
                return <WarehousePage onNavigate={setCurrentPage} />;
            case 'logistics':
                return <LogisticsPage onNavigate={setCurrentPage} />;
            case 'login':
                return <LoginPage onNavigate={setCurrentPage} />;
            default:
                return <HomePage onNavigate={setCurrentPage} />;
        }
    };
    return <>{renderPage()}</>;
}