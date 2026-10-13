import React from 'react';
import styles from './Header.module.css';

const LogoIcon = () => (
    <svg width="68" height="62" viewBox="0 0 91 85" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.logoSvg}>
        <path d="M44.6595 1C18.6007 16.75 5.57132 43 44.6595 85C83.7477 43 70.7183 16.75 44.6595 1Z" fill="white" fillOpacity="0.15"/>
        <path d="M44.6595 1C29.0242 19.375 29.0242 45.625 44.6595 66.625C60.2948 45.625 60.2948 19.375 44.6595 1Z" fill="white" fillOpacity="0.8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M44.6595 8.875V58.75" stroke="#7D933A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="2 2"/>
        <path d="M44.6595 66.625C21.2066 62.6875 2.96547 43 8.17723 22C23.8125 22 36.8419 40.375 44.6595 66.625Z" fill="white" fillOpacity="0.9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M18.6007 27.25C25.5498 36 32.0645 44.75 38.1448 53.5" stroke="#7D933A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M44.6595 66.625C68.1124 62.6875 86.3536 43 81.1418 22C65.5066 22 52.4772 40.375 44.6595 66.625Z" fill="white" fillOpacity="0.9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M47.0866 64.3738C62.5219 70.866 82.6768 64.1757 89.9702 47.2861C80.9669 41.1044 64.4564 48.9284 47.0866 64.3738Z" fill="white" fillOpacity="0.9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M43.8361 64.4367C28.382 70.8844 8.2466 64.1361 1.00249 47.2255C10.0238 41.0697 26.5114 48.9413 43.8361 64.4367Z" fill="white" fillOpacity="0.9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M70.7183 27.25C63.7693 36 57.2546 44.75 51.1742 53.5" stroke="#7D933A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M44.6595 66.625C37.7105 56.125 32.4987 47.375 29.0242 40.375" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M27.7213 42.3438C29.5203 42.3438 30.9787 40.8747 30.9787 39.0625C30.9787 37.2503 29.5203 35.7812 27.7213 35.7812C25.9223 35.7812 24.464 37.2503 24.464 39.0625C24.464 40.8747 25.9223 42.3438 27.7213 42.3438Z" fill="white" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M44.6595 66.625C44.6595 54.375 44.6595 43.875 44.6595 35.125" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M44.6595 35.7812C46.4585 35.7812 47.9169 34.3122 47.9169 32.5C47.9169 30.6878 46.4585 29.2188 44.6595 29.2188C42.8605 29.2188 41.4022 30.6878 41.4022 32.5C41.4022 34.3122 42.8605 35.7812 44.6595 35.7812Z" fill="white" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M44.6595 66.625C51.6085 56.125 56.8203 47.375 60.2948 40.375" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M61.5977 42.3438C63.3967 42.3438 64.8551 40.8747 64.8551 39.0625C64.8551 37.2503 63.3967 35.7812 61.5977 35.7812C59.7987 35.7812 58.3404 37.2503 58.3404 39.0625C58.3404 40.8747 59.7987 42.3438 61.5977 42.3438Z" fill="white" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M44.6595 66.625C31.6301 75.8125 18.6007 79.75 12.086 71.875C15.9948 61.375 29.0242 61.375 44.6595 66.625Z" fill="white" fillOpacity="0.5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M44.6595 66.625C57.6889 75.8125 70.7183 79.75 77.233 71.875C73.3242 61.375 60.2948 61.375 44.6595 66.625Z" fill="white" fillOpacity="0.5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

export const Header = ({ onNavigate }) => {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <LogoIcon />
                <span className={styles.logoText}>Florasye</span>
            </div>
            <nav className={styles.nav}>
                <button onClick={() => onNavigate && onNavigate('home')}>
                    Головна
                </button>
                <button onClick={() => onNavigate && onNavigate('warehouse')}>
                    Склад & Фінанси
                </button>
                <button onClick={() => onNavigate && onNavigate('logistics')}>
                    Логістика
                </button>
                <button className={styles.signInBtn} onClick={() => onNavigate && onNavigate('login')}>
                    Sign in
                </button>
            </nav>
        </header>
    );
};
export default Header;