import React from 'react';
import NavBar from '../navBar/navBar';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import api from '../../api';

const CadDep: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const onSubmit = async (data: any) => {
    await api.post('/dependente', {
      nome: data.nome,
      nome_social: data.nomeSocial,
      cpf: data.cpf,
      clienteId: data.clienteId
    });
    navigate('/dependentes');
  };

  return (
    <>
      <NavBar />
      <div style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#BFBFBF",
      }}>

        
          <form onSubmit={handleSubmit(onSubmit)}
                 style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '25px',
                    width: '30%',
                    padding: '20px',
                    backgroundColor: '#FFF',
                    borderRadius: '10px',
                  }}
                  >
            <h1 style={{
            textAlign: 'center',
            fontSize: '1.5rem',
          }}>Cadastro de Dependente</h1>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <label htmlFor="nome">Nome</label>
              <input
                type="text"
                required={true}
                {...register("nome")}
                style={{
                  padding: '10px',
                  fontSize: '1rem',
                  borderRadius: '5px',
                  border: 'none',
                  boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)',
                }}
              />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <label htmlFor="nomeSocial">Nome Social</label>
              <input
                type="text"
                required={true}
                {...register("nomeSocial")}
                style={{
                  padding: '10px',
                  fontSize: '1rem',
                  borderRadius: '5px',
                  border: 'none',
                  boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)',
                }}
              />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <label htmlFor="cpf">CPF</label>
              <input
                type="text"
                required={true}
                {...register("cpf")}
                style={{
                  padding: '10px',
                  fontSize: '1rem',
                  borderRadius: '5px',
                  border: 'none',
                  boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)',
                }}
              />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <label htmlFor="clienteId">Id do Titular</label>
              <input
                type="text"
                required={true}
                {...register("clienteId")}
                style={{
                  padding: '10px',
                  fontSize: '1rem',
                  borderRadius: '5px',
                  border: 'none',
                  boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)',
                }}
              />
            </div>
            <div style={{
              display: 'flex',
              justifyContent: 'center',
            }}>
              <button
                type="submit"
                style={{
                  width: '100px',
                  height: '40px',
                  backgroundColor: 'black',
                  color: 'white',
                  fontSize: '1rem',
                  borderRadius: '10px',
                  cursor: 'pointer',
                  border: 'none',
                }}
              >
                Enviar
              </button>
            </div>
          </form>
        {/* </div> */}
      </div>
    </>
  );
}

export default CadDep;
