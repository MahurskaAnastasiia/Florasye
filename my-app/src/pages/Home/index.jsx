import React from 'react';
import Header from '../../components/common/Header';
import DashboardMetrics from '../../components/dashboard/DashboardMetrics';
import heroBg from '../../assets/Flor.jpeg';
import styles from './Home.module.css';

export const HomePage = ({ onNavigate }) => {
    return (
        <div className={styles.page}>
            <Header onNavigate={onNavigate} />

            <div
                className={styles.hero}
                style={{
                    backgroundImage: `url(${heroBg})`,
                }}
            >
                <h1 className={styles.heroTitle}>FLORASYE</h1>
            </div>

            <DashboardMetrics />
        </div>
    );
};
export default HomePage;