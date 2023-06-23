import React, { useState } from 'react';
import NavBar from '../navBar/navBar';
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import api from '../../api';

const CadCli: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);
  const onSubmit = async (data: any) => {
    try {
      await api.post('/cliente', {
        nome: data.nome,
        nome_social: data.nomeSocial,
        cpf: data.cpf
      });
      navigate('/');
    } catch (error) {
      setError("Erro ao cadastrar cliente. Tente novamente.");
    }
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
        <form
          onSubmit={handleSubmit(onSubmit)}
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
          <h1 style={{ textAlign: 'center', fontSize: '1.5rem' }}>Cadastro de Cliente</h1>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
          }}>
            <label htmlFor="nome" style={{ marginBottom: '5px', fontSize: '1rem' }}>Nome</label>
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
            <label htmlFor="nomeSocial" style={{ marginBottom: '5px', fontSize: '1rem' }}>Nome Social</label>
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
            <label htmlFor="cpf" style={{ marginBottom: '5px', fontSize: '1rem' }}>CPF</label>
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
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <button
              type="submit"
              style={{
                width: '150px',
                height: '40px',
                backgroundColor: 'black',
                color: 'white',
                fontSize: '1rem',
                borderRadius: '5px',
                cursor: 'pointer',
                border: 'none',
              }}
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default CadCli;
