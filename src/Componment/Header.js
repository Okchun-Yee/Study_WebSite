// Header.js
import { Link } from 'react-router-dom';
import styles from './Section.module.css';

export default function Header() {
    return (
        <div className={styles.header}>
            <div className={styles.logo}>
                <Link to="/" className={styles.home}>Home</Link>
            </div>
            <div className={styles.menu}>
                <Link to="/Todaystudy" className={styles.link}>Today Study</Link>
                <Link to="/Shared" className={styles.link}>Code Shared</Link>
                <Link to="/Discord" className={styles.link}>Discord</Link>
            </div>
        </div>
    );
}
