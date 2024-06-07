import React from 'react';
import imgFrete from '../assets/cypress-logo.png';

const Footer = () => {
  return (
    <footer className="bg-light footer shadow-sm p-2">
      <div className="container d-flex justify-content-between align-items-center">

        <div className="footer-logo">
          <img className="logoFooter" src={imgFrete} height={60} alt="Logo" />
        </div>

        <div className="footer-link">
          <p>Os testes são executados automaticamente de segunda a sexta-feira às 13h</p>
          <a href='https://tfs.ndd.tech/NDD-DECollection/Third%20Part%20Logistic/_wiki/wikis/Third-Part-Logistic.wiki/1773/Automatiza%C3%A7%C3%A3o-de-testes-E2E-com-Cypress'>Documentação</a>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
