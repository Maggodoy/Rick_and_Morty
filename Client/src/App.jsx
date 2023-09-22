import {useState, useEffect} from "react";
import {Route, Routes, useLocation, useNavigate} from "react-router-dom";
import axios from "axios";

import Cards from "./components/cards/Cards";
import Nav from "./components/nav/Nav";
import Detail from "./components/detail/Detail.jsx";
//import ErrorPage from "./error/ErrorPage.jsx";
import Form from "./components/form/Form.jsx";
import Favorites from "./components/favorites/Favorites.jsx";
import About from "./components/about/About.jsx";

import "./App.css";

function App() {
  const location = useLocation();
  const [characters, setCharacters] = useState([]);
  const navigate = useNavigate();

  const [access, setAccess] = useState(true);

  async function loginHandler(userData) {
    try {
      const {email, password} = userData;
      const URL = "http://localhost:3001/rickandmorty/login/";
      const {data} = await axios(URL + `?email=${email}&password=${password}`);
      const {access} = data; //true / false
      setAccess(access);
      access && navigate("/home");
    } catch (error) {
      alert(error);
    }
  }

  function logoutHandler() {
    setAccess(false);
  }

  useEffect(() => {
    !access && navigate("/");
    //eslint-disable-next-line
  }, [access]);

  // nueva API
  //*https://rym2-production.up.railway.app/api/character/${id}?key=henrym-usuariodegithub

  async function onSearch(id) {
    try {
      const {data} = await axios(
        `http://localhost:3001/rickandmorty/character/${id}`
      );

      if (data.name) {
        console.log("personaje")
        setCharacters((oldChars) => [...oldChars, data]);
      } else {
        throw new Error("¡No hay personajes con este ID!");
      }
    } catch (error) {
    }
  }

  function onClose(id) {
    // nos llega un string
    let filteredCharacters = characters.filter(
      (character) => character.id !== Number(id)
    );

    setCharacters(filteredCharacters);
  }

  function randomHandler() {
    let memoria = [];

    let randomId = (Math.random() * 826).toFixed();

    randomId = Number(randomId);

    if (!memoria.includes(randomId)) {
      memoria.push(randomId);
      onSearch(randomId);
    } else {
      alert("Ese personaje ya fue agregado");
      return;
    }
  }

  return (
    <div className="App">
      {/* {location.pathname === "/" ? null : (
        <Nav onSearch={searchHandler} randomize={randomHandler} />
      )} */}

      {location.pathname !== "/" && (
        <Nav
          onSearch={onSearch}
          randomize={randomHandler}
          logout={logoutHandler}
        />
      )}

      <Routes>
        <Route path="/" element={<Form login={loginHandler} />} />
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/detail/:id" element={<Detail />} />
        {/*<Route path="*" element={<ErrorPage />} />*/}
      </Routes>
    </div>
  );
}

export default App;
