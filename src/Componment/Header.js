// Componment/Header
import { Link, Route, Routes } from 'react-router-dom';
import Discord from './Discord';
import Main_Section from './Main_section';
import styles from './Section.module.css';
import Shared from './Shared';
import Todaystudy from './Todaystudy';

export default function Header() {
    return (
        <div>
            <div className={styles.header}>
                <div className={styles.logo}>
                    <Link to="/ " className={styles.home}>Home</Link>
                </div>
                <div className={styles.menu}>
                    <Link to="/Todaystudy" className={styles.link}>Today Study</Link>
                    <Link to="/Shared" className={styles.link}>Code Shared</Link>
                    <Link to="/Discord" className={styles.link}>Discord</Link>
                </div>
            </div>
            <Routes>
                <Route path="/" element={<Main_Section />} />
                <Route path="/Todaystudy" element={<Todaystudy />} />
                <Route path="/Discord" element={<Discord />} />
                <Route path="/Shared" element={<Shared />} />
            </Routes>
        </div>
    )
}