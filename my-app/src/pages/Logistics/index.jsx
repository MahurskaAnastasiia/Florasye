import React from 'react';
import { Header } from '../../components/common/Header';
import { LogisticsTable } from '../../components/logistics/LogisticsTable';
import styles from './Logistics.module.css';

export const LogisticsPage = ({ onNavigate }) => {
    return (
        <div className={styles.page}>
            <Header onNavigate={onNavigate} />
            <LogisticsTable />
        </div>
    );
};