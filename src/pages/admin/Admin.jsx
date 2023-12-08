import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { ButtonOnClick, ButtonCrud, Button } from "../../components/Button/Button";
import { Nav, Body, Li, Ul } from "./AdminStyled";
import { deleteArtigo, getAllPosts } from "../../services/articleService";
import { getAllUsers, deleteUser } from "../../services/userService";

export function Admin() {
  const [currentList, setCurrentList] = useState('users');
  const [users, setUsers] = useState([]);
  const [articles, setArticles] = useState([]);

  async function getUsers() {
    const postsResponse = await getAllUsers();
    setUsers(postsResponse.data);
  }

  async function getArtigos() {
    const postsResponse = await getAllPosts();
    setArticles(postsResponse.data);
  }

  const handleClick = (listType) => {
    setCurrentList(listType);
  };

  async function deletarUsuario(id){
    try {
      await deleteUser(id);
      alert("Usuário deletado com sucesso!");
      getUsers();
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  async function deletarArtigo(id){
    try {
      await deleteArtigo(id);
      alert("Artigo deletado com sucesso!");
      getArtigos();
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  useEffect(() => {
    getUsers();
    getArtigos();
  }, []);

  return (
    <>
        <Nav>
            <h1>Administrador</h1>
            <div>
                <Link to="/" style={{marginRight: '10px'}}>
                  <Button type="button" text="Home"></Button>
                </Link>
                <ButtonOnClick type="button" onClick={() => handleClick('users')} text="Usuários"></ButtonOnClick>
                <ButtonOnClick type="button" onClick={() => handleClick('articles')} text="Artigos"></ButtonOnClick>
            </div>
        </Nav>
        <Body>
            {currentList === 'users' ? (
                <div>
                    <Link to="/cadastrouser">
                        <ButtonCrud type="button" text="Cadastrar Novo Usuário"></ButtonCrud>
                    </Link>
                    <Ul>
                        {users.map(user => (
                            <Li key={user._id}>
                                <Link to={`/cadastrouser?id=${user._id}`}><li><strong>Nome: </strong>{user.author_name} - <strong>Usuário: </strong> {user.author_user}</li></Link>                                
                                <ButtonCrud type="button" onClick={() => deletarUsuario(user._id)} text="Deletar usuário"></ButtonCrud>
                            </Li>
                        ))}
                    </Ul>
                </div>
                ) : (
                <div>
                    <Link to="/article">
                        <ButtonCrud type="button" text="Cadastrar Novo Artigo"></ButtonCrud>
                    </Link>
                    <Ul>
                        {articles.map(article => (
                            <Li key={article._id}>
                                 <Link to={`/article?id=${article._id}`}><li><strong>Titulo: </strong>{article.kb_title}</li> </Link>                                                               
                                <ButtonCrud type="button" onClick={() => deletarArtigo(article._id)} text="Deletar artigo"></ButtonCrud>
                            </Li>
                        ))}
                    </Ul>
                </div>
            )}
        </Body>        
    </>
    
  );
}

