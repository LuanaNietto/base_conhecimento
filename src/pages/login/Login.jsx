import React, { useState } from "react";
import { Button } from "../../components/Button/Button";
import { Input } from "../../components/Input/Input";
import { AuthContainer, Section } from "./LoginStyled";
import { signin, signup } from "../../services/userService";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

export function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  //cadastro
  const [author_name, setAuthor_name] = useState('');
  const [author_email, setAuthor_email] = useState('');
  const [author_user, setAuthor_user] = useState('');
  const [author_pwd, setauthor_pwd] = useState('');

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
      Cookies.set("token", response.data, { expires: 1 });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }

  const handleNomeChange = (e) => {
    setAuthor_name(e.target.value);
  };

  const handleEmailChange = (e) => {
    setAuthor_email(e.target.value);
  };

  const handleUserChange = (e) => {
    setAuthor_user(e.target.value);
  };

  const handlePwdChange = (e) => {
    setauthor_pwd(e.target.value);
  };

  const handleSubmitRegister = (e) => {
    e.preventDefault();
    upHanleSubmit({author_name, author_email, author_user, author_pwd});
  }

  async function upHanleSubmit(data) {
    try {
      const response = await signup(data);
      localStorage.setItem('token', response.data);
      // Cookies.set("token", response.data, { expires: 1 });
      navigate("/");
    } catch (error) {
      console.log(error);
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
     
      <Section type="signup">
        <h2>Cadastrar</h2>
        <form onSubmit={handleSubmitRegister}>
          <Input
            type="text"
            placeholder="Nome"
            name="author_name"
            onChange={handleNomeChange}
          />
          <Input
            type="email"
            placeholder="E-mail"
            name="author_email"
            onChange={handleEmailChange}
          />
           <Input
            type="text"
            placeholder="Username"
            name="author_user"
            onChange={handleUserChange}
          />
          <Input
            type="password"
            placeholder="Senha"
            name="author_pwd"
            onChange={handlePwdChange}
          />
          <Button type="submit" text="Cadastrar" />
        </form>
      </Section>
    </AuthContainer>
  );
}