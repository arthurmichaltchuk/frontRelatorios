import React, { useEffect, useState } from 'react';
import axios from 'axios';
import xml2js from 'xml2js';
import moment from 'moment';
// import { NavLink } from 'react-router-dom';

const Home = () => {
  const [fileList, setFileList] = useState([]);

  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const response = await axios.get('https://nddfreteapprovallogdev.blob.core.windows.net/$web?restype=container&comp=list');

        const result = await xml2js.parseStringPromise(response.data);

        const files = result.EnumerationResults.Blobs[0].Blob
          .filter(blob => blob.Name[0].includes("arquivos/"))
          .reverse();

        setFileList(files);
      } catch (error) {
        console.error('Error fetching file list:', error);
      }
    };

    fetchFiles();
  }, []);


  const handleNavigation = (url) => {
    var win = window.open(url, '_blank');
    win.focus();
  };

  function formatFileName(name) {
    return name
      .replace('arquivos/', '')
      .replace('.html', '')
  }

  function formatFileDate(properties) {
    const date = properties['Last-Modified'][0];

    return moment(date).format('DD/MM/YYYY HH:mm');
  }

  return (
    <section className="p-5 homeBody">
      <div className='container-fluid'>
        <div className='d-sm-flex align-items-center justify-content-between'>
          <div className="container">
            <h1>Relatórios</h1>
            <p>Relatórios dos testes automatizados de ponta a ponta realizados com <b>Cypress</b> para os clientes do NDDFrete.</p>            <table className="table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Data</th>
                  <th>Ação</th>
                </tr>
              </thead>
              <tbody>
                {fileList.length > 0 ? (
                  fileList.map((file, index) => (
                    <tr key={index}>
                      <td>{formatFileName(file.Name[0])}</td>
                      <td>{formatFileDate(file.Properties[0])}</td>
                      <td><button className="buttonAbrir" onClick={() => handleNavigation(file.Url[0])}>Abrir</button></td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="3">Nenhum arquivo encontrado!</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Home;
