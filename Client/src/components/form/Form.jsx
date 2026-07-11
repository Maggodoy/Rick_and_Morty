import { useState } from "react";
import { validar } from "../validation/Validation";
import style from "./form.module.css";

function Login({ login }) {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  function inputHandler(e) {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
    setErrors(
      validar({
        ...userData,
        [name]: value,
      })
    );
  }

  function submitHandler(e) {
    e.preventDefault();
    login(userData);
  }

  return (
    // IMPORTANTE: Este div es el que tiene la imagen de fondo y centra todo
    <div className={style.pageContainer}> 
      <form className={style.formConteiner} onSubmit={submitHandler}>
        
        <div className={style.formGroup}>
          <label className={style.label}>USERNAME</label>
          <input 
            type="text" 
            name="email"
            value={userData.email}
            onChange={inputHandler}
            className={style.input} 
          />
          {errors.email && <span className={style.error}>{errors.email}</span>}
        </div>

        <div className={style.formGroup}>
          <label className={style.label}>PASSWORD</label>
          <input 
            type="password" 
            name="password"
            value={userData.password}
            onChange={inputHandler}
            className={style.input} 
          />
          {errors.password && <span className={style.error}>{errors.password}</span>}
        </div>

        <button type="submit" className={style.buttonSubmit}>
          SUBMIT
        </button>
      </form>
    </div>
  );
}

export default Login;