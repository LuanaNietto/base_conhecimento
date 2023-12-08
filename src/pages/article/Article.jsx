import React, { useState, useEffect } from "react";
import { Button } from "../../components/Button/Button";
import { Input } from "../../components/Input/Input";
import { AuthContainer, Section } from "./ArticleStyled";
import { create, getArtigoById, updateArtigo } from "../../services/articleService";
import { useNavigate, useLocation } from "react-router-dom";

export function Article() {
  const navigate = useNavigate();
  const location = useLocation();
  const id = new URLSearchParams(location.search).get('id') || null;

  const [kb_title, setKb_title] = useState('');
  const [kb_body, setKb_body] = useState('');
  const [kb_permalink, setKb_permalink] = useState('');
  const [kb_keywords, setKb_keywords] = useState('');
  const [kb_author_email, setKb_author_email] = useState('');

  useEffect(() => {
    getArtigo();
  }, []);

  async function getArtigo() {
    try {
      if (id != null){
        const response = await getArtigoById(id);
        
        if (response && response.data) {
          const artigoData = response.data;
          console.log(artigoData);
          setKb_title(artigoData.kb_title)
          setKb_body(artigoData.kb_body)
          setKb_permalink(artigoData.kb_permalink);
          setKb_keywords(artigoData.kb_keywords.join(', '));
          setKb_author_email(artigoData.kb_author_email);
        } 
      }   
      console.log(kb_title);   
    } catch (error) {
      console.error("Error fetching post:", error);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const artigoData = {
      kb_title,
      kb_body,
      kb_permalink,
      kb_keywords: kb_keywords.split(',').map(keyword => keyword.trim()),
      kb_author_email,
    };

    try {
      if(id){
        await updateArtigo(id, artigoData);
      } else{
        await create(artigoData);
      }
      
      navigate("/admin");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <AuthContainer>     
      <Section type="signup">
        <h2>{id ? 'Atualizar artigo': 'Cadastrar Artigo'}</h2>
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="Titulo"
            value={kb_title}
            onChange={(e) => setKb_title(e.target.value)}
          />
          <Input
            type="text"
            placeholder="Texto"
            value={kb_body}
            onChange={(e) => setKb_body(e.target.value)}
          />
           <Input
            type="text"
            placeholder="Link"
            value={kb_permalink}
            onChange={(e) => setKb_permalink(e.target.value)}
          />
          <Input
            type="text"
            placeholder="Palavras chaves (separadas por vírgula)"
            value={kb_keywords}
            onChange={(e) => setKb_keywords(e.target.value)}
          />
        
          <Input
            type="email"
            placeholder="Email do autor"
            value={kb_author_email}
            onChange={(e) => setKb_author_email(e.target.value)}
          />
          <Button type="submit" text="Cadastrar" />
        </form>
      </Section>
    </AuthContainer>
  );
}