import React, { useState, useEffect } from 'react'; // Importando useState e useEffect
import '../styles/WhatsAppButton.css'; // Importando o CSS para os estilos

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Função para mostrar o balão de mensagem
    const showTooltip = () => {
      setIsVisible(true);

      // Após 5 segundos, esconder o balão
      setTimeout(() => {
        setIsVisible(false);
      }, 5000);
    };

    // Exibir o balão a cada 15 segundos
    const intervalId = setInterval(showTooltip, 15000);

    // Mostrar imediatamente quando o componente for montado
    showTooltip();

    // Limpar o intervalo ao desmontar o componente
    return () => clearInterval(intervalId);
  }, []);

  return (
    <a
      href="https://wa.me/+5565996282769"
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float-button"
      aria-label="Chat no WhatsApp"
    >
      <i className="fab fa-whatsapp"></i>
      {/* Balão de mensagem que aparece com base no estado isVisible */}
      {isVisible && <span className="whatsapp-tooltip">Entre em contato pelo WhatsApp</span>}
    </a>
  );
};

export default WhatsAppButton;
