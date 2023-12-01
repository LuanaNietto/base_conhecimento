import React, { useState } from "react";
import { Button } from "../../components/Button/Button";
import { Input } from "../../components/Input/Input";
import { AuthContainer, Section } from "./ArticleStyled";
import { create } from "../../services/articleService";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

export function Article() {
  const navigate = useNavigate();

  const [kb_title, setKb_title] = useState('');
  const [kb_body, setKb_body] = useState('');
  const [kb_permalink, setKb_permalink] = useState('');
  const [kb_author_email, setKb_author_email] = useState('');
  const [keywordsArray, setKeywordsArray] = useState([]);
  
  const handleTitleChange = (e) => {
    setKb_title(e.target.value);
  };

  const handleLinkChange = (e) => {
    setKb_permalink(e.target.value);
  };

  const handleBodyChange = (e) => {
    setKb_body(e.target.value);
  };

  const handleKeywordChange = (e) => {
    const arrayFromInput = e.target.value.split(',');
    const trimmedArray = arrayFromInput.map((item) => item.trim());
  
    setKeywordsArray(trimmedArray);
  };

  const handleAuthorChange = (e) => {
    setKb_author_email(e.target.value);
  };

  const handleSubmitRegister = (e) => {
    e.preventDefault();
    upHanleSubmit({kb_title, kb_body, keywordsArray, kb_permalink, kb_author_email});
  }

  async function upHanleSubmit(data) {
    console.log(data);
    try {
      const response = await create(data);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <AuthContainer>     
      <Section type="signup">
        <h2>Cadastrar Artigo</h2>
        <form onSubmit={handleSubmitRegister}>
          <Input
            type="text"
            placeholder="Titulo"
            name="kb_title"
            onChange={handleTitleChange}
          />
          <Input
            type="text"
            placeholder="Texto"
            name="kb_body"
            onChange={handleBodyChange}
          />
           <Input
            type="text"
            placeholder="Link"
            name="kb_permalink"
            onChange={handleLinkChange}
          />
          <Input
            type="text"
            placeholder="Palavras chaves"
            name="kb_keywords"
            onChange={handleKeywordChange}
          />
          <Input
            type="email"
            placeholder="Email do autor"
            name="kb_author_email"
            onChange={handleAuthorChange}
          />
          <Button type="submit" text="Cadastrar" />
        </form>
      </Section>
    </AuthContainer>
  );
}