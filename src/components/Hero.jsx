import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import backgroundImage from '../assets/backgroundboi.png';

const Hero = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <section
      id="hero"
      className="hero text-white text-center py-5"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        transition: 'background-image 1s ease-in-out',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <div className="container">
        <h1
          className={`display-4 ${show ? 'fade-in' : ''}`}
          style={{
            opacity: show ? 1 : 0,
            transition: 'opacity 1.5s ease-out',
            textShadow: '2px 2px 5px rgba(0, 0, 0, 0.5)',
            cursor: 'default',
          }}
        >
          Transforme sua comunicação com ManateeChat
        </h1>
        <p
          className={`lead ${show ? 'fade-in' : ''}`}
          style={{
            opacity: show ? 1 : 0,
            transition: 'opacity 1.5s ease-out 0.5s',
            textShadow: '1px 1px 3px rgba(0, 0, 0, 0.4)',
            cursor: 'default',
          }}
        >
          Atenda seus clientes de maneira mais eficiente e personalizada através do WhatsApp!
        </p>
        <Link
          to="plans"
          smooth={true}
          duration={500}
          className="btn hero-btn"
          aria-label="Explore nossos planos"
        >
          Explore nossos planos
        </Link>
      </div>

      <style jsx>{`
        .hero-btn {
          background-color: #ffc107; /* amarelo */
          color: #000;
          padding: 10px 25px;
          border-radius: 5px;
          font-size: 18px;
          text-decoration: none;
          border: 2px solid transparent;
          transition: all 0.3s ease-in-out;
          display: inline-block;
        }

        .hero-btn:hover {
          background-color: #7a33ff; /* roxo */
          color: #fff;
          border: 2px solid #fff; /* borda branca */
          transform: scale(1.05);
        }

        .fade-in {
          animation: fadeIn 1.5s ease-out forwards;
        }

        @keyframes fadeIn {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
