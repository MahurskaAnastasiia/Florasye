import React from 'react';
import styles from './LogisticsTable.module.css';

const mockRoutes = [
    {
        id: 1,
        car: 'Renault Master (AA 1234 BK)',
        destination: 'Мукачево',
        cargoAmount: '38',
        status: 'Виконано',
        isDone: true,
    },
    {
        id: 2,
        car: 'Ford Transit (KA 9876 EX)',
        destination: 'с.Сільце',
        cargoAmount: '38',
        status: 'В дорозі',
        isDone: false,
    },
    {
        id: 3,
        car: 'Renault Master (AA 1234 BK)',
        destination: 'Мукачево',
        cargoAmount: '38',
        status: 'В дорозі',
        isDone: false,
    },
    {
        id: 4,
        car: 'Ford Transit (KA 9876 EX)',
        destination: 'с.Сільце',
        cargoAmount: '38',
        status: 'Виконано',
        isDone: true,
    },
];

export const LogisticsTable = () => {
    return (
        <div className={styles.container}>
            <div className={styles.topBanner}>
                <div className={styles.titleCard}>Моніторинг логістики</div>
                <button className={styles.btnCreate}>+ Створити рейс</button>
            </div>

            <div className={styles.tableCard}>
                <table className={styles.table}>
                    <thead>
                    <tr>
                        <th>№ РЕЙСУ</th>
                        <th>ЗАКРІПЛЕНЕ АВТО</th>
                        <th>КІНЦЕВА ТОЧКА</th>
                        <th>КІЛЬКІСТЬ ВАНТАЖУ</th>
                        <th>СТАТУС ЗАМОВЛЕННЯ</th>
                    </tr>
                    </thead>
                    <tbody>
                    {mockRoutes.map((route) => (
                        <tr key={route.id}>
                            <td className={styles.routeNumber}>{route.id}</td>
                            <td className={styles.carInfo}>{route.car}</td>
                            <td>
                                <span className={styles.locationBadge}>
                                    {route.destination}
                                </span>
                            </td>
                            <td>
                                <div className={styles.cargoBadge}>
                                    <span className={styles.cargoAmount}>
                                        {route.cargoAmount}
                                    </span>
                                    <span>штук</span>
                                </div>
                            </td>
                            <td>
                                <span
                                    className={`${styles.statusBadge} ${
                                        route.isDone ? styles.statusDone : styles.statusInTransit
                                    }`}
                                >
                                    {route.status}
                                </span>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};