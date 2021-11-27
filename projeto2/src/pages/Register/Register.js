import './Register.css';
import { useState } from "react";
import axios from "axios";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const user = {
      name: name,
      email: email,
      nickname: nickname,
      password: password,
      passwordConfirmation: passwordConfirmation,
    };

    axios.post("user/register", user).then((response) => console.log(response));
  };


  return (
    <form className="form-area container" onSubmit={handleSubmit}>
      <p className="main-title-form">Preencha com seus Dados</p>
      <div className="mb-3">
        <label for="name" className="form-label">
          Nome
        </label>
        <input
          type="text"
          className="form-control"
          id="name"
          placeholder="Fulano de Tal"
          required
          onChange={(event) => setName(event.target.value)}
        />
      </div>
      <div className="mb-3">
        <label for="email" className="form-label">
          Email
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          placeholder="name@example.com"
          required
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>
      <div className="mb-3">
        <label for="nickname" className="form-label">
          Nickname
        </label>
        <input
          type="text"
          className="form-control"
          id="nickname"
          placeholder="fulanodetal_5"
          required
          onChange={(event) => setNickname(event.target.value)}
        />
      </div>
      <div className="mb-3">
        <label for="password" className="form-label">
          Senha
        </label>
        <input
          className="form-control"
          id="password"
          type="password"
          onChange={(event) => setPassword(event.target.value)}
        ></input>
      </div>
      <div className="mb-3">
        <label for="passwordConfirm" className="form-label">
          Confirmar Senha
        </label>
        <input
          className="form-control"
          id="passwordConfirm"
          type="password"
          onChange={(event) => setPasswordConfirmation(event.target.value)}
        ></input>
      </div>
      <button type="submit" class="btn btn-primary mb-3 " value="Continuar">
        Enviar
      </button>
    </form>
  );
}

export default Register;
