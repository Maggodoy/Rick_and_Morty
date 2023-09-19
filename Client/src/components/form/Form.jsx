import {useState} from "react";
import {validar} from "../validation/Validation";
import style from "./form.module.css";

function Login({login}) {
  const [userData, setUserData] = useState({
    email: " ",
    password: " ",
  });

  const [errors, setErrors] = useState({
    email: "Email required", //
    password: "Password required", //
  });

  function inputHandler(e) {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });

    setErrors(
      validar({
        ...userData,
        [e.target.name]: e.target.value,
      })
    );
  }

  function submitHandler(e) {
    e.preventDefault();

    login(userData);
  }

  function disableHandler() {
    for (let error in errors) {
      if (errors[error] !== "") return true;
    }
    return false; // Habilitar el botón si no se encontraron errores no vacíos.
  }
  
  return (
    <div className={style.body}>
      <form className={style.formConteiner}onSubmit={submitHandler}>
        <div>
          <label className={style.font}>USERNAME</label>
          <input className={style.input}
            type="text"
            name="email"
            value={userData.email}
            onChange={inputHandler}
            placeholder="email"
          />
          <span>{errors.email}</span>
        </div>
        <div>
          <label className={style.font}>PASSWORD</label>
          <input className={style.input}
            name="password"
            type="password"
            value={userData.password}
            onChange={inputHandler}
            placeholder="Escribe tu nombre"
          />
        </div>
        {errors.password && <span>{errors.password}</span>}
        {/* {errors.password || errors.email ? null : (
          <button type="submit">SUBMIT</button>
        )} */}
        <button className={style.buttonSubmit} disabled={disableHandler()} type="submit">
          SUBMIT
        </button>
      </form>
    </div>
  );
}

export default Login;
