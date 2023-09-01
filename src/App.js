import './App.css';

import { useState, useEffect } from 'react';
import axios from 'axios';
import { Routes, Route, useLocation, useNavigate} from 'react-router-dom';
import About from './components/about/About';
import Cards from './components/cards/Cards';
import Detail from './components/detail/Detail';
import Form from './components/form/Form';
import Nav from './components/nav/Nav';
import Favorites from './components/favorites/Favorites';



const email= 'magaliglois@gmail.com';
const password='soyhenry';

function App() {

   const location = useLocation();
   const navigate = useNavigate();
   const [characters,setCharacters] = useState([]);
   const [access, setAccess] = useState(false);

   const login = (userData) => {
       if(userData.email === email && userData.password === password){
         setAccess(true);
         navigate('/home');
       }
   }

   useEffect(() => {
      !access && navigate('/')
   }, [access, navigate])

   const onSearch = (id) => {
      axios(`https://rickandmortyapi.com/api/character/${id}`)
      .then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }

   function onClose(id) {
     const charactersfiltered = characters.filter(character => 
      character.id !== Number(id))  /*se hace un callback y se filtra , se pone number ya que se devuelve un string*/
     setCharacters(charactersfiltered) 
   }

      return (
         <div className="App">
         
         {
           location.pathname !== '/' && <Nav onSearch={onSearch}/>
         }
           
          
          <Routes>
              <Route path='/favorites' element={ <Favorites/>} />
              <Route path='/' element={<Form login={login} />} />
              <Route path='/home' element={
              <Cards characters={characters} onClose={onClose}/>} />
              <Route path= '/about' element={<About/>} />
              <Route path='/detail/:id' element={<Detail/>} />  
          </Routes>
          
         </div>
      );
}

export default App;
