import React from 'react';
import './AboutUs.css';
import logo from '../assets/logoblogroxo.png'; // ajuste o caminho conforme a estrutura do seu projeto

import {
  FaWhatsapp,
  FaRocket,
  FaStore,
  FaCashRegister
} from 'react-icons/fa';

export default function AboutUs() {
  return (
    <div className="container py-5 fade-in">
      <div className="text-center mb-5">
        <img src={logo} alt="Logo do sistema" width={70} className="mb-3" />
        <h1 className="display-5 fw-bold text-main">Sobre o Sistema de WhatsApp</h1>
        <p className="lead text-muted">
          Um sistema inteligente criado para modernizar e escalar o atendimento via WhatsApp.
        </p>
      </div>

      <div className="row justify-content-center mb-5">
        <div className="col-lg-10">
          <div className="p-4 rounded shadow-sm fade-in text-center">
            <p className="fs-5 mb-3">
              Nossa plataforma conecta empresas ao WhatsApp de maneira prática, oferecendo controle total de conversas, automações com IA e integração com outras ferramentas.
            </p>
            <p className="fs-5 mb-3">
              Tudo isso em um ambiente unificado, pensado para facilitar o dia a dia do seu time de atendimento e garantir a melhor experiência para seus clientes.
            </p>
            <p className="fs-5">
              É mais do que um sistema de mensagens: é um hub de relacionamento completo.
            </p>
          </div>
        </div>
      </div>

      <div className="text-center mb-4">
        <FaRocket size={40} className="text-main mb-2" />
        <h3 className="fw-bold text-main">Visão para o Futuro</h3>
        <p className="text-muted">Nosso roadmap está cheio de novidades incríveis.</p>
      </div>

      <div className="row justify-content-center">
        <div className="col-md-5 mb-4">
          <div className="card text-center border-main shadow-sm card-hover h-100 fade-in rounded-4">
            <div className="card-body">
              <FaStore size={30} className="text-main mb-2" />
              <h5 className="card-title ">Integração com E-commerce</h5>
              <p className="card-text">
                Conecte seu sistema de vendas online ao WhatsApp para acompanhar pedidos, suporte e relacionamento.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-5 mb-4">
          <div className="card text-center border-main shadow-sm card-hover h-100 fade-in rounded-4">
            <div className="card-body">
              <FaCashRegister size={30} className="text-main mb-2" />
              <h5 className="card-title">PDV (Ponto de Venda)</h5>
              <p className="card-text">
                Em breve, o sistema permitirá integração com frente de caixa, levando o atendimento até o balcão físico.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mt-5 fade-in">
        <p className="text-muted">
          O futuro do atendimento passa pelo WhatsApp — e a gente leva você até lá com tecnologia, automação e visão de negócio.
        </p>
      </div>
    </div>
  );
}
