import React from 'react';
import { FaStoreAlt, FaWhatsapp, FaEnvelope, FaPhoneAlt, FaHandshake, FaCheckCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';

const PaginaRevenda = ({ darkMode }) => {
  const cardBg = darkMode ? 'bg-dark text-light border border-secondary' : 'bg-white text-dark border shadow';
  const cardStyle = {
    minHeight: '100%',
    borderRadius: '1rem',
    padding: '2rem',
  };

  const textMuted = darkMode ? 'text-light' : 'text-muted';

  return (
    <section className="py-5 px-3 px-md-5">
      <div className="container">
        <motion.div
          className="text-center mb-5"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="mb-5" style={{ color: '#5700f2' }}>Programa de Revenda Oficial</h2>
          <p className={`fs-5 ${textMuted}`}>
            Seja nosso parceiro e leve tecnologia de ponta para seus clientes.
          </p>
        </motion.div>

        <div className="row g-4">
          <motion.div
            className="col-lg-6 d-flex"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className={`${cardBg} w-100`} style={cardStyle}>
              <h4 className="mb-4 d-flex align-items-center gap-2">
                <FaHandshake className="text-purple" />
                Benefícios da Revenda
              </h4>
              <ul className="list-unstyled fs-6 ps-1">
                <li className="mb-3 d-flex align-items-center">
                  <FaCheckCircle className="text-success me-2" />
                  Preço especial para revendedores
                </li>
                <li className="mb-3 d-flex align-items-center">
                  <FaCheckCircle className="text-success me-2" />
                  Suporte técnico especializado
                </li>
                <li className="mb-3 d-flex align-items-center">
                  <FaCheckCircle className="text-success me-2" />
                  Margem de lucro personalizável
                </li>
                <li className="mb-3 d-flex align-items-center">
                  <FaCheckCircle className="text-success me-2" />
                  Painel com funcionalidades avançadas
                </li>
                <li className="mb-3 d-flex align-items-center">
                  <FaCheckCircle className="text-success me-2" />
                  Parceria de longo prazo
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            className="col-lg-6 d-flex"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className={`${cardBg} w-100`} style={cardStyle}>
              <h4 className="mb-4 d-flex align-items-center gap-2">
                <FaEnvelope className="text-purple" />
                Entre em Contato
              </h4>
              <p className={`mb-4 ${textMuted}`}>
                Fale com nossa equipe e tire suas dúvidas sobre como se tornar um revendedor.
              </p>
              <div className="d-flex flex-column gap-3">
                <a
                  href="https://wa.me/5565996282769"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-lg text-white"
                  style={{ backgroundColor: '#5700f2' }}
                >
                  <FaWhatsapp className="me-2" />
                  WhatsApp
                </a>
                <a
                  href="mailto:contato@manateechat.shop"
                  className="btn btn-lg text-white"
                  style={{ backgroundColor: '#5700f2' }}
                >
                  <FaEnvelope className="me-2" />
                  E-mail
                </a>
                <a
                  href="tel:+5565996282769"
                  className="btn btn-lg text-white"
                  style={{ backgroundColor: '#5700f2' }}
                >
                  <FaPhoneAlt className="me-2" />
                  Telefone
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PaginaRevenda;
