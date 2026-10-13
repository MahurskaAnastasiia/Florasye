import React from 'react';
import Header from '../../components/common/Header';
import styles from './Warehouse.module.css';

const DefectIcon = () => (
    <svg width="32" height="24" viewBox="0 0 39 29" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M32.0983 27.0567C32.0983 8.55673 19.5983 -3.77661 10.8483 4.24006" stroke="#4D7C0F" strokeWidth="3.5" strokeLinecap="round"/>
        <path d="M29.5982 19.04C21.4732 20.2734 17.7232 26.44 22.7232 28.9067C25.8482 25.2067 28.9732 20.2734 29.5982 19.04Z" fill="#4D7C0F"/>
        <path d="M30.8483 11.64C38.3483 14.1067 40.8483 20.2733 37.0983 22.74C32.7233 19.04 30.8483 12.8733 30.8483 11.64Z" fill="#4D7C0F"/>
        <path d="M10.8482 4.23999C3.34819 10.4067 1.47319 21.5067 7.72319 23.9733C10.8482 19.04 10.8482 10.4067 10.8482 4.23999Z" fill="#BE123C"/>
        <path d="M10.8483 4.23999C15.8483 11.64 18.3483 21.5067 12.0983 23.9733C8.97326 19.04 10.8483 10.4067 10.8483 4.23999Z" fill="#BE123C"/>
        <path d="M10.8482 4.23999C-0.401785 7.32332 -2.90179 16.5733 3.34821 20.2733C7.72321 16.5733 10.8482 9.17332 10.8482 4.23999Z" fill="#BE123C"/>
        <path d="M10.8483 4.23999C20.2233 7.32332 23.3483 15.34 17.0983 19.6567C13.3483 15.34 10.8483 9.17332 10.8483 4.23999Z" fill="#BE123C"/>
        <path d="M10.8483 7.94004C12.9193 7.94004 14.5983 6.28349 14.5983 4.24004C14.5983 2.19659 12.9193 0.540039 10.8483 0.540039C8.7772 0.540039 7.09827 2.19659 7.09827 4.24004C7.09827 6.28349 8.7772 7.94004 10.8483 7.94004Z" fill="#B45309"/>
    </svg>
);

const FlowerIcon = () => (
    <svg width="28" height="28" viewBox="0 0 42 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21 20C14.9845 13 16.0782 3 21 0C25.9219 3 27.0156 13 21 20Z" fill="#F43F5E"/>
        <path d="M21 19.9999C24.6227 11.7368 34.6416 7.60282 39.9442 9.99994C39.5635 15.3971 30.6383 21.2631 21 19.9999Z" fill="#F43F5E"/>
        <path d="M21 19.9999C30.6382 18.7368 39.5634 24.6028 39.9441 29.9999C34.6416 32.397 24.6227 28.2631 21 19.9999Z" fill="#F43F5E"/>
        <path d="M21 20C27.0155 27 25.9218 37 21 40C16.0781 37 14.9844 27 21 20Z" fill="#F43F5E"/>
        <path d="M21 20.0001C17.3773 28.2632 7.35837 32.3972 2.05583 30.0001C2.43654 24.6029 11.3617 18.7369 21 20.0001Z" fill="#F43F5E"/>
        <path d="M21 20.0001C11.3618 21.2632 2.43657 15.3972 2.05586 10.0001C7.3584 7.60295 17.3773 11.7369 21 20.0001Z" fill="#F43F5E"/>
        <g opacity="0.85">
            <path d="M21.0001 20.0001C19.9456 13.67 24.7209 8.10782 28.6563 7.87577C30.4041 11.1078 27.5233 17.67 21.0001 20.0001Z" fill="#FB7185"/>
            <path d="M21 20.0001C26.4687 16.0001 34.1249 17.0001 36.3124 20.0001C34.1249 23.0001 26.4687 24.0001 21 20.0001Z" fill="#FB7185"/>
            <path d="M20.9999 20.0001C27.5231 22.3302 30.404 28.8924 28.6561 32.1244C24.7208 31.8924 19.9455 26.3302 20.9999 20.0001Z" fill="#FB7185"/>
            <path d="M21 20C22.0545 26.3301 17.2792 31.8923 13.3439 32.1244C11.596 28.8923 14.4769 22.3301 21 20Z" fill="#FB7185"/>
            <path d="M21 20C15.5313 24 7.8751 23 5.68762 20C7.8751 17 15.5313 16 21 20Z" fill="#FB7185"/>
            <path d="M21.0001 20.0001C14.4769 17.6699 11.596 11.1077 13.3439 7.87569C17.2792 8.10775 22.0545 13.6699 21.0001 20.0001Z" fill="#FB7185"/>
        </g>
        <path d="M21.0001 24.5C23.7183 24.5 25.9219 22.4853 25.9219 20C25.9219 17.5147 23.7183 15.5 21.0001 15.5C18.2818 15.5 16.0782 17.5147 16.0782 20C16.0782 22.4853 18.2818 24.5 21.0001 24.5Z" fill="#FBBF24"/>
        <path d="M21 23C22.8121 23 24.2812 21.6569 24.2812 20C24.2812 18.3431 22.8121 17 21 17C19.1878 17 17.7188 18.3431 17.7188 20C17.7188 21.6569 19.1878 23 21 23Z" fill="#F59E0B"/>
    </svg>
);

