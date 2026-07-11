import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux"; // Importamos useDispatch
import axios from "axios";

// Importación de acciones para sincronizar onClose
import { removeFav } from "./redux/actions";

import Nav from "./components/nav/Nav";
import Cards from "./components/cards/Cards";
import Form from "./components/form/Form";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Favorites from "./components/favorites/Favorites";
import Detail from "./components/detail/Detail";

import "./App.css";

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch(); // Hook para despachar acciones
 
  const [characters, setCharacters] = useState([]); 
  const [access, setAccess] = useState(false);

  // Carga inicial
  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then((response) => response.json())
      .then((data) => {
        if (data.results) {
          setCharacters(data.results);
        }
      })
      .catch(error => console.error("Error cargando personajes:", error));
  }, []);

  // Control de acceso
  useEffect(() => {
    !access && navigate("/");
  }, [access, navigate]);

  // Funciones de manejo de datos
  async function onSearch(id) {
    try {
      const { data } = await axios(`http://localhost:3001/character/${id}`);
      if (data.name) setCharacters((oldChars) => [...oldChars, data]);
      else alert("¡No hay personajes con este ID!");
    } catch (error) { alert("Error al buscar el personaje"); }
  }

  function logoutHandler() { setAccess(false); }

  function loginHandler(userData) {
    const { email, password } = userData;
    axios(`http://localhost:3001/login/?email=${email}&password=${password}`)
      .then(({ data }) => {
        setAccess(data.access);
        data.access && navigate("/home");
      });
  }

  // onClose ahora sincroniza el estado local y Redux (Favoritos)
  function onClose(id) {
    const idNum = Number(id);
    setCharacters(characters.filter((char) => char.id !== idNum));
    dispatch(removeFav(idNum));
  }

  const backgroundClass = location.pathname === "/" ? "bg-login" : "bg-home";

  return (
    <div className={`App ${backgroundClass}`}>
      {location.pathname !== "/" && (
        <Nav onSearch={onSearch} logout={logoutHandler} />
      )}
      
      <Routes>
        <Route path="/" element={<Form login={loginHandler} />} />
        <Route path="/home" element={<Home characters={characters} onClose={onClose} />} />
        <Route path="/about" element={<About />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;