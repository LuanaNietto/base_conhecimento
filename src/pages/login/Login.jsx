import React, { useState } from "react";
import { Button } from "../../components/Button/Button";
import { Input } from "../../components/Input/Input";
import { AuthContainer, Section } from "./LoginStyled";
import { signin} from "../../services/userService";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

export function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login({username, password});
  }

  async function login(user) {
    try {
      const response = await signin(user);
      if (response.statusText == 'OK') {
        Cookies.set("token", response.data, { expires: 1 });
        alert("Login feito com sucesso!");
        navigate("/admin");
      }
    } catch (error) {
      alert("Erro ao fazer o login!");
      navigate("/");
    }
  }

  return (
    <AuthContainer>
      <Section type="signin">
        <h2>Entrar</h2>
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="Username"
            name="username"
            onChange={handleUsernameChange}
          />
          <Input
            type="password"
            placeholder="Senha"
            name="password"
            onChange={handlePasswordChange}
          />
          <Button type="submit" text="Entrar" />
        </form>
      </Section>
    </AuthContainer>
  );
}