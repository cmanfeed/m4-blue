import { useState } from "react";
import axios from "axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const login = {
      email: email,
      password: password,
    };

    axios.post("/auth/login", login).then((response) => {
      const token = response.data.token;
      localStorage.setItem("token", token);
    });
  };

  return (
    <form className="form-area container" onSubmit={handleSubmit}>
      <p className="main-title-form">Entre na Steam</p>
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
        <button type="submit" class="btn btn-primary mb-3">
          Entrar
        </button>
      </div>
    </form>
  );
}
