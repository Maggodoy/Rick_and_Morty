import { useState } from "react";
import validation from "../validation/Validation";
import style from "./form.module.css";

const Form = ({login}) => {
    const [errors, setErrors] = useState({});
    const [userData, setUserData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        })

        setErrors(validation({
           ...userData,
           [event.target.name]: event.target.value
        }))
    }

    const handleSubmit = (event) => {
         event.preventDefault();
         login(userData);
    }

    return(
        
       <form className={style.formConteiner} onSubmit={handleSubmit}>
          <label className={style.label} htmlFor="email">Email: </label>
          <input className={style.inputContainer} type="email" name='email' value={userData.email} onChange={handleChange} />
         
             {errors.email && <p>{errors.email}</p>}
         
          <br/>
          <label className={style.label} htmlFor="password">Password: </label>
          
          <input className={style.inputContainer} type="text" name="password" value={userData.password} onChange={handleChange} />
          
             {errors.password && <p>{errors.password}</p>}
    

          <button className={style.buttonSubmit}>Submit</button>
       </form>
    )
}

export default Form;