import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AuthContainer, Section } from "./ListStyled";
import { getAllPosts } from "../../services/articleService";
import { getAllUsers } from "../../services/userService";
import { getArtigoById } from "../../services/articleService";
import { getUserById } from "../../services/userService";

export function List() {
  const [artigos, setArtigos] = useState([]);
  const [usuarios, setUsuarios] = useState([]);

  async function findPost() {
    const postsResponse = await getAllPosts();
    setArtigos(postsResponse.data);
  }

  async function findUser() {
    const postsResponse = await getAllUsers();
    setUsuarios(postsResponse.data);
  }

  useEffect(() => {
    findPost();
    findUser();
  }, []);

  return (
    <AuthContainer>
      <Section type="artigo">
        <h2>Artigos</h2>
        <ul>
          {artigos.map((artigo) => (
            <li key={artigo.id}>
              <Link to={'/teste/'}>{artigo.kb_title}</Link>
            </li>
          ))}
        </ul>
      </Section>
      <Section type="usuario">
        <h2>Usuários</h2>
        <ul>
          {usuarios.map((usuario) => (
            <li key={usuario.id}>
              <Link to={`/teste/}`}>{usuario.author_name}</Link>
            </li>
          ))}
        </ul>
      </Section>
    </AuthContainer>
  );
}
