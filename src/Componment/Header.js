// Componment/Header
import { Link, Route, Routes } from 'react-router-dom';
import Footer from './Footer';
import Main_Section from './Main_section';
import Shared from './Shared';
import Todaystudy from './Todaystudy';

export default function Header() {
    return (
        <div>
            <div className='header'>
                <ul>
                    <li><Link to="/" className='logo'>Home</Link></li>
                    <li><Link to="/Todaystudy" className='link'>Today Study</Link></li>
                    <li><Link to="/Shared" className='link'>Code Shared</Link></li>
                    <li><Link to="/git Footer" className='link'>Discord</Link></li>
                </ul>
            </div>
            <Routes>
                <Route path="/" element={<Main_Section />} />
                <Route path="/Todaystudy" element={<Todaystudy />} />
                <Route path="/Footer" element={<Footer />} />
                <Route path="/Shared" element={<Shared />} />
            </Routes>
        </div>
    )
}