import styled from "styled-components"

export const SearchContainer = styled.div`
  margin-top: 30px;
  height: 30px;
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 25px;
  justify-content: space-around;
  align-items: center; 
  background-color: #62F423; 
  border-radius: 10% 10% 10% 10%; 
  border-inline: 5px inset #52FF07;
  cursor: pointer; 
  color: rgba(122, 17, 163) ; 
  font-size: 10px; 
  font-weight: bold; 
  transition: background-color 0.3s ease; 
  opacity: 0.3;
  
  &:hover {
    background-color: #0056b3; /* Cambia el color de fondo al pasar el mouse */
  }
`;


export const SearchInput = styled.input`
  width: 90%;
  border: 3px solid rgba(122, 17, 163); 
  border-radius: 7px 0 0 7px;
  box-sizing: border-box;
  box-shadow: 10px 10px 20px rgba(122, 17, 163);
  padding: 6px 1px; 
`;

export const SearchIconContainer = styled.div`
   position: relative;
   display: flex;
   aling-items: center;
   justify-content: center;
   cursor: pointer;
   background-color: rgba(122, 17, 163, 0.5);
   padding: 10px;
   border: solid rgba(122, 17, 163, 0.8) 5px;
   border-radius: 0 7px 7px 0;

   &:hover {
    box-shadow: insert 0 0 10px rgba(122, 17, 163);
   }
`;

export const SearchIcon = styled.button`
  width: 90px;
  heigth: 20px;
  fill: rgba(122, 17, 163, 0.7);

  &:hover {
     scale: 1.1;
  }
  `;