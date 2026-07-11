import styled from "styled-components";

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 30px auto 25px auto;
  width: 90%;
  max-width: 500px;
  background: rgba(255, 255, 255, 0.1); /* Efecto Glassmorphism */
  backdrop-filter: blur(8px);
  padding: 4px;
  border-radius: 50px; /* Estilo píldora moderno */
  border: 1px solid rgba(14, 236, 14, 0.3);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);
  transition: all 0.3s ease;

  &:hover {
    border-color: rgba(14, 236, 14, 0.8);
    box-shadow: 0 0 15px rgba(14, 236, 14, 0.2);
  }
`;

export const SearchInput = styled.input`
  flex: 1;
  background: transparent;
  border: none;
  padding: 10px 20px;
  color: white;
  font-size: 16px;
  outline: none;

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
`;

export const SearchIconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const SearchIcon = styled.button`
  width: 90px;
  height: 30px;
  background-color: #62F423;
  border: none;
  border-radius: 50px;
  color: #6c3483;
  font-weight: bold;
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.05);
  }
`;