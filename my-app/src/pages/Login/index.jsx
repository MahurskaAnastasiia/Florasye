import React, { useState } from 'react';
import Header from '../../components/common/Header';
import styles from './Login.module.css';

export const LoginPage = ({ onNavigate }) => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (onNavigate) {
            onNavigate('home');
        }
    };

    return (
        <div className={styles.page}>
            <Header onNavigate={onNavigate} />

            <main className={styles.container}>
                <div className={styles.authCard}>
                    <h2 className={styles.title}>Авторизація</h2>
                    <p className={styles.subtitle}>
                        Увійдіть у систему FLORASYE
                    </p>

                    <form onSubmit={handleSubmit} className={styles.form}>
                        <div className={styles.inputGroup}>
                            <label htmlFor="email">Email / Логін</label>
                            <input
                                type="text"
                                id="email"
                                name="email"
                                placeholder="example@florasye.com"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className={styles.inputGroup}>
                            <label htmlFor="password">Пароль</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                placeholder="••••••••"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <button type="submit" className={styles.submitBtn}>
                            Увійти
                        </button>
                    </form>
                </div>
            </main>
        </div>
    );
};
export default LoginPage;