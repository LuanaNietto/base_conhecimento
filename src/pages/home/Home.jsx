import { useState, useEffect } from "react";
import { Card } from "../../components/Card/Card";
import { getAllPosts} from "../../services/articleService";
import { HomeBody, H1 } from "./HomeStyled";

export default function Home() {
  const [posts, setPosts] = useState([]);

  async function findPost() {
    const postsResponse = await getAllPosts();
    const artigos = postsResponse.data.sort((a, b) => b.kb_liked_count - a.kb_liked_count);
    setPosts(artigos); 
   }

  useEffect(() => {
    findPost();
  }, []);

  return (
    <>
      <H1>Artigos de destaques <i className="bi bi-star" style={{color: '#DAA520', fontSize: '20px'}}></i></H1>
      <HomeBody>
        {posts.map(item => (
          item.kb_featured == 'on' ? (
            <Card
            key={item._id}
            title={item.kb_title}
            text={item.kb_body}
            banner={item.kb_keywords}
            feature={item.kb_featured}
            likes={item.kb_liked_count}
            id={item._id}
          />
          ) :(
            <h2></h2>
          )
          
        ))}
      </HomeBody>
      <H1>Todos os artigos ordenados pelo número de curtidas</H1>
      <HomeBody>
        {posts.map(item => (
          <Card
            key={item._id}
            title={item.kb_title}
            text={item.kb_body}
            banner={item.kb_keywords}
            feature={item.kb_featured}
            likes={item.kb_liked_count}
            id={item._id}
          />
        ))}
      </HomeBody>
    </>
  );
}