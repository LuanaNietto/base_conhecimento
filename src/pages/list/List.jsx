import React, { useState } from "react";
import { AuthContainer, Section } from "./ListStyled";

export function List() {

  const artigos = ['Exemplo 01', 'Exemplo 02', 'Exemplo 03'];
  const usuarios = ['Exemplo 01', 'Exemplo 02', 'Exemplo 03'];

  return (
    <AuthContainer>
    <Section type="artigo">
      <h2>Artigos</h2>
      <ul>
        {artigos.map((artigo, index) => (
          <li key={index}>{`${index + 1}- ${artigo}`}</li>
        ))}
      </ul>
    </Section>
    <Section type="usuario">
      <h2>Usuários</h2>
      <ul>
        {usuarios.map((usuario, index) => (
          <li key={index}>{`${index + 1}- ${usuario}`}</li>
        ))}
      </ul>
    </Section>
    </AuthContainer>
  );
};