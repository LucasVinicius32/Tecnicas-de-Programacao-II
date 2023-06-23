import React, { useEffect, useState } from 'react';
import NavBar from '../navBar/navBar';
import { Link, Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import api from '../../api';

const Hospedagens: React.FC = () => {

  const [currentId, setCurrentId] = useState();

  const [hospedagens, setHospedagens] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {

    async function loadHospedagens() {
      const response = await api.get(`/acomodacao`);
      setHospedagens(response.data.data);
    }
    loadHospedagens();
  }, []);


  const deleteCliente = (id: any) => {
    api.delete(`/acomodacao/${id}`)
    window.location.reload()
    navigate('/hospedagens');
  }

  const getClientName = (id: any) => {
    api.get(`/cliente/${id}`).then(item => {
      return item.data.data["nome"]
    })
  }

  const getAcomodName = (id: any) => {
    api.get(`/acomodacoes/${id}`)
  }

  return (
    <>
      <NavBar />

      <div style={{
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        position: 'relative',
        backgroundColor: "#BFBFBF"
      }}>
        <h1 style={{
          textAlign: 'center',
          marginTop: '30px'
        }}>Hospedagens</h1>

        <Link to={"/cadHosp"}>
          <input type="button" value="Cadastrar!" style={{
            width: '200px',
            height: '60px',
            borderRadius: '30px',
            fontSize: '1.5rem',
            cursor: 'pointer',
            backgroundColor: "black",
            color: 'white',
            border: 'none',
            marginTop: '20px',
            boxShadow: "0 10px 5px -10px #5E5DF0",
            outline: "none"
          }} />
        </Link>
        <h1 style={{
          textAlign: 'left',
          marginTop: '30px'
        }}>Hospedagem cadastradas: </h1>

        <ul style={{
          width: "60%",
          marginTop: "50px"
        }}>
          <div style={{
            border: "1px solid black",
            padding: "20px",
            borderRadius: "5px",
            backgroundColor: "#FFFFFFA1",
            marginTop: "20px"
          }}>
          {hospedagens.length > 0 ? (
            hospedagens.map(item =>
              <React.Fragment key={item}>
                <li
                  style={{
                    borderBottom: "2px solid black",
                    fontSize: "1.7rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between"
                  }}
                >
                  Acomodação:<br />
                  Id do Cliente: {item["clienteId"]} <br />
                  Id da Acomodação: {item["acomodacoIdAcomodacao"]}

                  <div>
                    <button
                      style={{
                        color: "red",
                        fontSize: "1.5rem",
                        backgroundColor: "white",
                        border: "none",
                        cursor: "pointer",
                        borderRadius: '5px',
                        padding: '5px',
                        boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)',
                        outline: 'none'
                      }}
                      onClick={() => {
                        deleteCliente(item["id"]);
                      }}
                    >
                      ❌
                    </button>
                  </div>
                </li>
              </React.Fragment>
            )
          ) : (
            <p>Não existem hospedagens cadastradas</p>
          )}
          </div>
        </ul>
      </div>

    </>
  );
}

export default Hospedagens;
