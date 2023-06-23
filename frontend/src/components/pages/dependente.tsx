import React, { useEffect, useState } from 'react';
import NavBar from '../navBar/navBar';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import api from '../../api';

const Dependentes: React.FC = () => {
  
  
  const [editModalDependente, setModalEditDependente] = useState(false);

  const [currentId, setCurrentId] = useState();

  const [dependentes, setDependentes] = useState([]);

  useEffect(() => {

      async function loadDependentes() {
          const response = await api.get(`/dependentes`);
          setDependentes(response.data.data);
      }
      loadDependentes();
  }, []);


  const deleteDependente = (id: any) => {
    api.delete(`/dependente/${id}`)
    window.location.reload()
  } 

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const onSubmit = async (data: any) => {
    await api.put(`/dependente/${currentId}`, {
      nome: data.nome,
      nome_social: data.nome_social,
      cpf: data.cpf,
      clienteId: data.clienteId
    });   
    setModalEditDependente(false);
    window.location.reload()
  };

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
      }}>Dependentes</h1>

      <Link to={"/cadDep"}>
        <button style={{
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
        }}>Cadastrar</button>
      </Link>
      <h1 style={{
        textAlign: 'left',
        marginTop: '30px'
      }}>Lista de Dependentes:</h1>

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
          {dependentes.length > 0 ? (
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {dependentes.map((item: any) => (            
                <li
                  key={item.id}
                  style={{
                    borderBottom: "2px solid black",
                    fontSize: "1.7rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "10px 0"
                  }}
                >
                  <div>
                    <span style={{ fontWeight: "bold" }}>Nome:</span> {item.nome} <br />
                    <span style={{ fontWeight: "bold" }}>Nome Social:</span> {item.nome_social} <br />
                    <span style={{ fontWeight: "bold" }}>CPF:</span> {item.cpf} <br />
                    <span style={{ fontWeight: "bold" }}>Id Titular:</span> {item.clienteId}
                  </div>
                  <div>
                    <button
                      style={{
                        color: "black",
                        fontSize: "1.5rem",
                        backgroundColor: "white",
                        border: "none",
                        cursor: "pointer",
                        borderRadius: '5px',
                        padding: '5px',
                        marginRight: "10px",
                        boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)',
                        outline: 'none'
                      }}
                      onClick={() => {
                        setModalEditDependente(true); 
                        setCurrentId(item.id);
                      }}
                    >
                      📝
                    </button>

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
                        deleteDependente(item["id"]);
                      }}
                    >
                      ❌
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p>Não existem Dependente cadastrado</p>
          )}
        </div>
      </ul>
      {editModalDependente ? 
      <div style={{ 
        marginTop: "10px",
        width: "50%",
        height: "50vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#F2F2F2",
        border: "1px solid black",
        position: 'absolute',
        zIndex: 1,
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)"
      }}>
    <div style={{
      display: "flex",
      alignItems: 'center',
      flexDirection: 'column'
    }}>
      <div style={{
          display: "flex",
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
          padding: '0 10px'
      }}>
        <h1 style={{ margin: 0 }}>Editar Dependente</h1>
        <div>
          <button onClick={() => setModalEditDependente(false)}
          style={{
            width: '30px',
            height: '30px',
            borderRadius: '999px',
            border: 'none',
            fontSize: '1rem',
            cursor: 'pointer',
            backgroundColor: "#8B2635",
            boxShadow: "0 10px 20px -10px #5E5DF0",
            outline: "none",
            color: 'white'
          }}
          >X</button>
        </div>
      </div>
      <div style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        marginTop: '20px'
      }}>
        <form action="" onSubmit={handleSubmit(onSubmit)}
        >
          <div style={{
           display: 'flex',
           flexDirection: 'column',
           marginBottom: '20px'
          }}>
            <label htmlFor="nome">Alterar Nome</label>
            <input type="text" required={true} {...register("nome")} style={{
           padding: '10px',
           fontSize: '1rem',
           borderRadius: '5px',
           border: 'none',
           boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)',
            }}/>
          </div>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            marginBottom: '10px'
          }}>
            <label htmlFor="nome_social">Alterar Nome Social</label>
            <input type="text" required={true} {...register("nome_social")} style={{
                padding: '10px',
                fontSize: '1rem',
                borderRadius: '5px',
                border: 'none',
                boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)',
            }}/>
          </div>
          <div style={{
              display: 'flex',
              flexDirection: 'column'

          }}>
            <label htmlFor="cpf">Alterar CPF</label>
            <input type="text" required={true} {...register("cpf")} style={{
                padding: '10px',
                fontSize: '1rem',
                borderRadius: '5px',
                border: 'none',
                boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)',
            }}/>
               <div style={{
              display: 'flex',
              flexDirection: 'column'

          }}>
            <label htmlFor="clienteId">Alterar Id Titular</label>
            <input type="text" required={true} {...register("clienteId")} style={{
                padding: '10px',
                fontSize: '1rem',
                borderRadius: '5px',
                border: 'none',
                boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)',
            }}/></div>

          </div>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
            <button type="submit" style={{
              width: '150px',
              height: '50px',
              borderRadius: '30px',
              border: 'none',
              fontSize: '1.5rem',
              cursor: 'pointer',
              backgroundColor: "black",
              color: 'white',
              boxShadow: "0 10px 20px -10px #5E5DF0",
              outline: "none"
            }}>Enviar</button>
          </div>
        </form>
      </div>
    </div>
  </div> 
  : null
}


        </div>

    </>
  );
}

export default Dependentes;
