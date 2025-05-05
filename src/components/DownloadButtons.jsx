import React from 'react';
import { FaAndroid, FaWindows, FaLinux } from 'react-icons/fa';
import { motion } from 'framer-motion';

const DownloadSection = () => {
  const downloads = [
    {
      nome: 'Android',
      icone: <FaAndroid size={40} color="#3ddc84" />,
      descricao: 'Baixe o app ManateeChat para Android',
      link: '/assets/application-fb972dae-7d66-4692-8afa-947d45848012.apk',
      botaoTexto: 'Baixar APK'
    },
    {
      nome: 'Windows',
      icone: <FaWindows size={40} color="#00adef" />,
      descricao: 'Versão desktop para Windows',
      link: '/assets/app-windows.exe',
      botaoTexto: 'Baixar EXE'
    },
    {
      nome: 'Linux',
      icone: <FaLinux size={40} color="#333" />,
      descricao: 'Instalador para distribuições Linux',
      link: '/assets/app-linux.deb',
      botaoTexto: 'Baixar DEB'
    }
  ];

  return (
    <section id="download" className="py-5">
      <div className="container text-center">
        <h2 className="mb-5" style={{ color: '#5700f2' }}>Downloads</h2>
        <div className="row justify-content-center">
          {downloads.map((item, index) => (
            <motion.div
              key={index}
              className="col-md-4 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="card shadow-lg border-0 rounded-4 p-4 h-100">
                <div className="mb-3">{item.icone}</div>
                <h4 style={{ color: '#5700f2' }}>{item.nome}</h4>
                <p className="text-muted">{item.descricao}</p>
                <a
                  href={item.link}
                  download
                  className="btn btn-primary mt-3"
                  style={{ backgroundColor: '#5700f2', border: 'none' }}
                >
                  {item.botaoTexto}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
