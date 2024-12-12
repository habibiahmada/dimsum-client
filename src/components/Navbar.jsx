import logo from '../assets/logo.png';
import { useNavigate } from 'react-router-dom';
import CustomModal from './Modal';
import { useState } from 'react';

function Navbar() {
    const navigate = useNavigate();
    const [isNavOpen, setIsNavOpen] = useState(false);

    const handleToggle = () => {
        setIsNavOpen(!isNavOpen);
    };

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-warning sticky-top">
                <div className="container container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src={logo} className="d-inline-block align-text-top logo-img" alt="Logo" />
                    </a>
                    <div className="d-flex align-items-center">
                        <button 
                            className="navbar-toggler" 
                            type="button" 
                            data-bs-toggle="collapse" 
                            data-bs-target="#navbarNav" 
                            aria-controls="navbarNav" 
                            aria-expanded={isNavOpen ? 'true' : 'false'} 
                            aria-label="Toggle navigation"
                            onClick={handleToggle}
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className={`d-lg-none ms-3 ${isNavOpen ? 'disabled' : ''}`} style={{ pointerEvents: isNavOpen ? 'none' : 'auto' }}>
                            <CustomModal />
                        </div>
                    </div>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto d-flex align-items-center gap-4">
                            <li className="nav-item">
                                <a href="#" onClick={() => navigate('/')} className="nav-link text-dark fw-medium">Beranda</a>
                            </li>
                            <li className="nav-item">
                                <a href="#menu" onClick={() => navigate('/#menu')} className="nav-link text-dark fw-medium">Menu</a>
                            </li>
                            <li className="nav-item">
                                <a href="#tentang" onClick={() => navigate('/#tentang')} className="nav-link text-dark fw-medium">Tentang</a>
                            </li>
                        </ul>
                    </div>
                    <div className="d-none d-lg-block">
                        <CustomModal />
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
