import React, { useEffect, useState } from 'react';
import axios from 'axios';
import xml2js from 'xml2js';
// import { NavLink } from 'react-router-dom';

const Home = () => {
  const [fileList, setFileList] = useState([]);

  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const response = await axios.get('https://nddfreteapprovallogdev.blob.core.windows.net/$web?restype=container&comp=list');

        const result = await xml2js.parseStringPromise(response.data);
        const files = result.EnumerationResults.Blobs[0].Blob
        .map(blob => blob.Name[0])
        .filter(name => name.includes("arquivos/"));
      
      setFileList(files);
      } catch (error) {
        console.error('Error fetching file list:', error);
      }
    };

    fetchFiles();
  }, []);

    
  const handleNavigation = (fileName) => {
    const url = 'https://nddfreteapprovallogdev.blob.core.windows.net/$web/' + fileName;

    var win = window.open(url, '_blank');
    win.focus();
  };

  function formatFileName(name) {
    return name
      .replace('arquivos/','')
      .replace('.html','')
      .replace(/-/g,'/');
  }

  return (
    <section className="bg-light p-5">
      <div className='container-fluid'>
        <div className='d-sm-flex align-items-center justify-content-between'>
          <div className="container">
            <h1>Relatórios</h1>
            <ul className="lista">
              {fileList.length > 0 ? (
                fileList.map((file, index) => (
                  <li className="item" key={index}>
                    <span>{formatFileName(file)}</span>
                    <button className="buttonAbrir" onClick={() => handleNavigation(file)}>Abrir</button>
                  </li>
                ))
              ) : (
                <li>Nenhum arquivo encontrado!</li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
