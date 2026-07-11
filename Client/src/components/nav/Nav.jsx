import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import SearchBar from '../searchBar/SearchBar';
import logo from '../../assets/ricklogo.png';

const NavWrapper = styled.nav`
  width: 100%;
  padding: 10px 20px;
  box-sizing: border-box;
  
  background: rgba(20, 20, 30, 0.5); 
  backdrop-filter: blur(8px);
  border-bottom: 2px solid rgba(14, 236, 14, 0.2);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);
  
  position: sticky;
  top: 0;
  z-index: 1000;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px; 
`;

const ControlsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
  padding-bottom: 5px;
  max-width: 600px;
`;

const ButtonStyles = `
  min-width: 90px;
  padding: 6px 15px; /* Un poquito menos de altura para que se vea más compacto */
  background: #6c3483;
  color: #62F423;
  border: 1px solid transparent; /* Borde invisible inicial */
  border-radius: 50px;
  font-weight: bold;
  cursor: pointer;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out; /* Transición igual a la del botón Add */
  font-size: 0.9rem;

  &:hover {
    background: #8e44ad;
    transform: scale(1.05); /* Efecto de escala igual que el Add */
    border: 1px solid #62F423; /* Se ilumina el borde igual que la search bar */
    box-shadow: 0 0 10px rgba(98, 244, 35, 0.2);
  }
`;

const NavButton = styled(Link)`${ButtonStyles}`;
const LogoutButton = styled.button`${ButtonStyles}`;

const Logo = styled.img`
  width: 70px; 
  position: absolute;
  right: 60px;
  top: 50%; 
  transform: translateY(-50%);
`;

const Nav = ({ onSearch, logout }) => {
  return (
    <NavWrapper>
      <ControlsWrapper>
        <SearchBar onSearch={onSearch} />
      </ControlsWrapper>
      
      <ButtonsWrapper>
        <NavButton to="/home">Home</NavButton>
        <NavButton to="/about">About</NavButton>
        <NavButton to="/favorites">Favorites</NavButton>
        <LogoutButton onClick={logout}>Log Out</LogoutButton>
      </ButtonsWrapper>

      <Logo src={logo} alt="Logo" />
    </NavWrapper>
  );
};

export default Nav;