export const WarehousePage = ({ onNavigate }) => {
    return (
        <div className={styles.page}>
            <Header onNavigate={onNavigate} />

            <main className={styles.container}>
                <div className={styles.topBar}>
                    <input
                        type="text"
                        placeholder="Вікно пошуку....."
                        className={styles.searchInput}
                    />

                    <div className={styles.actionsGroup}>
                        <button className={styles.addFlowersBtn}>
                            ДОДАТИ КВІТИ <FlowerIcon />
                        </button>
                        <button className={styles.addDefectBtn}>
                            ДОДАТИ БРАК <DefectIcon />
                        </button>
                    </div>
                </div>

                <div className={styles.tableCard}>
                    <div className={styles.tableHeader}>
                        <div className={styles.colName}>НАЗВА КВІТІВ</div>
                        <div className={styles.colQty}>КІЛЬКІСТЬ</div>
                        <div className={styles.colPriceBuy}>ЦІНА ЗАКУПКИ (₴)</div>
                        <div className={styles.colPriceSell}>ЦІНА ПРОДАЖУ (₴)</div>
                        <div className={styles.colExpiry}>ТЕРМІН ПРИДАТНОСТІ</div>
                        <div className={styles.colActions}>ДІЇ</div>
                    </div>

                    <div className={styles.tableBody}>
                        <div className={styles.tableRow}>
                            <div className={styles.colName}>
                                <div className={styles.flowerTitle}>Red Naomi 70cm</div>
                                <div className={styles.flowerSub}>Троянда</div>
                            </div>
                            <div className={styles.colQty}>1,200 шт.</div>
                            <div className={styles.colPriceBuy}>35.00 ₴</div>
                            <div className={`${styles.colPriceSell} ${styles.greenPrice}`}>80.00 ₴</div>
                            <div className={styles.colExpiry}>
                                <span className={`${styles.badge} ${styles.badgeWarning}`}>2 дні (критично)</span>
                            </div>
                            <div className={styles.colActions}>
                                <button className={styles.removeBtn}>Списати</button>
                            </div>
                        </div>

                        <div className={styles.tableRow}>
                            <div className={styles.colName}>
                                <div className={styles.flowerTitle}>Yellow Queen</div>
                                <div className={styles.flowerSub}>Тюльпан</div>
                            </div>
                            <div className={styles.colQty}>850 шт.</div>
                            <div className={styles.colPriceBuy}>18.00 ₴</div>
                            <div className={`${styles.colPriceSell} ${styles.greenPrice}`}>45.00 ₴</div>
                            <div className={styles.colExpiry}>
                                <span className={`${styles.badge} ${styles.badgeGood}`}>5 днів</span>
                            </div>
                            <div className={styles.colActions}>
                                <button className={styles.removeBtn}>Списати</button>
                            </div>
                        </div>

                        <div className={styles.tableRow}>
                            <div className={styles.colName}>
                                <div className={styles.flowerTitle}>Sarah Bernhardt</div>
                                <div className={styles.flowerSub}>Півонія</div>
                            </div>
                            <div className={styles.colQty}>420 шт.</div>
                            <div className={styles.colPriceBuy}>60.00 ₴</div>
                            <div className={`${styles.colPriceSell} ${styles.greenPrice}`}>140.00 ₴</div>
                            <div className={styles.colExpiry}>
                                <span className={`${styles.badge} ${styles.badgeGood}`}>7 днів</span>
                            </div>
                            <div className={styles.colActions}>
                                <button className={styles.removeBtn}>Списати</button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default WarehousePage;