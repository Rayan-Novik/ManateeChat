import React from 'react';
import { Link } from 'react-scroll';
import logo from '../assets/logo blog.png';
import WhatsAppButton from './WhatsAppButton';

const Header = ({ darkMode, setDarkMode }) => {
  return (
    <>
      <header className="navbar navbar-expand-lg navbar-dark fixed-top" style={{ backgroundColor: '#5700f2', padding: '15px 0' }}>
        <div className="container">
          <a className="navbar-brand" href="#">
            <img
              src={logo}
              alt="ManateeChat Logo"
              style={{ height: "40px", cursor: "pointer" }}
            />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link to="hero" smooth={true} duration={500} className="nav-link" style={{ color: '#fff', cursor: 'pointer' }}>Início</Link>
              </li>
              <li className="nav-item">
                <Link to="features" smooth={true} duration={500} className="nav-link" style={{ color: '#fff', cursor: 'pointer' }}>Recursos</Link>
              </li>
              <li className="nav-item">
                <Link to="plans" smooth={true} duration={500} className="nav-link" style={{ color: '#fff', cursor: 'pointer' }}>Planos</Link>
              </li>
              <li className="nav-item">
                <Link to="contact" smooth={true} duration={500} className="nav-link" style={{ color: '#fff', cursor: 'pointer' }}>Contato</Link>
              </li>
              <li className="nav-item">
                <Link to="downloads" smooth={true} duration={500} className="nav-link" style={{ color: '#fff', cursor: 'pointer' }}>Downloads</Link>
              </li>
              <li className="nav-item">
                <a
                  href="https://coffeechat.ecommercerpool.shop/#/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-link"
                  style={{ color: '#fff', cursor: 'pointer' }}
                >
                  Acessar Painel
                </a>
              </li>
            </ul>
            <li className="nav-item d-flex align-items-center ms-3">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="btn btn-sm"
                style={{
                  backgroundColor: darkMode ? '#fff' : '#5700f2',
                  color: darkMode ? '#5700f2' : '#fff',
                  border: '1px solid #fff',
                  padding: '6px 12px',
                  fontWeight: 'bold',
                }}
              >
                {darkMode ? 'Modo Claro' : 'Modo Escuro'}
              </button>
            </li>
          </div>
        </div>
      </header>

      {/* Botão Flutuante do WhatsApp */}
      <WhatsAppButton />
    </>
  );
};

export default Header;
