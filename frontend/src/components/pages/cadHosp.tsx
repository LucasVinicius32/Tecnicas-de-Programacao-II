import React from 'react';
import NavBar from '../navBar/navBar';
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import api from '../../api';

const CadHosp: React.FC = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const onSubmit = async (data: any) => {
      await api.post('/acomodacao', {
        clienteId: data.clienteId,
        acomodacoIdAcomodacao: data.acomodacoIdAcomodacao
      });
      navigate('/hospedagens');
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
            <form action="" onSubmit={handleSubmit(onSubmit)}
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
              <h1 style={{ textAlign: 'center', fontSize: '1.5rem' }}>Cadastro de Acomodações</h1>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        width: '100%',
                    }}>
                        <label htmlFor="clienteId" style={{ marginBottom: '5px', fontSize: '1rem' }} >Id do Cliente</label>
                        <input type="text" required={true} {...register("clienteId")}
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
                      display: 'flex', flexDirection: 'column'
                    }}>
                        <label htmlFor="acomodacoIdAcomodacao">Id da Acomodação</label>
                        <input type="text"   style={{
                          padding: '10px',
                          fontSize: '1rem',
                          borderRadius: '5px',
                          border: 'none',
                          boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)',
                        }}required={true} {...register("acomodacoIdAcomodacao")}  />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <button type="submit" style={{
                        width: '150px',
                        height: '40px',
                        backgroundColor: 'black',
                        color: 'white',
                        fontSize: '1rem',
                        borderRadius: '5px',
                        cursor: 'pointer',
                        border: 'none',
                        }}>Enviar</button>
                    </div>
                </form>
        </div>
    </>
  );
}

export default CadHosp;
