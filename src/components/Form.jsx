import { useState } from "react";
import style from "./Form.module.css";
import validation from "./validation";

/*const validate = (form, setErrors, errors) => {
  if (!form.email) setErrors({ ...errors, email: "Email vacío" });
  else {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/.test(form.email))
      setErrors({ ...errors, email: "" });
    else setErrors({ ...errors, email: "Email inválido" });
  }
};*/

  const Form = ({login}) => {
    const [userData, setUserData] = useState({
      username: "",
      password: "",
    });

  const [errors, setErrors] = useState({
      username: "",
      password: "",
    });
  
    const handleInputChange = (event) => {
      const property = event.target.name;
      const value = event.target.value;

      setUserData({...userData, [property]: value});
      validation({...userData, [property]: value}, errors, setErrors);

    };

    const submitHandler = (event) => {
      event.preventDefault();
      login(userData);
    };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          name="username"
          value={userData.username}
          onChange={handleInputChange}
          className={errors.email ? style.error : style.success}
        />
        <p>{errors.username}</p>
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="text"
          name="password"
          value={userData.password}
          onChange={handleInputChange}
        />
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default Form;