import React from "react";
import { motion } from "framer-motion"; // Importando animações
import "./Features.css"; // Importando CSS customizado
import {
  FaTrello, FaPlug, FaRobot, FaMicrochip, FaTasks, FaFilePdf,
  FaClipboardList, FaStickyNote, FaExchangeAlt, FaHistory, FaSearch,
  FaStar, FaMicrophoneAlt, FaUsers, FaHeadset
} from "react-icons/fa"; // Importando ícones

const featuresData = [
  { icon: FaTrello, title: "Kanban", text: "Organize suas tarefas e atendimentos de forma visual e eficiente." },
  { icon: FaPlug, title: "Integração WebHook/N8N", text: "Conecte-se facilmente a outras ferramentas através de WebHooks e N8N." },
  { icon: FaRobot, title: "TypeBot", text: "Automatize seu atendimento com chatbots baseados em IA." },
  { icon: FaMicrochip, title: "Groq", text: "Integração com a plataforma Groq para análise avançada de dados." },
  { icon: FaTasks, title: "Tarefas", text: "Gerencie tarefas e mantenha o controle de todas as suas atividades." },
  { icon: FaFilePdf, title: "Geração de PDF Atendimento", text: "Gere relatórios e documentos em PDF sobre os atendimentos realizados." },
  { icon: FaClipboardList, title: "Relatório de Tickets", text: "Acesse relatórios detalhados sobre os tickets abertos e atendidos." },
  { icon: FaStickyNote, title: "Anotações em Tickets", text: "Adicione anotações aos tickets para registrar informações importantes." },
  { icon: FaExchangeAlt, title: "Transferir Atendimento para ChatBot", text: "Redirecione o atendimento para o chatbot para resolver questões simples." },
  { icon: FaHistory, title: "Histórico de Mensagens", text: "Acesse o histórico completo de mensagens trocadas com os clientes." },
  { icon: FaSearch, title: "DeepSeek", text: "Encontre insights poderosos usando a plataforma DeepSeek." },
  { icon: FaStar, title: "Avaliação de Atendimento", text: "Avalie a qualidade do atendimento prestado pelos seus agentes." },
  { icon: FaMicrophoneAlt, title: "Transcrição de Áudio", text: "Transcreva automaticamente áudios para facilitar o registro de atendimentos." },
  { icon: FaUsers, title: "Mensagens Separadas por Filas", text: "Organize as mensagens em filas para facilitar o gerenciamento." },
  { icon: FaHeadset, title: "Suporte 24h/7", text: "Nosso time de suporte está disponível 24 horas por dia, 7 dias por semana, para garantir a melhor experiência." }
];

const Features = () => {
  return (
    <section id="features" className="features py-5">
      <div className="container text-center">
        <motion.h2
          className="mb-5 features-title"
          style={{ color: "#5700f2" }}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Recursos
        </motion.h2>

        <div className="row">
          {featuresData.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="col-md-4 col-sm-6 mb-4">
                <motion.div
                  className="card shadow-sm h-100 features-card rounded-4" // <-- borda arredondada
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="card-body text-center">
                    <Icon className="fa-3x mb-3 feature-icon" />
                    <h5 className="card-title features-title">{feature.title}</h5>
                    <p className="card-text">{feature.text}</p>
                  </div>
                </motion.div>
              </div>

            );
          })}
        </div>
      </div>

      {/* Adicionando estilos para corrigir o hover */}
      <style jsx>{`
        .features-title:hover {
          color: #fff !important; /* Garantindo que o título fique branco no hover */
          transition: color 0.3s ease;
        }
        .Icon:hover {
          color: #fff !important; /* Garantindo que o título fique branco no hover */
          transition: color 0.3s ease;
        }

        .nav-link:hover {
          color: #5700f2 !important;
          transition: color 0.3s ease;
        }

        .whatsapp-float-button:hover {
          transform: scale(1.1);
          background-color: #5700f2;
        }
      `}</style>
    </section>
  );
};

export default Features;