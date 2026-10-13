import React from 'react';
import styles from './DashboardMetrics.module.css';

const RevenueIcon = () => (
    <svg viewBox="0 0 135 131" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.revenueIcon}>
        <path d="M77.625 21.8333H55.125C52.6397 21.8333 50.625 23.7883 50.625 26.2V69.8666C50.625 72.2783 52.6397 74.2333 55.125 74.2333H77.625C80.1103 74.2333 82.125 72.2783 82.125 69.8666V26.2C82.125 23.7883 80.1103 21.8333 77.625 21.8333Z" fill="#D9EDA9" stroke="#FEFEFE" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M58.5 28.3833H74.25" stroke="#FEFEFE" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M70.875 28.3833H48.375C45.8897 28.3833 43.875 30.3383 43.875 32.75V76.4166C43.875 78.8283 45.8897 80.7833 48.375 80.7833H70.875C73.3603 80.7833 75.375 78.8283 75.375 76.4166V32.75C75.375 30.3383 73.3603 28.3833 70.875 28.3833Z" fill="#D9EDA9" stroke="#FEFEFE" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M64.125 34.9333H41.625C39.1397 34.9333 37.125 36.8883 37.125 39.3V82.9666C37.125 85.3783 39.1397 87.3333 41.625 87.3333H64.125C66.6103 87.3333 68.625 85.3783 68.625 82.9666V39.3C68.625 36.8883 66.6103 34.9333 64.125 34.9333Z" fill="#D9EDA9" stroke="#FEFEFE" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M65.25 92.7916C70.2206 92.7916 74.25 90.8366 74.25 88.425C74.25 86.0133 70.2206 84.0583 65.25 84.0583C60.2794 84.0583 56.25 86.0133 56.25 88.425C56.25 90.8366 60.2794 92.7916 65.25 92.7916Z" fill="#D9EDA9" stroke="#FEFEFE" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M51.75 97.1583C56.7206 97.1583 60.75 95.2033 60.75 92.7917C60.75 90.38 56.7206 88.425 51.75 88.425C46.7794 88.425 42.75 90.38 42.75 92.7917C42.75 95.2033 46.7794 97.1583 51.75 97.1583Z" fill="#D9EDA9" stroke="#FEFEFE" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M76.5 98.25C81.4706 98.25 85.5 96.295 85.5 93.8833C85.5 91.4717 81.4706 89.5167 76.5 89.5167C71.5294 89.5167 67.5 91.4717 67.5 93.8833C67.5 96.295 71.5294 98.25 76.5 98.25Z" fill="#D9EDA9" stroke="#FEFEFE" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

const WarningIcon = () => (
    <svg viewBox="0 0 92 88" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.warningIcon}>
        <path d="M46 16.8666L75.1333 70.4H16.8667L46 16.8666Z" fill="#D9EDA9" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M46 33V55V33Z" fill="black"/>
        <path d="M46 33V55" stroke="white" strokeWidth="4" strokeLinecap="round"/>
        <path d="M46 65C47.1046 65 48 64.1046 48 63C48 61.8954 47.1046 61 46 61C44.8954 61 44 61.8954 44 63C44 64.1046 44.8954 65 46 65Z" fill="white"/>
    </svg>
);

export function DashboardMetrics() {
    return (
        <section className={styles.container}>
            <div className={styles.card}>
                <h3 className={styles.title}>ЗАГАЛЬНА ВИРУЧКА</h3>
                <div className={styles.cardBody}>
                    <span className={styles.value}>1238.89₴</span>
                </div>
                <RevenueIcon />
            </div>

            <div className={styles.card}>
                <h3 className={styles.title}>ВІДСОТОК БРАКУ</h3>
                <div className={styles.cardBody}>
                    <span className={styles.value}>12%</span>
                </div>
                <WarningIcon />
            </div>

            <div className={`${styles.card} ${styles.reportCard}`}>
                <h3 className={styles.reportTitle}>Звітність</h3>

                <div className={styles.metricGroup}>
                    <div className={styles.row}>
                        <span>ЗАГАЛЬНІ ПРОДАЖІ:</span>
                        <span>124.0₴</span>
                    </div>
                    <div className={styles.track}>
                        <div className={styles.fill} style={{ width: '45%' }}></div>
                    </div>
                </div>

                <div className={styles.metricGroup}>
                    <div className={styles.row}>
                        <span>Витрати:</span>
                        <span>124.0₴</span>
                    </div>
                    <div className={styles.track}>
                        <div className={styles.fill} style={{ width: '82%' }}></div>
                    </div>
                </div>

                <div className={styles.metricGroup}>
                    <div className={styles.row}>
                        <span>Брак:</span>
                        <span>124.0₴</span>
                    </div>
                    <div className={styles.track}>
                        <div className={styles.fill} style={{ width: '68%' }}></div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default DashboardMetrics;