import React, { useState, useEffect } from "react";
import { Button } from "../../components/Button/Button";
import { Input } from "../../components/Input/Input";
import { AuthContainer, Section } from "../login/LoginStyled";
import { signup, getUserById, updateUser} from "../../services/userService";
import { useNavigate, useLocation } from "react-router-dom";

export function User(){
  const navigate = useNavigate();
  const location = useLocation();
  const id = new URLSearchParams(location.search).get('id') || null;
  
  const [author_name, setAuthor_name] = useState('');
  const [author_email, setAuthor_email] = useState('');
  const [author_user, setAuthor_user] = useState('');
  const [author_pwd, setAuthor_pwd] = useState('');

  useEffect(() => {
    getUser();
  }, []);

  async function getUser() {
    try {
      if (id != null){
        const response = await getUserById(id);
        
        if (response && response.data) {
          const userData = response.data;
          setAuthor_name(userData.author_name);
          setAuthor_email(userData.author_email);
          setAuthor_user(userData.author_user);
          setAuthor_pwd(userData.author_pwd);
        } 
      }      
    } catch (error) {
      console.error("Error fetching post:", error);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const userData = {
      author_name,
      author_email,
      author_user,
      author_pwd,
    };

    try {
      if(id){
        await updateUser(id, userData);
      } else{
        await signup(userData);
      }
      
      navigate("/admin");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <AuthContainer>
        <Section type="signup">
          <h2>{id ? 'Atualizar cadastro' :'Cadastrar Usuário'}</h2>
          <form onSubmit={handleSubmit}>
            <Input
              type="text"
              placeholder="Nome"
              value={author_name}
              onChange={(e) => setAuthor_name(e.target.value)}
            />
            <Input
              type="email"
              placeholder="E-mail"
              value={author_email}
              onChange={(e) => setAuthor_email(e.target.value)}
            />
            <Input
              type="text"
              placeholder="Username"
              value={author_user}
              onChange={(e) => setAuthor_user(e.target.value)}
            />
            <Input
              type="password"
              placeholder="Senha"
              value={author_pwd}
              onChange={(e) => setAuthor_pwd(e.target.value)}
            />
            {id ? <Button type="submit" text="Atualizar" />  :  <Button type="submit" text="Cadastrar" />  }        
          </form>
        </Section>
    </AuthContainer>
  );
}