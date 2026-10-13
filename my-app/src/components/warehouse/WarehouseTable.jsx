import React from 'react';
import styles from './WarehouseTable.module.css';

const FlowerIcon = () => (
    <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <circle cx="12" cy="5.5" r="3.5" fill="#F43F5E" />
        <circle cx="12" cy="18.5" r="3.5" fill="#F43F5E" />
        <circle cx="5.5" cy="12" r="3.5" fill="#F43F5E" />
        <circle cx="18.5" cy="12" r="3.5" fill="#F43F5E" />
        <circle cx="7.4" cy="7.4" r="3.5" fill="#F43F5E" />
        <circle cx="16.6" cy="16.6" r="3.5" fill="#F43F5E" />
        <circle cx="7.4" cy="16.6" r="3.5" fill="#F43F5E" />
        <circle cx="16.6" cy="7.4" r="3.5" fill="#F43F5E" />

        <circle cx="12" cy="6.8" r="2.2" fill="#FB7185" opacity="0.85" />
        <circle cx="12" cy="17.2" r="2.2" fill="#FB7185" opacity="0.85" />
        <circle cx="6.8" cy="12" r="2.2" fill="#FB7185" opacity="0.85" />
        <circle cx="17.2" cy="12" r="2.2" fill="#FB7185" opacity="0.85" />
        <circle cx="8.3" cy="8.3" r="2.2" fill="#FB7185" opacity="0.85" />
        <circle cx="15.7" cy="15.7" r="2.2" fill="#FB7185" opacity="0.85" />

        <circle cx="12" cy="12" r="3.5" fill="#FBBF24" />
        <circle cx="12" cy="12" r="2" fill="#F59E0B" />
    </svg>
);

const WasteFlowerIcon = () => (
    <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M13 21C13 16 11 13 8 10"
            stroke="#4D7C0F"
            strokeWidth="3"
            strokeLinecap="round"
        />
        <path
            d="M11 16C8 16 6 14 6 12"
            stroke="#4D7C0F"
            strokeWidth="2.5"
            strokeLinecap="round"
        />
        <ellipse cx="8" cy="9.5" rx="3" ry="2" fill="#B45309" />

        <path
            d="M8 8C6 6 4 7 5 4.5C6.5 2 9 3 9.5 5.5C10 3.5 12 3 13.5 5C14.5 7 12.5 7 10 8.5Z"
            fill="#BE123C"
        />
        <path
            d="M5.5 9.5C3.5 9 3 7.5 5 7C7 6.5 8 8 7.5 9.5Z"
            fill="#BE123C"
        />
        <path
            d="M10.5 9.5C12.5 9 13 7.5 11 7C9 6.5 8.5 8 9 9.5Z"
            fill="#BE123C"
        />
    </svg>
);

const mockFlowers = [
    {
        id: 1,
        name: 'Red Naomi 70cm',
        category: 'Троянда',
        count: '1,200 шт.',
        buyPrice: '35.00 ₴',
        sellPrice: '80.00 ₴',
        expiry: '2 дні (критично)',
        isCritical: true,
    },
    {
        id: 2,
        name: 'Yellow Queen',
        category: 'Тюльпан',
        count: '850 шт.',
        buyPrice: '18.00 ₴',
        sellPrice: '45.00 ₴',
        expiry: '5 днів',
        isCritical: false,
    },
    {
        id: 3,
        name: 'Sarah Bernhardt',
        category: 'Півонія',
        count: '420 шт.',
        buyPrice: '60.00 ₴',
        sellPrice: '140.00 ₴',
        expiry: '7 днів',
        isCritical: false,
    },
];

export const WarehouseTable = () => {
    return (
        <div className={styles.container}>
            <div className={styles.topPanel}>
                <input
                    type="text"
                    className={styles.searchInput}
                    placeholder="Вікно пошуку....."
                />

                <div className={styles.actionBtns}>
                    <button className={styles.btnAddFlower}>
                        <span>ДОДАТИ КВІТИ</span>
                        <FlowerIcon />
                    </button>
                    <button className={styles.btnAddWaste}>
                        <span>ДОДАТИ БРАК</span>
                        <WasteFlowerIcon />
                    </button>
                </div>
            </div>

            <div className={styles.tableCard}>
                <table className={styles.table}>
                    <thead>
                    <tr>
                        <th>НАЗВА КВІТІВ</th>
                        <th>КІЛЬКІСТЬ</th>
                        <th>ЦІНА ЗАКУПКИ (₴)</th>
                        <th>ЦІНА ПРОДАЖУ (₴)</th>
                        <th>ТЕРМІН ПРИДАТНОСТІ</th>
                        <th>ДІЇ</th>
                    </tr>
                    </thead>
                    <tbody>
                    {mockFlowers.map((item) => (
                        <tr key={item.id}>
                            <td>
                                <div className={styles.flowerName}>{item.name}</div>
                                <div className={styles.flowerCategory}>{item.category}</div>
                            </td>
                            <td className={styles.amountText}>{item.count}</td>
                            <td className={styles.buyPrice}>{item.buyPrice}</td>
                            <td className={styles.sellPrice}>{item.sellPrice}</td>
                            <td>
                                    <span
                                        className={
                                            item.isCritical
                                                ? styles.badgeCritical
                                                : styles.badgeNormal
                                        }
                                    >
                                        {item.expiry}
                                    </span>
                            </td>
                            <td>
                                <button className={styles.btnDismiss}>Списати</button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};