import React, { useState } from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Plans = () => {
  const contatos = {
    basico: "https://wa.me/+5565996282769?text=Gostaria%20de%20mais%20informações%20sobre%20o%20Plano%20Básico",
    avancado: "https://wa.me/+5565996282769?text=Gostaria%20de%20mais%20informações%20sobre%20o%20Plano%20Avançado",
    premium: "https://wa.me/+5565996282769?text=Gostaria%20de%20mais%20informações%20sobre%20o%20Plano%20Premium",
    personalizado: "https://wa.me/+5565996282769?text=Gostaria%20de%20mais%20informações%20sobre%20o%20Plano%20Personalizado",
  };

  const planAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    transition: { duration: 0.5, ease: 'easeInOut' }
  };

  const planos = [
    {
      nome: "Plano Básico",
      preco: "R$ 279,99/mês",
      precoOriginal: "R$ 399,99",
      descricao: "Ideal para pequenas empresas que buscam automatizar o atendimento com o básico de ferramentas.",
      link: contatos.basico,
      funcionalidades: [
        "Kanban: Organize suas tarefas de forma visual.",
        "TypeBot: Automatize seu atendimento com chatbots baseados em IA.",
        "Relatório de Tickets: Acesse relatórios básicos de tickets abertos e atendidos.",
        "Transferir Atendimento para ChatBot: Redirecione atendimentos simples para o chatbot.",
        "Histórico de Mensagens: Acesse o histórico de mensagens trocadas com os clientes.",
        "Avaliação de Atendimento: Avalie a qualidade do atendimento prestado pelos seus agentes."
      ],
      beneficios: [
        "5 usuários com acesso ao painel",
        "Até 1 número de WhatsApp",
        "Suporte por e-mail"
      ]
    },
    {
      nome: "Plano Avançado",
      preco: "R$ 459,99/mês",
      precoOriginal: "R$ 599,99",
      descricao: "Para empresas de médio porte que precisam de integração e funcionalidades adicionais para maior controle e personalização.",
      link: contatos.avancado,
      funcionalidades: [
        "Kanban: Organize suas tarefas de forma visual.",
        "Integração WebHook/N8N: Conecte-se facilmente a outras ferramentas.",
        "TypeBot: Automatize seu atendimento com chatbots baseados em IA.",
        "Groq: Integração com a plataforma Groq para análise avançada de dados.",
        "Tarefas: Gerencie suas tarefas e mantenha o controle das atividades.",
        "Geração de PDF Atendimento: Gere relatórios sobre atendimentos realizados.",
        "Relatório de Tickets: Acesse relatórios detalhados sobre os tickets.",
        "Anotações em Tickets: Adicione anotações aos tickets.",
        "Transferir Atendimento para ChatBot: Redirecione atendimentos simples para o chatbot.",
        "Histórico de Mensagens: Acesse o histórico de mensagens trocadas com os clientes.",
        "Avaliação de Atendimento: Avalie a qualidade do atendimento prestado.",
        "Transcrição de Áudio: Transcreva automaticamente áudios para facilitar o registro de atendimentos.",
        "Mensagens Separadas por Filas: Organize as mensagens em filas para facilitar o gerenciamento."
      ],
      beneficios: [
        "10 usuários com acesso ao painel",
        "Até 2 números de WhatsApp",
        "Suporte via chat e e-mail 24h"
      ]
    },
    {
      nome: "Plano Premium",
      preco: "R$ 699,99/mês",
      precoOriginal: "R$ 899,99",
      descricao: "Ideal para grandes empresas com a necessidade de ferramentas avançadas e automações completas.",
      link: contatos.premium,
      funcionalidades: [
        "Kanban: Organize suas tarefas de forma visual.",
        "Integração WebHook/N8N: Conecte-se facilmente a outras ferramentas.",
        "TypeBot: Automatize seu atendimento com chatbots baseados em IA.",
        "Groq: Integração com a plataforma Groq para análise avançada de dados.",
        "Tarefas: Gerencie suas tarefas e mantenha o controle das atividades.",
        "Geração de PDF Atendimento: Gere relatórios sobre atendimentos realizados.",
        "Relatório de Tickets: Acesse relatórios detalhados sobre os tickets.",
        "Anotações em Tickets: Adicione anotações aos tickets.",
        "Transferir Atendimento para ChatBot: Redirecione atendimentos simples para o chatbot.",
        "Histórico de Mensagens: Acesse o histórico de mensagens trocadas com os clientes.",
        "DeepSeek: Encontre insights poderosos usando a plataforma DeepSeek.",
        "Avaliação de Atendimento: Avalie a qualidade do atendimento prestado.",
        "Transcrição de Áudio: Transcreva automaticamente áudios para facilitar o registro de atendimentos.",
        "Mensagens Separadas por Filas: Organize as mensagens em filas para facilitar o gerenciamento."
      ],
      beneficios: [
        "15 usuários com acesso ao painel",
        "Até 3 números de WhatsApp",
        "Suporte técnico 24/7 (chat e telefone)",
        "Integração com CRMs e sistemas ERP",
        "Dashboard com métricas em tempo real",
        "Acompanhamento com analista dedicado"
      ]
    },
    {
      nome: "Plano Personalizado",
      preco: "Preço Sob Consulta",
      descricao: "Solução sob medida com personalização completa, ideal para empresas com requisitos específicos e necessidades avançadas de integração.",
      link: contatos.personalizado,
      funcionalidades: [
        "Kanban: Organize suas tarefas de forma visual.",
        "Integração WebHook/N8N: Conecte-se facilmente a outras ferramentas.",
        "TypeBot: Automatize seu atendimento com chatbots baseados em IA.",
        "Groq: Integração com a plataforma Groq para análise avançada de dados.",
        "Tarefas: Gerencie suas tarefas e mantenha o controle das atividades.",
        "Geração de PDF Atendimento: Gere relatórios sobre atendimentos realizados.",
        "Relatório de Tickets: Acesse relatórios detalhados sobre os tickets.",
        "Anotações em Tickets: Adicione anotações aos tickets.",
        "Transferir Atendimento para ChatBot: Redirecione atendimentos simples para o chatbot.",
        "Histórico de Mensagens: Acesse o histórico de mensagens trocadas com os clientes.",
        "DeepSeek: Encontre insights poderosos usando a plataforma DeepSeek.",
        "Avaliação de Atendimento: Avalie a qualidade do atendimento prestado.",
        "Transcrição de Áudio: Transcreva automaticamente áudios para facilitar o registro de atendimentos.",
        "Mensagens Separadas por Filas: Organize as mensagens em filas para facilitar o gerenciamento."
      ],
      beneficios: [
        "Usuários Personalizados com acesso ao painel",
        "Números personalizados de WhatsApp",
        "Suporte técnico dedicado",
        "Relatórios avançados com exportação",
        "Integração com ferramentas de marketing",
        "Automação personalizada conforme a necessidade"
      ]
    },
  ];

  const [expandedPlan, setExpandedPlan] = useState(null);

  const toggleDescription = (index) => {
    setExpandedPlan(expandedPlan === index ? null : index);
  };

  return (
    <section id="plans" className="plans py-5">
      <div className="container text-center">
        <h2 className="mb-5" style={{ color: '#5700f2' }}>Planos</h2>
        <div className="row d-flex justify-content-center">
          {planos.map((plano, index) => (
            <motion.div key={index} className="col-md-3 mb-4" variants={planAnimation} initial="hidden" animate="visible">
              <div className="card shadow-lg border-0 rounded-4" style={{ borderColor: '#5700f2', height: '100%' }}>
                <div className="card-body">
                  {plano.nome === "Plano Avançado" && <span className="badge bg-warning text-dark position-absolute" style={{ top: '10px', left: '10px' }}>Mais Vendido</span>}
                  {plano.nome === "Plano Personalizado" && <span className="badge bg-info text-dark position-absolute" style={{ top: '10px', left: '10px' }}>Primeiro Mês com Desconto</span>}
                  <h3 className="card-title plan-title" style={{ color: '#5700f2' }}>{plano.nome}</h3>
                  <p className="card-text plan-description text-start">{plano.descricao}</p>
                  {expandedPlan === index && (
                    <div>
                      <h5>Funcionalidades:</h5>
                      <ul className="list-unstyled text-start" style={{ color: '#5700f2' }}>
                        {plano.funcionalidades.map((funcionalidade, i) => (
                          <li key={i}><FaCheckCircle style={{ color: 'green' }} /> {funcionalidade}</li>
                        ))}
                      </ul>
                      <h5>Benefícios:</h5>
                      <ul className="list-unstyled text-start" style={{ color: '#5700f2' }}>
                        {plano.beneficios.map((beneficio, i) => (
                          <li key={i}><FaCheckCircle style={{ color: 'green' }} /> {beneficio}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  <div className="d-flex flex-column align-items-center">
                    <span className="text-muted text-decoration-line-through mb-2">{plano.precoOriginal}</span>
                    <span className="fs-3">{plano.preco}</span>
                  </div>
                  <button 
                    onClick={() => toggleDescription(index)} 
                    className="btn btn-outline-primary w-100 mt-3" 
                    style={{
                      borderColor: '#5700f2',
                      color: '#5700f2',
                      transition: 'background-color 0.3s ease, color 0.3s ease'
                    }}
                  >
                    Ver {expandedPlan === index ? 'menos' : 'mais'}
                  </button>
                  <a 
                    href={plano.link} 
                    target="_blank" 
                    className="btn btn-primary w-100 mt-3" 
                    style={{
                      backgroundColor: '#5700f2',
                      color: 'white',
                      border: 'none',
                      transition: 'background-color 0.3s ease, color 0.3s ease'
                    }}
                  >
                    Contratar
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Plans;
