import React, { useState, useEffect } from "react";
import { AuthContainer, Section } from "./ListStyled";
import { getAllPosts} from "../../services/articleService";
import { getAllUsers } from "../../services/userService";

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
    <h2 style={{ marginBottom: '10px' }}>Artigos</h2>
      <ul>
        {artigos.map(artigo => (
          <li>{artigo.kb_title}</li>
        ))}
      </ul>
    </Section>
    <Section type="usuario">
      <h2>Usuários</h2>
      <ul>
        {usuarios.map(usuario => (
          <li>{usuario.author_name}</li>
        ))}
      </ul>
    </Section>
    </AuthContainer>
  );
};