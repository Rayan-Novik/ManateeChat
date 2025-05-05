import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const CalculoLucros = ({ darkMode }) => {
  // Estados para armazenar os valores dos clientes e a opção de VPS + Domínio
  const [clientesBasico, setClientesBasico] = useState(0);
  const [clientesAvancado, setClientesAvancado] = useState(0);
  const [clientesPremium, setClientesPremium] = useState(0);
  const [vpsEDominio, setVpsEDominio] = useState(false);  // Controle de VPS + Domínio

  // Custos fixos
  const custoBasico = 55;
  const custoAvancado = 55;
  const custoPremium = 55;
  const custoVpsEDominio = 86.88;  // Custo adicional para VPS + Domínio

  // Lucro por cliente sem VPS + Domínio
  const lucroBasicoSemVps = 224.99;
  const lucroAvancadoSemVps = 404.99;
  const lucroPremiumSemVps = 644.99;

  // Lucro por cliente com VPS + Domínio
  const lucroBasicoComVps = 193.11;
  const lucroAvancadoComVps = 373.11;
  const lucroPremiumComVps = 613.11;

  // Comissão do revendedor (30%)
  const comissaoPercentual = 0.30;

  // Função para calcular o lucro por cliente, considerando VPS + Domínio
  const calcularLucroPorCliente = (clientes, plano) => {
    let lucroPorCliente;
    if (plano === 'basico') {
      lucroPorCliente = clientes > 0 ? (vpsEDominio ? lucroBasicoComVps : lucroBasicoSemVps) : 0;
    } else if (plano === 'avancado') {
      lucroPorCliente = clientes > 0 ? (vpsEDominio ? lucroAvancadoComVps : lucroAvancadoSemVps) : 0;
    } else {
      lucroPorCliente = clientes > 0 ? (vpsEDominio ? lucroPremiumComVps : lucroPremiumSemVps) : 0;
    }
    return lucroPorCliente * comissaoPercentual;
  };

  // Função para calcular o lucro total considerando todos os planos
  const calcularLucroTotal = () => {
    const lucroBasico = calcularLucroPorCliente(clientesBasico, 'basico');
    const lucroAvancado = calcularLucroPorCliente(clientesAvancado, 'avancado');
    const lucroPremium = calcularLucroPorCliente(clientesPremium, 'premium');
    return lucroBasico + lucroAvancado + lucroPremium;
  };

  // Renderização do componente
  return (
    <div className={`container mt-5 p-4 ${darkMode ? 'bg-dark text-white' : 'bg-light text-dark'} rounded shadow-lg`}>
      <h2 className="text-center mb-4">Calculadora de Lucros para Revendedores</h2>
      <form>
        {/* Campo para clientes do Plano Básico */}
        <div className="form-group mb-3">
          <label className="font-weight-bold">Clientes Plano Básico:</label>
          <input
            type="number"
            className="form-control"
            value={clientesBasico}
            onChange={(e) => setClientesBasico(parseInt(e.target.value))}
            min="0"
          />
        </div>

        {/* Campo para clientes do Plano Avançado */}
        <div className="form-group mb-3">
          <label className="font-weight-bold">Clientes Plano Avançado:</label>
          <input
            type="number"
            className="form-control"
            value={clientesAvancado}
            onChange={(e) => setClientesAvancado(parseInt(e.target.value))}
            min="0"
          />
        </div>

        {/* Campo para clientes do Plano Premium */}
        <div className="form-group mb-3">
          <label className="font-weight-bold">Clientes Plano Premium:</label>
          <input
            type="number"
            className="form-control"
            value={clientesPremium}
            onChange={(e) => setClientesPremium(parseInt(e.target.value))}
            min="0"
          />
        </div>

        {/* Checkbox para incluir VPS e Domínio */}
        <div className="form-group mb-3">
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="vpsEDominio"
              onChange={() => setVpsEDominio(!vpsEDominio)}
            />
            <label className="form-check-label" htmlFor="vpsEDominio">
              Incluir VPS e Domínio (R$ 86,88 adicionais)
            </label>
          </div>
        </div>

        {/* Exibição do Lucro Estimado */}
        <div className="form-group mb-4">
          <h4 className="font-weight-bold">
            Lucro Estimado Mensal: R$ {calcularLucroTotal().toFixed(2)}
          </h4>
        </div>

        {/* Botão para limpar os dados */}
        <div className="form-group text-center">
          <button
            type="reset"
            className="btn btn-secondary btn-lg"
            onClick={() => {
              setClientesBasico(0);
              setClientesAvancado(0);
              setClientesPremium(0);
              setVpsEDominio(false);
            }}
          >
            Limpar Dados
          </button>
        </div>
      </form>
    </div>
  );
};

export default CalculoLucros;
