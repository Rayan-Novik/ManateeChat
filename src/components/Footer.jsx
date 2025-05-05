import React from 'react';
import logo from '../assets/logo blog.png';
import background from '../assets/backgroundboi.png'; // importa sua imagem

const Footer = () => {
  return (
    <footer
      id="footer"
      className="footer"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        transition: 'background-image 1s ease-in-out',
        color: 'white'
      }}
    >
      <div className="container py-5 text-white text-center">
        <img
          src={logo}
          alt="ManateeChat Logo"
          style={{ height: '60px', marginBottom: '20px' }}
        />
        <div className="row justify-content-center">
          {/* Informações sobre a empresa */}
          <div className="col-md-4 mb-4">
            <p className="fw-bold">ManateeChat</p>
            <p>
              O ManateeChat é a solução ideal para melhorar a comunicação da sua empresa através do WhatsApp com automação inteligente.
            </p>
          </div>

          {/* Contatos */}
          <div className="col-md-4 mb-4">
            <h5 className="text-uppercase mb-3">Contatos</h5>
            <ul className="list-unstyled">
              <li>
                <a href="mailto:contato@manateechat.shop" className="text-white text-decoration-none">
                  <i className="fas fa-envelope me-2"></i> contato@manateechat.shop
                </a>
              </li>
              <li>
                <a href="tel:+5565996282769" className="text-white text-decoration-none">
                  <i className="fas fa-phone-alt me-2"></i> +55 (65) 99628-2769
                </a>
              </li>
            </ul>
          </div>

          {/* Redes Sociais */}
          <div className="col-md-4 mb-4">
            <h5 className="text-uppercase mb-3">Siga-nos</h5>
            <div className="d-flex justify-content-center gap-3">
              <a href="https://facebook.com" className="text-white" aria-label="Facebook">
                <i className="fab fa-facebook fa-2x"></i>
              </a>
              <a href="https://twitter.com" className="text-white" aria-label="Twitter">
                <i className="fab fa-twitter fa-2x"></i>
              </a>
              <a href="https://instagram.com" className="text-white" aria-label="Instagram">
                <i className="fab fa-instagram fa-2x"></i>
              </a>
              <a href="https://linkedin.com" className="text-white" aria-label="LinkedIn">
                <i className="fab fa-linkedin fa-2x"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Direitos autorais */}
        <div className="mt-4">
          <p className="mb-1">&copy; 2025 <strong>ManateeChat</strong>. Todos os direitos reservados.</p>
          <p>Desenvolvido com ♥ pela equipe ManateeChat</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
