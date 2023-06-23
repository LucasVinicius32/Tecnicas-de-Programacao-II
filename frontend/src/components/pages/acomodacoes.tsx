import React, { useEffect, useState } from 'react';
import NavBar from '../navBar/navBar';
import api from '../../api';

const Acomodacoes: React.FC = () => {
  const [acomodacoes, setAcomodacoes] = useState([]);

  useEffect(() => {
    async function loadAcomodacoes() {
      const response = await api.get(`/acomodacoes`);
      setAcomodacoes(response.data.data);
    }
    loadAcomodacoes();
  }, []);

  return (
    <>
      <NavBar />

      <div style={{
        width: '100%',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        position: 'relative',
        backgroundColor: '#BFBFBF',
        padding: '20px',
      }}>
        <div style={{
          width: '100%',
          maxWidth: '800px',
          backgroundColor: 'rgba(255, 255, 255, 0.63)',
          border: '1px solid black',
          padding: '20px',
          marginBottom: '10px',
        }}>
          <h1 style={{
            textAlign: 'center',
            marginBottom: '20px',
          }}>Acomodações</h1>
          <ul style={{
            listStyle: 'none',
            padding: 0,
          }}>
            {acomodacoes ? (
              acomodacoes.map(item => (
                <React.Fragment key={item}>
                <li style={{
                  borderBottom: '2px solid black',
                  fontSize: '1.7rem',
                  marginBottom: '20px',
                }}>
                  <p><strong>ID:</strong> {item["id_acomodacao"]}</p>
                  <p><strong>Nome Acomodação:</strong> {item["nome_acomodaçao"]}</p>
                  <p><strong>Cama Solteiro:</strong> {item["cama_solteiro"]}</p>
                  <p><strong>Cama Casal:</strong>  {item["cama_casal"]}</p>
                  <p><strong>Suíte:</strong> {item["suite"]}</p>
                  <p><strong>Garagem:</strong> {item["garagem"]}</p>
                </li>
                 </React.Fragment>
              ))
            ) : (
              <p>Nenhuma acomodação cadastrada!</p>
            )}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Acomodacoes;
