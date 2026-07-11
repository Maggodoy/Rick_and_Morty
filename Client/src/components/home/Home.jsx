import React from 'react';
import styled from 'styled-components';
import homeBackground from '../../assets/rick-and-morty-home.jpg';
import styles from './home.module.css';
import Cards from '../cards/Cards'; // Importamos tu componente de tarjetas

const HomeContainer = styled.div`
  background-image: url(${homeBackground});
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column; 
  align-items: center;
  padding-top: 50px; 
  color: white;
  overflow-y: auto; /* Permite scroll si hay muchos personajes */
`;

const Home = ({ characters, onClose }) => {
  const testData = [{ id: 1, name: 'Rick Sanchez', species: 'Human', gender: 'Male', image: '...' }];
  console.log("Datos recibidos en Home:", characters);
  return (
    <HomeContainer>
      <h1 className={styles.title}>
        Welcome to the multiverse
      </h1>
      
      {/* Renderizamos las cartas aquí abajo */}
      <Cards characters={characters} onClose={onClose} />
      <Cards characters={characters} />
      <Cards characters={testData} onClose={onClose} />
    </HomeContainer>
  );
};

export default Home;